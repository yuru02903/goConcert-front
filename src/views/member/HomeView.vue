<template>
  <v-row class="py-8 px-4 ma-0">
    <v-col cols="12" class=" ">
      <h1>我的資料</h1>
      <v-divider></v-divider>
    </v-col>
    <v-form :disabled="isSubmitting" @submit.prevent="submit">
      <v-card class="mx-auto" width="80%" style="background-color: #FFFBE6;">
        <v-text-field label="帳號" v-model="name.value.value"
        :error-messages="name.errorMessage.value"></v-text-field>
      </v-card>
    </v-form>
  </v-row>

</template>

<script setup>
import { ref } from 'vue'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

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
const account = useField('date')
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
      await apiAuth.patch('/users/' + dialogId.value, {
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
      text: '編輯成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
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

<style>

</style>
