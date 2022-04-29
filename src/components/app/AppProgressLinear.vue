<template>
  <v-progress-linear v-bind="{ indeterminate, app: true, fixed: true }"> </v-progress-linear>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component

export default class extends Vue {
  @Prop({
    type: Boolean,
    default: () => false
  })
  readonly indeterminate!: boolean;
}
</script>

<style scoped>
</style>
