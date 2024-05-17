<template>
  <v-container style="align-items: center; width: 90%;justify-content: center;display: flex;padding-top: 30px;margin: auto">
    <v-list style="width: 800px;background-color: rgba(256, 256, 256, 0.8);">
      <v-list-item>
        <v-row>
          <v-col cols="12">
            <h1 class="color-textPrimary">{{ ticket.name }}</h1>
          </v-col>
          <v-divider></v-divider>
          <v-col cols="12"><h3>賣家：{{ ticket.seller.account }}</h3></v-col>
          <v-col cols="12" md="6"><h3>表演者：{{ ticket.performer }}</h3></v-col>
          <v-col cols="12" md="6"><h3>演出日期：{{ ticket.date }}</h3></v-col>
          <v-col cols="12" md="6" lg="3"><h3>場館：{{ ticket.venue }}</h3></v-col>
          <v-col cols="12" md="6" lg="3"><h3>區域：{{ ticket.area }}</h3></v-col>
          <v-col cols="12" md="6" lg="3"><h3>排數：{{ ticket.row }} 排</h3></v-col>
          <v-col cols="12" md="6" lg="3">
            <h3 v-if="ticket.description.length > 0">座位：{{ ticket.seat }}</h3>
            <h3 v-else>座位：未提供資訊</h3>
          </v-col>
          <v-col cols="12">
            <h3 v-if="ticket.description.length > 0">其他說明：{{ ticket.description }}</h3>
            <h3 v-else>其他說明：無</h3>
          </v-col>
          <v-col cols="12"><h3>原價：{{ ticket.originalPrice }}</h3></v-col>
          <v-divider></v-divider>
          <v-col cols="12">
            <h2 class="color-textPrimary" style="font-weight: 700">售價：NT$ {{ ticket.price}}</h2>
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item style="background-color: #FFFBE6;"></v-list-item>
      <v-list-item>
        <v-form :disabled="isSubmitting" @submit.prevent="submit" v-if="ticket.sell">
          <!-- 如果票券尚未下架 => 可填寫收件資訊 -->
          <v-card >
            <h2 style="margin-top: 30px;">收件資訊</h2>
            <v-card-text>
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field
                  label="收件人姓名"
                  v-model="recipient.value.value"
                  :error-messages="recipient.errorMessage.value"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                  label="連絡電話"
                  v-model="recipientPhone.value.value"
                  :error-messages="recipientPhone.errorMessage.value"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                  label="電子信箱"
                  v-model="recipientMail.value.value"
                  :error-messages="recipientMail.errorMessage.value"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                  label="交貨方式"
                  :items="DeliveryWay"
                  v-model="deliveryWay.value.value"
                  :error-messages="deliveryWay.errorMessage.value"
                  ></v-select>
                </v-col>
                <v-col cols="12" v-if="deliveryWay.value.value === '面交'">
                  <h4 class="px-2 pb-4">賣家將透過email與您聯繫面交時間地點，請確認email為可用信箱；待訂單成立後將告知賣家email，請留意郵箱信件，謝謝！</h4>
                </v-col>
                <v-col cols="12" v-if="deliveryWay.value.value === '宅配'">
                  <v-text-field
                  label="宅配地址"
                  v-model="address.value.value"
                  :error-messages="address.errorMessage.value"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="5"
                v-if="deliveryWay.value.value === '超商取貨'">
                  <v-select
                  label="請選擇超商"
                  :items="ConvenienceStore"
                  v-model="convenienceStore.value.value"
                  :error-messages="convenienceStore.errorMessage.value"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="6" offset-md="1"
                v-if="deliveryWay.value.value === '超商取貨'">
                  <v-text-field
                  label="店號"
                  v-model="convenienceStoreNumber.value.value"
                  :error-messages="convenienceStoreNumber.errorMessage.value"
                  maxlength="6"
                  counter
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                  label="付款方式"
                  :items="PayWay"
                  v-model="payWay.value.value"
                  :error-messages="payWay.errorMessage.value"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-checkbox label="我已閱讀並同意服務條款"></v-checkbox>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green" type="submit" :loading="isSubmitting">送出訂單</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
        <v-row v-else style="text-align: center;align-items: center;" class="py-4">
          <v-col cols="12">
            <h2>抱歉，該票券已售出或下架</h2>
          </v-col>
          <v-col cols="12">
            <v-btn color="textPrimary" to="/tickets">返回</v-btn>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import validator from 'validator'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'

