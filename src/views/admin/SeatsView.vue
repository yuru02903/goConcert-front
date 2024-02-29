<template>
  <v-row class="py-8 px-4 ma-0">
    <v-col cols="12" class=" ">
      <h1>座位管理</h1>
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12" style="position: absolute; top: 220px;">
      <v-btn color="green" @click="openDialog" style="top: 0;">新增座位</v-btn>
    </v-col>

  </v-row>

  <v-dialog v-model="dialog" width="500px">
    <v-form :disabled="isSubmitting" @submit.prevent="submit">
      <v-card>
        <v-card-title>{{ dialogId === '' ? '新增座位' : '編輯座位' }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field label="場館名稱" clearable v-model="venue.value.value"
                :error-messages="venue.errorMessage.value"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="區域" clearable v-model="area.value.value"
                :error-messages="area.errorMessage.value"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="排數" clearable v-model="row.value.value"
                :error-messages="row.errorMessage.value"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="開始座號" clearable v-model="seat1.value.value"
                :error-messages="seat1.errorMessage.value"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="結束座號" clearable v-model="seat2.value.value"
                :error-messages="seat2.errorMessage.value"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" :disabled="isSubmitting" @click="closeDialog">取消</v-btn>
          <v-btn color="green" type="submit" :loading="isSubmitting">送出</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const dialog = ref(false)
const dialogId = ref('')

const openDialog = () => {
  dialogId.value = ''
  dialog.value = true
}

const closeDialog = () => {
  dialog.value = false
  resetForm()
}

const schema = yup.object({
  venue: yup
    .string()
    .required('缺少場館名稱'),
  area: yup
    .string()
    .required('缺少區域名稱'),
  row: yup
    .number()
    .typeError('格式錯誤，請填寫數字')
    .required('缺少排數'),
  seat1: yup
    .number()
    .typeError('格式錯誤，請填寫數字')
    .required('缺少開始座號'),
  seat2: yup
    .number()
    .typeError('格式錯誤，請填寫數字')
    .required('缺少結束座號')
})

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema
})

const venue = useField('venue')
const area = useField('area')
const row = useField('row')
const seat1 = useField('seat1')
const seat2 = useField('seat2')

const submit = handleSubmit(async (values) => {
  try {
    for (let i = values.seat1; i <= values.seat2; i++) {
      await apiAuth.post('/seats', {
        venue: values.venue,
        area: values.area,
        row: values.row,
        seat: i
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
  { title: '賣家', align: 'center', sortable: true, key: 'seller.account' },
  { title: '名稱', align: 'center', sortable: true, key: 'name' },
  { title: '表演者', align: 'center', sortable: true, key: 'performer' },
  { title: '原價', align: 'center', sortable: true, key: 'originalPrice' },
  { title: '售價', align: 'center', sortable: true, key: 'price' },
  // { title: '說明', align: 'center', sortable: true, key: 'description' },
  { title: '國籍', align: 'center', sortable: true, key: 'categoryCountry' },
  { title: '性質', align: 'center', sortable: true, key: 'categoryGroup' },
  { title: '查看', align: 'center', sortable: false, key: 'eye' },
  { title: '禁售', align: 'center', sortable: false, key: 'cancel' }
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
    const { data } = await apiAuth.get('/tickets/all', {
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
