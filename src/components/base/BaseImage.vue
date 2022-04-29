<template>
  <v-img> </v-img>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component

export default class extends Vue {
  @Prop({
    type: Boolean,
    default: () => true
  })
  readonly indeterminate!: boolean;
}
</script>

<style scoped>
</style>
