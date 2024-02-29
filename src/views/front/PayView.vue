<template>
  <container style="align-items: center; width: 90%;justify-content: center;display: flex;margin-top: 10px;">
    <v-list style="width: 800px;background-color: rgba(256, 256, 256, 0.8);">
      <v-list-item>
        <v-row>
          <v-col cols="12"><h1>{{ ticket.name }}</h1></v-col>
          <v-divider></v-divider>
          <v-col cols="6"><h3>表演者：{{ ticket.performer }}</h3></v-col>
          <v-col cols="6"><h3>原價：{{ ticket.originalPrice }}</h3></v-col>
          <v-col cols="12"><h3>演出日期：{{ ticket.date }}</h3></v-col>
          <v-divider></v-divider>
          <v-col cols="12"><h2 style="font-weight: 500;">售價：NT$ {{ ticket.price}}</h2></v-col>
        </v-row>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item style="background-color: #FFFBE6;"></v-list-item>
      <v-list-item>
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-card>
            <h2 style="margin-top: 30px;">聯絡資訊</h2>
            <v-card-text>
              <v-text-field label="收件人姓名" error-messages="請輸入姓名"></v-text-field>
              <v-text-field label="連絡電話" type="number" error-messages="請輸入電話"></v-text-field>
              <v-text-field label="電子信箱" error-messages="請輸入電子信箱"></v-text-field>
              <v-text-field label="地址" error-messages="請輸入地址"></v-text-field>

              <v-select label="付款方式" :items="payWay" error-messages="請選擇付款方式"></v-select>
 
              <v-checkbox label="我以閱讀並同意服務條款" error-messages="請勾選"></v-checkbox>

            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" :disabled="isSubmitting" @click="closeDialog">返回</v-btn>
              <v-btn color="green" type="submit" :loading="isSubmitting">確認送出訂單</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-list-item>
    </v-list>
  </container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
// import { useForm, useField } from 'vee-validate'
// import * as yup from 'yup'
import { useUserStore } from '@/store/user'

const route = useRoute()
const router = useRouter()
const { api, apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()

const payWay = ['信用卡', '轉帳', 'linepay']

const ticket = ref({
  _id: '',
  name: '',
  date: '',
  performer: '',
  originalPrice: 0,
  price: 0,
  description: '',
  categoryCountry: '',
  categoryGroup: '',
  sell: true
})

onMounted(async () => {
  try {
    const { data } = await api.get('/tickets/' + route.params.id)
    ticket.value._id = data.result._id
    ticket.value.name = data.result.name
    ticket.value.date = data.result.date
    ticket.value.performer = data.result.performer
    ticket.value.originalPrice = data.result.originalPrice
    ticket.value.price = data.result.price
    ticket.value.description = data.result.description
    ticket.value.categoryCountry = data.result.categoryCountry
    ticket.value.categoryGroup = data.result.categoryGroup
    ticket.value.sell = data.result.sell

    document.title = `GoConcert - ${ticket.value.name}`
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
    router.push('/')
  }
})

const schema = yup.object({
  name: yup
    .string()
    .required('缺少演唱會名稱'),
  date: yup
    .date()
    .required('缺少演唱會日期')
    .min(new Date(), '日期須大於今天'),
  performer: yup
    .string()
    .required('缺少表演者名稱'),
  originalPrice: yup
    .number()
    .typeError('票券原價格式錯誤，請填寫數字')
    .required('請填寫票券原價').min(0, '價格不能小於0'),
  price: yup
    .number()
    .typeError('票券售價格式錯誤，請填寫數字')
    .required('請填寫票券售價').min(0, '價格不能小於0'),
  description: yup
    .string(),
  categoryCountry: yup
    .string()
    .required('請選擇表演者國籍')
    .test('isCategoryCountry', '表演者國籍有誤', value => CategoryCountry.includes(value)),
  categoryGroup: yup
    .string()
    .required('請選擇表演者性質')
    .test('isCategoryGroup', '表演者性質有誤', value => CategoryGroup.includes(value)),
  sell: yup
    .boolean()
})

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    performer: '',
    originalPrice: 0,
    price: 0,
    description: '',
    categoryCountry: '',
    categoryGroup: '',
    sell: false
  }
})

const name = useField('name')
const date = useField('date')
const performer = useField('performer')
const originalPrice = useField('originalPrice')
const price = useField('price')
const description = useField('description')
const categoryCountry = useField('categoryCountry')
const categoryGroup = useField('categoryGroup')
const sell = useField('sell')

const submit = handleSubmit(async (values) => {
  try {
    if (dialogId.value === '') {
      await apiAuth.post('/tickets', {
        name: values.name,
        date: values.date,
        performer: values.performer,
        originalPrice: values.originalPrice,
        price: values.price,
        description: values.description,
        categoryCountry: values.categoryCountry,
        categoryGroup: values.categoryGroup,
        sell: values.sell
      })
    } else {
      await apiAuth.patch('/tickets/' + dialogId.value, {
        name: values.name,
        date: values.date,
        performer: values.performer,
        originalPrice: values.originalPrice,
        price: values.price,
        description: values.description,
        categoryCountry: values.categoryCountry,
        categoryGroup: values.categoryGroup,
        sell: values.sell
      })
    }
    createSnackbar({
      text: dialogId.value === '' ? '新增成功' : '編輯成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    closeDialog()
    tableApplySearch()
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})
</script>
