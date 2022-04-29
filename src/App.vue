<template>
  <v-app>
    <v-sheet
      v-bind="{
        [theme]: true,
      }"
    >
      <app-bar />

      <v-main>
        <app-progress-linear v-bind="{ indeterminate: loading }" />
        <v-container v-bind="{ fluid: true }">
          <router-view />
        </v-container>
      </v-main>
      <app-footer />

      <template v-if="notifications.length">
        <template v-for="({ type, content }, index) of notifications">
          <app-notification
            v-bind:key="index"
            v-bind="{ type, content, index }"
          />
        </template>
      </template>
    </v-sheet>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import { INotification, ERootActions, TTheme } from '@/store/app/types'

@Component({
  components: {
    AppBar: () => import('@/components/app/AppBar.vue'),
    AppFooter: () => import('@/components/app/AppFooter.vue'),
    AppNotification: () => import('@/components/app/AppNotification.vue'),
    AppProgressLinear: () => import('@/components/app/AppProgressLinear.vue')
  }
})
export default class App extends Vue {
  @State
  public notifications!: Array<INotification>;

  @State
  public theme!: TTheme;

  @State
  public loading!: boolean;

  @Action
  public [ERootActions.RemoveNotification]!: ({
    index
  }: {
    index: number;
  }) => void;

  public close ({ index }: { index: number }): void {
    this[ERootActions.RemoveNotification]({ index })
  }
}
</script>
