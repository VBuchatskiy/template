<template>
  <v-app-bar
    v-bind="{
      app: true,
      flat: true,
    }"
  >
    <v-row
      v-bind="{
        noGutters: true,
      }"
    >
    <v-col cols="12">
      <h1 class="text-capitalize"> gif shop</h1>
    </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component

export default class extends Vue {}
</script>

<style scoped>
</style>
