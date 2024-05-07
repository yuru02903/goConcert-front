<template>
  <v-row class="py-8 px-4 ma-0">
    <v-col cols="12" class=" ">
      <h1>票券管理</h1>
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
  <!-- <v-row class="py-8 px-4 ma-0">
    <v-col cols="12" class=" ">
      <h1>票券管理</h1>
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
  </v-row> -->
</template>

<script setup>
import { ref } from 'vue'

import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

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
  // { title: '性質', align: 'center', sortable: true, key: 'categoryGroup' },
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
