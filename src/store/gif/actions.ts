import { ActionTree } from 'vuex'
import { IRootState, ERootActions } from '../app/types'
import { IGifState, EGifActions, EGifMutations } from './types'

import { search, trending } from '../../service'

const actions: ActionTree<IGifState, IRootState> = {
  // TODO types
  async [EGifActions.GetGifCollection] ({ commit, dispatch }, { params }) {
    const { q } = params
    dispatch(ERootActions.SetLoadingState, null, { root: true })
    try {
      if (q) {
        const { data } = await search.get({ params })

        commit(EGifMutations.SetGifCollection, { collection: data.data, pagination: data.pagination })
        return
      }
      const { data } = await trending.get({ params })

      commit(EGifMutations.SetGifCollection, { collection: data.data, pagination: data.pagination })
    } catch (error) {
    } finally {
      dispatch(ERootActions.SetLoadingState, null, { root: true })
    }
  }
}

export {
  actions
}
