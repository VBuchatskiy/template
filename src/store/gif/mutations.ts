import { MutationTree } from 'vuex'
import { IGifState, EGifMutations } from './types'

const mutations: MutationTree<IGifState> = {
  [EGifMutations.SetGifCollection] (state, { collection, pagination }: IGifState) {
    state.collection = collection
    state.pagination = pagination
  }
}

export {
  mutations
}
