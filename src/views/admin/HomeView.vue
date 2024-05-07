<template>
  <v-row class="py-8 px-4 ma-0">
    <v-col cols="12" class=" ">
      <h1>會員管理</h1>
      <v-divider></v-divider>
    </v-col>
    <v-card class="mx-auto" width="80%" style="background-color: #FFFBE6;">
      <v-list>
          <v-list-item>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="搜尋" append-icon="mdi-magnify" v-model="tableSearch"
                  @click:append="tableApplySearch" @keydown.enter="tableApplySearch" >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-data-table-server
                  v-model:items-per-page="tableItemsPerPage"
                  v-model:sort-by="tableSortBy"
                  v-model:page="tablePage"
                  :items="tableTickets"
                  :headers="tableHeaders"
                  :loading="tableLoading"
                  :items-length="tableItemsLength"
                  :search="tableSearch"
                  @update:items-per-page="tableLoadItems"
                  @update:sort-by="tableLoadItems"
                  @update:page="tableLoadItems"
                  hover>
                  <template #[`item.eye`]="{ item }">
                    <v-btn icon="mdi-eye" variant="text" color="grey" @click="openDialog(item)"></v-btn>
                  </template>
                  <template #[`item.cancel`]="{ item }">
                    <v-btn icon="mdi-close" variant="text" color="red" @click="openDialog(item)"></v-btn>
                  </template>
                </v-data-table-server>
              </v-col>
            </v-row>
          </v-list-item>
      </v-list>
    </v-card>
  </v-row>

  <!-- <v-dialog v-model="dialog" width="500px">
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
  </v-dialog> -->
</template>

<script setup>
import { ref } from 'vue'
// import * as yup from 'yup'
// import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

// const dialog = ref(false)

// const dialogId = ref('')

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
  { title: '帳號', align: 'center', sortable: true, key: 'account' },
  { title: '身分證', align: 'center', sortable: true, key: 'nationalIdNumber' },
  { title: 'email', align: 'center', sortable: true, key: 'email' },
  { title: '查看', align: 'center', sortable: false, key: 'eye' },
  { title: '禁用', align: 'center', sortable: false, key: 'cancel' }
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
    const { data } = await apiAuth.get('/users', {
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
