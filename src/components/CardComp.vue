<template>
    <div>
        <v-card 
        class="mx-auto"
        max-width="344"
        variant="outlined"
        >
            <v-img
                width="400"
                src="../assets/showdemcamp.jpg"
                cover
                class="text-white" >
            </v-img>
            <v-form
            v-model="form"
            @submit.prevent="onSubmit"
            >
                <v-text-field
                    v-model="songOne"
                    label="Song One"
                ></v-text-field>
                <v-text-field
                    v-model="songTwo"
                    label="Song Two"
                ></v-text-field>
                <v-text-field
                    v-model="songThree"
                    label="Song Three"
                ></v-text-field>
                <v-btn
                    :disabled="!form"
                    block
                    color="success"
                    size="large"
                    type="submit"
                    variant="elevated"
                >
                    Lock In
                </v-btn>
            </v-form>
        </v-card>
        <!-- <h3>I can tell you that the edit prop is {{ owner }}</h3> -->
    </div>
</template>
    <script>
    export default {
    name: 'SongCard',
    // props: {
    //     owner: Boolean
    // },
    data: () => ({
        form: false,
        songOne: null,
        songTwo: null,
        songThree: null
    }),

    methods: {
        onSubmit () {
        if (!this.form) return


        setTimeout(() => 2000)
    },
    }
    }
    </script>