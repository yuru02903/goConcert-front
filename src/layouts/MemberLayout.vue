<template >
  <v-navigation-drawer
    v-model="memberDrawer"
    :rail="rail"
    permanent
    @click="rail = false"
    style="position: relative;float: left;top: 0;"
    color="bgPrimary"
    v-if="isSmall"
  >
  <v-list-item
      :prepend-avatar="prependAvatar"
      :title="user.account"
      class="pt-4"
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav >
      <template v-for="item in memberItems" :key="item.to" >
        <v-list-item :to="item.to" :active="false">
          <template #prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title> {{ item.text }} </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
  <v-navigation-drawer
  v-model="memberDrawer"
    permanent
    style="position: relative;float: left;height: 100%;"
    color="bgPrimary"
    v-else
  >
    <v-list-item
      :prepend-avatar="prependAvatar"
      :title="user.account"
      class="py-4"
    >
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav >
      <template v-for="item in memberItems" :key="item.to" >
        <v-list-item :to="item.to" :active="false">
          <template #prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title> {{ item.text }} </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
  <v-row class="pa-0 ma-0">
  <!-- <div style="width: 1280px; margin-right: auto; margin-left: auto;box-sizing: border-box;" > -->

    <RouterView :key="$route.path" ></RouterView>

  </v-row>
</template>

<script setup>

import { useDisplay } from 'vuetify'
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'

const { smAndDown } = useDisplay()
const isSmall = computed(() => smAndDown.value)

const memberDrawer = ref(true)
const rail = ref(true)

const user = useUserStore()

const prependAvatar = computed(() => {
  return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
})

const memberItems = computed(() => {
  return [
    { to: '/member', text: '我的資料', icon: 'mdi-account' },
    { to: '/member/tickets', text: '票券管理', icon: 'mdi-ticket-confirmation' },
    { to: '/member/orders', text: '訂單管理', icon: 'mdi-bag-suitcase' }
  ]
})

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
