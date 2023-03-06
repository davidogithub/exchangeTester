<template>
    <v-container class="fill-height">
      <v-responsive class="d-flex align-center text-center fill-height">
  
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
  
        <h1 class="text-h2 font-weight-bold">My Exchange!</h1>
  
        <div class="py-14" />
  
        <v-row class="d-flex align-center justify-center">
          <v-col
            cols="16"
            sm="8"
          >
            <SongCard />
          </v-col>        
        </v-row>
      </v-responsive>
    </v-container>
  </template>
  
  <script>
    import SongCard from '@/components/CardComp.vue'
    export default {
      name: 'MyCard',
      data: () => ({
        owned: false
      }),
      components: {
        SongCard
      }
    }
  </script>