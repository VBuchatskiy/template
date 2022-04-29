<template>
  <v-pagination
    v-model="page"
    v-bind="{
      length,
      totalVisible,
    }"
    v-on="{
      input,
    }"
  >
  </v-pagination>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  page = 1;

  @Prop({
    type: Number,
    default: () => 0
  })
  readonly totalCount!: number;

  @Prop({
    type: Number,
    default: () => 5
  })
  readonly limit!: number;

  @Prop({
    type: Number,
    default: () => 10
  })
  readonly totalVisible!: number;

  get length (): number {
    return Math.ceil(this.totalCount / this.limit) - 1
  }

  get offset (): number {
    return this.page === 1 ? 0 : this.page * this.limit
  }

  input (): void {
    this.$emit('change', this.offset)
  }
}
</script>

<style scoped>
</style>
