<template>
  <v-snackbar
    v-bind:style="{
      'margin-bottom': index ? `${index * 60}px` : '0px',
    }"
    v-bind="{
      app: true,
      value: true,
      color: type,
      timeout: 10000,
    }"
  >
    <template slot="default">
      <span> {{ content }} </span>
    </template>

    <template v-slot:action="{ attrs }">
      <v-btn
        v-bind="{ attrs, icon: true }"
        v-on="{
          click: () => close({ index }),
        }"
      >
        <v-icon> mdi-close </v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component

export default class extends Vue {
  @Prop({
    type: Number,
    required: true
  })
  readonly index!: number;

  @Prop({
    type: String,
    default: () => 'error',
    validator: (type) => type === 'error' || type === 'success'
  })
  readonly type!: string;

  @Prop({
    type: String,
    required: true
  })
  readonly content!: string;
}
</script>
