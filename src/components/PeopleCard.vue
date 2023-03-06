<template>
    <v-container class="d-flex">
        <v-card 
        class="mx-auto"
        max-width="400"
        >
            <v-img
                width="280"
                src="../assets/showdemcamp.jpg"
                cover
                class="text-white align-end"
            >
                <v-card-title class="text-white" v-text="title"></v-card-title>
            </v-img>
            <!-- <v-form
            v-model="form"
            >
                <v-text-field
                    :readonly=true
                    label="Song One"
                ></v-text-field>
                <v-text-field
                    :readonly=true
                    label="Song Two"
                ></v-text-field>
                <v-text-field
                    :readonly=true
                    label="Song Three"
                ></v-text-field>
            </v-form> -->
            <v-divider></v-divider>
            <v-text-field
                v-for="foll in follData"
                :key="foll"
                readonly
                density="compact"
                variant="solo"
            > {{ foll.name }} by {{ foll.artist }}
            </v-text-field>
        </v-card>
    </v-container>
</template>

    <script>
    export default {
    name: 'PeopleCard',
    props: {
        title: String,
        follData: Array
    },
    data: () => ({
        form: false,
    }),

    methods: {

        }
    }
    </script>