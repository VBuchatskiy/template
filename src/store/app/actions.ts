import { ActionTree } from 'vuex'
import { IRootState, INotification, ERootActions, ERootMutations, TTheme } from './types'

const actions: ActionTree<IRootState, IRootState> = {
  [ERootActions.SetNotification] ({ state, commit }, { notification }: { notification: INotification }) {
    const { notifications } = state
    // TODO add app config for limit notification
    if (notifications.length >= 10) {
      commit(ERootMutations.RemoveNotification, { index: 0 })
      commit(ERootMutations.SetNotification, { notification })

      return
    }

    commit(ERootMutations.SetNotification, { notification })
  },

  [ERootActions.RemoveNotification] ({ commit }, { index }: { index: number }) {
    commit(ERootMutations.RemoveNotification, { index })
  },

  [ERootActions.SetLoadingState] ({ commit }) {
    // only for app loader
    commit(ERootMutations.SetLoadingState)
  },

  [ERootActions.SetColorTheme] ({ commit }, { theme }: { theme: TTheme }) {
    commit(ERootMutations.SetColorTheme, { theme })
  },

  [ERootActions.SetSearchQuery] ({ commit }, { query }: { query: string }) {
    commit(ERootMutations.SetSearchQuery, { query })
  }
}

export {
  actions
}
