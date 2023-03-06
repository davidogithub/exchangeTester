<template>
    <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="1085"
    >
        <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
            show-arrows
            >
            <v-slide-group-item
                v-for="n in songData"
                :key="n"
            >
                <PeopleCard :title="n.name" :follData="n.exchange.songs"/>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
  </template>

    <script>
        import PeopleCard from '@/components/PeopleCard.vue'
        import songData from '@/assets/songList.json'
        export default {
        name: 'CardSlide',
        data: () => ({
            model: null,
            songData: songData.total.followers
        }),
        components: {
            PeopleCard
        }
        }
    </script>