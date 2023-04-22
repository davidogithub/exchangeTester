<template>
  <v-app-bar 
    :elevation="2"  
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-4" />
      Oxmanni
    </v-app-bar-title>
    <router-link to="/login">Login</router-link>
  </v-app-bar>
</template>

<script setup>
  //
</script>
