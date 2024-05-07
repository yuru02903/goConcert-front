<template>
  <v-row class="pa-0 ma-0">
    <v-col cols="12" class="pa-8">
      <h1>我的資料</h1>
      <v-divider></v-divider>
    </v-col>
      <v-card class="mx-auto" width="80%">

      </v-card>
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

const CategoryCountry = ['台灣', '韓國', '日本', '歐美', '泰國', '其他']
const CategoryGroup = ['團體', '個人']

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

// 表格
// 表格每頁幾個
const tableItemsPerPage = ref(10)
// 表格排序 ( desc=倒序 ; asc=正序 )
const tableSortBy = ref([
  { key: 'createdAt', order: 'desc' }
])
// 表格頁碼
const tablePage = ref(1)
// 表格商品資料陣列
const tableTickets = ref([])
// 表格欄位設定
const tableHeaders = [
  { title: '名稱', align: 'center', sortable: true, key: 'name' },
  { title: '演出日期', align: 'center', sortable: true, key: 'date' },
  { title: '表演者', align: 'center', sortable: true, key: 'performer' },
  { title: '原價', align: 'center', sortable: true, key: 'originalPrice' },
  { title: '售價', align: 'center', sortable: true, key: 'price' },
  // { title: '說明', align: 'center', sortable: true, key: 'description' },
  { title: '分類', align: 'center', sortable: true, key: 'categoryCountry' },
  { title: '性質', align: 'center', sortable: true, key: 'categoryGroup' },
  { title: '上架', align: 'center', sortable: true, key: 'sell' },
  { title: '編輯', align: 'center', sortable: false, key: 'edit' }
]
// 表格載入狀態
const tableLoading = ref(true)
// 表格全部資料數
const tableItemsLength = ref(0)
// 表格搜尋文字
const tableSearch = ref('')
// 表格載入資料
const tableLoadItems = async () => {
  tableLoading.value = true
  try {
    const { data } = await apiAuth.get('/tickets/my', {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0]?.key || 'createdAt',
        sortOrder: tableSortBy.value[0]?.order === 'asc' ? 1 : -1,
        search: tableSearch.value
      }
    })
    tableTickets.value.splice(0, tableTickets.value.length, ...data.result.data)
    tableItemsLength.value = data.result.total
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
  tableLoading.value = false
}
tableLoadItems()

const tableApplySearch = () => {
  tablePage.value = 1
  tableLoadItems()
}

</script>

<style>

</style>
