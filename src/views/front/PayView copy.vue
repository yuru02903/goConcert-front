<template>
<v-list>
  <v-list-item>
    <v-row>
      <v-col cols="12"><h1>{{ ticket.name }}</h1></v-col>
    </v-row>
  </v-list-item>
</v-list>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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

const ticket = ref({
  _id: '',
  name: '',
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
</script>