const route = useRoute()
const router = useRouter()
const { apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()

const PayWay = ['信用卡', '轉帳', 'linepay']
const DeliveryWay = ['面交', '超商取貨', '宅配']
const ConvenienceStore = ['7-11', '全家']

const ticket = ref({
  _id: '',
  seller: '',
  name: '',
  date: '',
  performer: '',
  venue: '',
  area: '',
  row: '',
  seat: '',
  originalPrice: 0,
  price: 0,
  description: '',
  categoryCountry: '',
  // categoryGroup: '',
  sell: true
})

const schema = yup.object({
  recipient: yup
    .string()
    .trim()
    .required('缺少收件人'),
  recipientPhone: yup
    .string()
    .required('缺少連絡電話')
    .matches(/^0\d{9}$/, '連絡電話格式有誤'),
  recipientMail: yup
    .string()
    .required('缺少聯絡信箱')
    // .test(自訂驗證名稱, 錯誤訊息, 驗證function)
    .test(
      'isEmail', '信箱格式有誤',
      (value) => {
        return validator.isEmail(value)
      }
    ),
  deliveryWay: yup
    .string()
    .required('請選擇交貨方式')
    .test('isDeliveryWay', '交貨方式有誤', value => DeliveryWay.includes(value)),
  address: yup
    .string()
    .trim()
    .test(
      'needAddress', '缺少宅配地址',
      (value) => {
        if (deliveryWay.value.value === '宅配' && value === '') {
          return false
        } else {
          return true
        }
      }
    ),
  // 無法使用以下.when功能 故以.test驗證
  // .when('deliveryWay', {
  //   is: '宅配',
  //   then: yup.string().required('缺少宅配地址')
  // })
  convenienceStore: yup
    .string()
    .test(
      'needChooseConvenienceStore', '尚未選擇超商',
      (value) => {
        if (deliveryWay.value.value === '超商取貨' && value === '') {
          return false
        } else {
          return true
        }
      }
    ),
  // .when('deliveryWay', {
  //   is: '超商取貨',
  //   then: yup
  //     .string()
  //     .required('請選擇超商')
  //     .test('isDeliveryWay', '超商選擇有誤', value => DeliveryWay.includes(value)),
  //   otherwise: yup.string() // 非超取不需要選超商
  // }),
  convenienceStoreNumber: yup
    .string()
    .test(
      'needConvenienceStoreNumber', '請填寫超商店號',
      (value) => {
        if (deliveryWay.value.value === '超商取貨' && value === '') {
          return false
        } else if (deliveryWay.value.value === '超商取貨' && convenienceStore.value.value === '7-11') {
          const pattern = /^[1-9]\d{5}$/ // 7-11店號規則
          if (pattern.test(value)) {
            return true
          } else {
            throw new yup.ValidationError('7-11超商店號為1~9開頭的六位數字，請重新確認所選超商及店號', value, 'convenienceStoreNumber')
          }
        } else if (deliveryWay.value.value === '超商取貨' && convenienceStore.value.value === '全家') {
          const pattern = /^0\d{5}$/ // 全家店號規則
          if (pattern.test(value)) {
            return true
          } else {
            throw new yup.ValidationError('全家超商店號為0開頭的六位數字，請重新確認所選超商及店號', value, 'convenienceStoreNumber')
          }
        } else if (deliveryWay.value.value !== '超商取貨') {
          return true
        }
      }
    ),
  payWay: yup
    .string()
    .required('請選擇付款方式')
    .test('isPayWay', '付款方式有誤', value => PayWay.includes(value))
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    recipient: '',
    recipientPhone: '',
    recipientMail: '',
    deliveryWay: '',
    address: '',
    convenienceStore: '',
    convenienceStoreNumber: '',
    payWay: ''
  }
})

const recipient = useField('recipient')
const recipientPhone = useField('recipientPhone')
const recipientMail = useField('recipientMail')
const deliveryWay = useField('deliveryWay')
const address = useField('address')
const convenienceStore = useField('convenienceStore')
const convenienceStoreNumber = useField('convenienceStoreNumber')
const payWay = useField('payWay')

const submit = handleSubmit(async (values) => {
  try {
    await apiAuth.post('/orders', {
      ticket: ticket.value._id,
      recipient: values.recipient,
      recipientPhone: values.recipientPhone,
      recipientMail: values.recipientMail,
      deliveryWay: values.deliveryWay,
      address: values.address,
      convenienceStore: values.convenienceStore,
      convenienceStoreNumber: values.convenienceStoreNumber,
      payWay: values.payWay
    })
    await apiAuth.patch('/tickets/' + ticket.value._id, {
      sell: false,
      orderStatus: '買家已下單'
    })

    createSnackbar({
      text: '下單成功，已通知賣家',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/tickets')
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

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/tickets/' + route.params.id)
    ticket.value._id = data.result._id
    ticket.value.name = data.result.name
    ticket.value.date = data.result.date
    ticket.value.performer = data.result.performer
    ticket.value.venue = data.result.venue
    ticket.value.area = data.result.area
    ticket.value.row = data.result.row
    ticket.value.seat = data.result.seat
    ticket.value.originalPrice = data.result.originalPrice
    ticket.value.price = data.result.price
    ticket.value.categoryCountry = data.result.categoryCountry
    ticket.value.description = data.result.description
    // ticket.value.categoryGroup = data.result.categoryGroup
    ticket.value.sell = data.result.sell
    ticket.value.seller = data.result.seller

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
</script>
<style>
.color-red {
  color: red
}
.color-textPrimary {
  color: #e76813;
}
</style>
