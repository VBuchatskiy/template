<template>
  <v-row
    v-bind="{
      noGutters: true,
    }"
  >
    <v-col cols="12" class="mb-4">
      <h2 class="text-capitalize">
        gif collection
      </h2>
    </v-col>

    <v-col cols="12" class="mb-4">
      <base-search
        v-on="{
          search,
        }"
      />
    </v-col>

    <v-col cols="12" class="mb-4">
      <v-row>
        <template v-if="gif.collection.length">
          <template v-for="({ images }, index) in gif.collection">
            <v-col class="d-flex" v-bind:key="index" sm="12" md="6" lg="4">
              <v-img
                v-bind="{
                  src: images.fixed_height.url,
                }"
              >
              </v-img>
            </v-col>
          </template>
        </template>
      </v-row>
    </v-col>

    <v-col cols="12">
      <base-pagination
        v-bind="{
          limit,
          totalCount: gif.pagination.total_count,
        }"
        v-on="{
          change: change,
        }"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import { EGifActions, IGifState } from '@/store/gif/types'

@Component({
  components: {
    BaseSearch: () => import('@/components/base/BaseSearch.vue'),
    BasePagination: () => import('@/components/base/BasePagination.vue')
  }
})
export default class App extends Vue {
  offset = 0;
  limit = 6;
  query = '';

  @State
  readonly gif!: IGifState;

  @Action('gif/GetGifCollection')
  public [EGifActions.GetGifCollection]!: ({
    params
  }: {
    params: { offset: number; limit: number; q?: string };
  }) => void;

  // methods

  // action wrapper
  public loadGifCollection (): void {
    this[EGifActions.GetGifCollection]({
      params: {
        offset: this.offset,
        limit: this.limit,
        q: this.query
      }
    })
  }

  public change (offset: number) {
    this.offset = offset
    this.loadGifCollection()
  }

  public search (query: string) {
    this.query = query
    this.loadGifCollection()
  }

  // hooks

  public created () {
    this.loadGifCollection()
  }
}
</script>
