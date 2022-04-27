<template>
  <v-app>
    <v-app-bar
      v-bind="{
        [theme]: true,
        app: true,
        flat: true,
      }"
    >
      <v-row
        v-bind="{
          noGutters: true,
        }"
      >
        <v-col>
          <v-btn class="mr-2">
            <span> Home </span>
          </v-btn>
          <v-btn class="mr-2">
            <span> About </span>
          </v-btn>
          <v-btn>
            <span> Gallery </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-progress-linear v-bind="{ indeterminate: true }"> </v-progress-linear>
      <v-container v-bind="{ fluid: true }">
        <router-view />
      </v-container>
    </v-main>

    <v-footer v-bind="{ app: true }"> </v-footer>
    <template v-if="notifications.length">
      <template v-for="({ type, content }, index) of notifications">
        <v-snackbar
          v-bind:style="{
            marginBottom: index ? `${index * 60}px` : '0px',
          }"
          v-bind:key="index"
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
                click: () => onClose({ index }),
              }"
            >
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </template>
    </template>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Action, State } from 'vuex-class'
import {
  INotification,
  ERootActions,
  TTheme
} from './store/root/types'

@Component
export default class App extends Vue {
  @State notifications!: Array<INotification>
  @State theme!: TTheme
  @Action [ERootActions.RemoveNotification]!: ({ index }: { index: number }) => void

  onClose ({ index }: { index: number }): void {
    this[ERootActions.RemoveNotification]({ index })
  }

  onInput () {
    return ''
  }
}
</script>
