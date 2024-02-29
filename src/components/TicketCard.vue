<template>
  <v-card class="ticketCard">
    <v-row  class="ma-0 pa-0">
      <v-col cols="3">
        <v-card-title style="">
          {{ name }}
        </v-card-title>
        <v-card-subtitle style="color: #e76813;font-weight: bolder;opacity: 1;" class="pb-1"> 售價：{{ price }}</v-card-subtitle>
      </v-col>
      <v-col cols="2" class="ma-0 pa-3">
        <h5>日期：{{ date }}</h5>
        <h5>演出者：{{ performer }}</h5>
        <h5>原價：{{ originalPrice }}</h5>
        <h5>賣家：{{ seller.account }}</h5>
      </v-col>
      <v-col cols="5">
        <v-btn class="mx-1" rounded size="small" style="font-weight: 700;" color="bgPrimary">{{ categoryCountry }}</v-btn>
        <v-btn class="mx-1" rounded size="small" style="font-weight: 700;" color="bgPrimary">{{ categoryGroup }}</v-btn>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="2" style="background-color: #e76813;">
        <router-link class="text-primary text-decoration-none" :to="'/tickets/' + _id">
          <div style="height: 100%;line-height: 80px;" >
            <h3 class="text-center" style="color: white;">
              我要購買
            </h3>
          </div>
        </router-link>

      </v-col>

    </v-row>
  </v-card>
</template>

<script setup>

const props = defineProps(['_id', 'name', 'date', 'performer', 'originalPrice', 'price', 'seller', 'categoryCountry', 'categoryGroup', 'description', 'sell'])

</script>
