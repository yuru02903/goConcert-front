<template>
  <v-row class="pa-0 ma-0">
    <v-col cols="2" class="pa-2 ma-0 " style="border-right: 1px solid rgb(224, 224, 224)">
      <v-text-field
        label="搜尋" append-icon="mdi-magnify" rounded variant="outlined"
        base-color="rgb(224, 224, 224)" bg-color="rgb(256, 256, 256)"
        density="compact" class="pt-4 pa-1" v-model="ticketSearch"
        @click:append="ticketApplySearch"
        @keydown.enter="ticketApplySearch">
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
            class="paddingx-16">
              <v-btn
              :text="item.country" variant="text" @click="btnCountrySearch(item.country)"
              width="100%" style="text-align: left;">
              </v-btn>
            </v-list-item>
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
        </v-row>
        <v-row v-if="tickets.length > 0">
          <v-col cols="12" v-for="(item, index) in paginatedData" :key="index" class="ticketCard" >
            <TicketCard v-bind="item"></TicketCard>
          </v-col>
          <v-col cols="12">
            <v-pagination v-model="currentPage" :length="totalPages" @input="changePage"></v-pagination>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="12" class="text-center">
            <h2 class="text-gray">目前尚無可購買票券</h2>
          </v-col>
        </v-row>

      </v-container>
    </v-col>
  </v-row>

</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import TicketCard from '@/components/TicketCard.vue'
// import gsap from 'gsap'

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

const ticketSearch = ref('')

const currentPage = ref(1)
const pageSize = 5
const totalPages = computed(() => Math.ceil(tickets.value.length / pageSize))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  window.scrollTo(0, 0)
  console.log('change page')
  // gsap.from('.ticketCard', {
  //   y: 200,
  //   opacity: 0,
  //   duration: 0.8,
  //   stagger: {
  //     each: 0.2
  //   }
  // })
  // gsap.to('.ticketCard', {
  //   opacity: 1,
  //   ease: 1,
  //   duration: 0.8,
  //   stagger: {
  //     each: 0.2
  //   }
  // })
  return tickets.value.slice(start, end)
})

const changePage = async (page) => {
  currentPage.value = page
}

const ticketItems = async () => {
  try {
    const { data } = await api.get('/tickets/all', {
      params: {
        itemsPerPage: -1,
        search: ticketSearch.value
      }
    })
    tickets.value.splice(0, tickets.value.length, ...data.result.data)
    await nextTick()

    // gsap.from('.ticketCard', {
    //   y: 200,
    //   duration: 1,
    //   stagger: {
    //     each: 0.2, // 每個元素動畫交錯的時間，
    //     from: 'start' // start、center、end、edges、random
    //   }
    // })
    // gsap.to('.ticketCard', {
    //   opacity: 1,
    //   ease: 1,
    //   duration: 0.8,
    //   stagger: {
    //     each: 0.2,
    //     from: 'start'
    //   }
    // })
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
}
ticketItems()

const btnCountrySearch = async (country) => {
  ticketSearch.value = country
  ticketApplySearch()
}

const ticketApplySearch = async () => {
  ticketItems()
  currentPage.value = 1
}

</script>

<style>
.paddingx-16 {
  padding-right: 32px !important;
}

/* .ticketCard {
  opacity: 0;
} */

.text-gray {
  color: grey
}

</style>
