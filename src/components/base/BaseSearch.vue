<template>
  <v-text-field
    v-model="query"
    v-bind="{
      type,
      hideDetails,
      prependInnerIcon,
      outlined: true
    }"
    v-on="{
      input,
    }"
  >
    <template slot="label">
      <span class="text-capitalize"> {{ label }} </span>
    </template>
  </v-text-field>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  readonly query = '';

  @Prop({
    type: String,
    default: (): string => 'search',
    validator: (value): boolean => value === 'search'
  })
  readonly type!: string;

  @Prop({
    type: Boolean,
    default: () => true,
    validator: (value): boolean => value === true
  })
  readonly hideDetails!: boolean;

  @Prop({
    type: String,
    default: () => 'mdi-magnify',
    validator: (value): boolean => value === 'mdi-magnify'
  })
  readonly prependInnerIcon!: string;

  @Prop({
    type: String,
    default: () => 'search',
    validator: (value): boolean => value === 'search'
  })
  readonly label!: string;

  public input (query: string): void {
    // TODO debounce
    this.$emit('search', query)
  }
}
</script>
