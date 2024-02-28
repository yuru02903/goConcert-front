<template>
  <v-row class="pa-0 ma-0">
    <v-col cols="2" class="pa-2 ma-0 " style="border-right: 1px solid rgb(224, 224, 224)">
      <v-text-field
        label="搜尋" append-icon="mdi-magnify" rounded variant="outlined" base-color="rgb(224, 224, 224)" bg-color="rgb(256, 256, 256)"  density="compact" class="pt-4 pa-1">
      </v-text-field>
      <v-list height="100vh" bg-color="bgPrimary" v-model:opened="open">
        <v-list-group value="Country" opened>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="國籍"
            ></v-list-item>
          </template>
            <v-list-item
            v-for="item in navItems"
            :key="item.country"
            :title="item.country"
            ></v-list-item>
        </v-list-group>
      </v-list>
    </v-col>
    <v-col cols="10" class="pa-0 ma-0">
      <v-container >
        <v-row>
          <v-col cols="12">
            <h2>票券交流</h2>
          </v-col>
          <v-divider></v-divider>
          <v-col cols="12" v-for="ticket in tickets" :key="ticket._id">
            <TicketCard v-bind="ticket"></TicketCard>
          </v-col>
        </v-row>

      </v-container>
    </v-col>
  </v-row>

</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import TicketCard from '@/components/TicketCard.vue'
import gsap from 'gsap'

const { api } = useApi()
const createSnackbar = useSnackbar()

const tickets = ref([])

const navItems = computed(() => {
  return [
    { country: '台灣' },
    { country: '韓國' },
    { country: '日本' },
    { country: '歐美' },
    { country: '泰國' },
    { country: '其他' }
  ]
})

const open = ref(['Country'])

onMounted(async () => {
  try {
    const { data } = await api.get('/tickets/all', {
      params: {
        itemsPerPage: -1
      }
    })
    tickets.value.push(...data.result.data)
    await nextTick()
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
