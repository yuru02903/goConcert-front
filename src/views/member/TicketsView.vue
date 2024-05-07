<template>
  <v-row class="pa-0 ma-0">
    <v-col cols="12" class="pa-8">
      <h1>票券管理</h1>
      <v-divider></v-divider>
    </v-col>
      <v-card class="mx-auto" width="80%">
        <v-list>
          <v-list-group value="MyTickets">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="我的票券"></v-list-item>
            </template>
            <v-list-item>
              <v-row class="pt-2">
                <v-col cols="6">
                  <v-btn color="green" @click="openDialog()">新增票券</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="搜尋" append-icon="mdi-magnify" density="comfortable"
                    v-model="tableSearch" rounded variant="outlined"
                    @click:append="tableApplySearch"
                    @keydown.enter="tableApplySearch"
                  ></v-text-field>
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
                    hover >
                    <template #[`item.sell`]="{ item }">
                      <v-icon icon="mdi-check" v-if="item.sell"></v-icon>
                    </template>
                    <template #[`item.edit`]="{ item }">
                      <v-btn icon="mdi-pencil" variant="text" color="grey" @click="openDialog(item)"></v-btn>
                    </template>
                  </v-data-table-server>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list-group>
          <v-list-group value="Admin">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="轉讓紀錄">
              </v-list-item>
            </template>
          </v-list-group>
        </v-list>
      </v-card>
  </v-row>

  <v-dialog v-model="dialog" width="500px" >
    <v-form :disabled="isSubmitting" @submit.prevent="submit">
      <v-card>
        <v-card-title >{{ dialogId === '' ? '新增票券' : '編輯票券' }}</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                label="演唱會名稱"
                v-model="name.value.value"
                :error-messages="name.errorMessage.value">
              </v-text-field>
            </v-col>
            <v-col cols="12">
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="演唱會日期"
                type="date"
                v-model="date.value.value"
                :error-messages="date.errorMessage.value">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="表演者"
                v-model="performer.value.value"
                :error-messages="performer.errorMessage.value">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="場館"
                v-model="venue.value.value"
                :error-messages="venue.errorMessage.value">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="區域"
                v-model="area.value.value"
                :error-messages="area.errorMessage.value">
              </v-text-field>
            </v-col>
            <v-col cols="6" class="pr-2" >
              <v-text-field
                label="排"
                v-model="row.value.value"
                :error-messages="row.errorMessage.value">
              </v-text-field>
            </v-col>
            <v-col cols="6" class="pl-2" >
              <v-select
                label="座位 (非必選)"
                :items="Seat"
                v-model="seat.value.value"
                :error-messages="seat.errorMessage.value">
              </v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="原始票價"
                type="number" min="0"
                v-model="originalPrice.value.value"
                :error-messages="originalPrice.errorMessage.value">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="售價"
                type="number"
                min="0"
                v-model="price.value.value"
                :error-messages="price.errorMessage.value">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                label="表演者國籍"
                :items="CategoryCountry"
                v-model="categoryCountry.value.value"
                :error-messages="categoryCountry.errorMessage.value">
              </v-select>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="其他說明"
                v-model="description.value.value"
                :error-messages="description.errorMessage.value">
              </v-textarea>
            </v-col>
            <v-checkbox
              label="是否上架"
              v-model="sell.value.value"
              :error-messages="sell.errorMessage.value">
            </v-checkbox>
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

const openDialog = (item) => {
  if (item) {
    dialogId.value = item._id
    name.value.value = item.name
    date.value.value = item.date
    performer.value.value = item.performer
    venue.value.value = item.venue
    area.value.value = item.area
    row.value.value = item.row
    seat.value.value = item.seat
    originalPrice.value.value = item.originalPrice
    price.value.value = item.price
    categoryCountry.value.value = item.categoryCountry
    // categoryGroup.value.value = item.categoryGroup
    sell.value.value = item.sell
    description.value.value = item.description
  } else {
    dialogId.value = ''
  }
  dialog.value = true
}

const closeDialog = () => {
  dialog.value = false
  resetForm()
}

const CategoryCountry = ['台灣', '韓國', '日本', '歐美', '泰國', '其他']
const Seat = ['近走道', '靠中間']
// const CategoryGroup = ['團體', '個人']

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
  venue: yup
    .string()
    .required('缺少場館名稱'),
  area: yup
    .string()
    .required('缺少區域名稱'),
  row: yup
    .string()
    .required('缺少排數'),
  seat: yup
    .string(),
  // .test('isSeat', '座位有誤', value => Seat.includes(value)),
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
  // categoryGroup: yup
  //   .string()
  //   .required('請選擇表演者性質')
  //   .test('isCategoryGroup', '表演者性質有誤', value => CategoryGroup.includes(value)),
  sell: yup
    .boolean()
})

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
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
    sell: false
  }
})

const name = useField('name')
const date = useField('date')
const performer = useField('performer')
const venue = useField('venue')
const area = useField('area')
const row = useField('row')
const seat = useField('seat')
const originalPrice = useField('originalPrice')
const price = useField('price')
const description = useField('description')
const categoryCountry = useField('categoryCountry')
// const categoryGroup = useField('categoryGroup')
const sell = useField('sell')

const submit = handleSubmit(async (values) => {
  try {
    if (dialogId.value === '') {
      await apiAuth.post('/tickets', {
        name: values.name,
        date: values.date,
        performer: values.performer,
        venue: values.venue,
        area: values.area,
        row: values.row,
        seat: values.seat,
        originalPrice: values.originalPrice,
        price: values.price,
        description: values.description,
        categoryCountry: values.categoryCountry,
        // categoryGroup: values.categoryGroup,
        sell: values.sell
      })
    } else {
      await apiAuth.patch('/tickets/' + dialogId.value, {
        name: values.name,
        date: values.date,
        performer: values.performer,
        venue: values.venue,
        area: values.area,
        row: values.row,
        seat: values.seat,
        originalPrice: values.originalPrice,
        price: values.price,
        description: values.description,
        categoryCountry: values.categoryCountry,
        // categoryGroup: values.categoryGroup,
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
  { title: '場館', align: 'center', sortable: true, key: 'venue' },
  { title: '區域', align: 'center', sortable: true, key: 'area' },
  { title: '排', align: 'center', sortable: true, key: 'row' },
  { title: '座位', align: 'center', sortable: true, key: 'seat' },
  { title: '原價', align: 'center', sortable: true, key: 'originalPrice' },
  { title: '售價', align: 'center', sortable: true, key: 'price' },
  // { title: '說明', align: 'center', sortable: true, key: 'description' },
  { title: '分類', align: 'center', sortable: true, key: 'categoryCountry' },
  // { title: '性質', align: 'center', sortable: true, key: 'categoryGroup' },
  { title: '上架', align: 'center', sortable: true, key: 'sell' },
  { title: '編輯', align: 'center', sortable: false, key: 'edit' }
]
// 表格載入狀態
const tableLoading = ref(true)
// 表格全部資料數
const tableItemsLength = ref(0)
// 表格搜尋文字
const tableSearch = ref('')

const currentDate = new Date() // 獲取當前日期和時間的 Date 物件
const formattedDate = currentDate.toISOString().split('T')[0] // 格式化日期為年-月-日

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
    console.log(data.result.data)
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
