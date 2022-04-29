import { MutationTree } from 'vuex'
import { IRootState, INotification, ERootMutations, TTheme } from './types'

const mutations: MutationTree<IRootState> = {
  [ERootMutations.SetLoadingState] (state) {
    state.loading = !state.loading
  },

  [ERootMutations.SetNotification] ({ notifications }, { notification }: { notification: INotification }) {
    notifications.push(notification)
  },

  [ERootMutations.SetColorTheme] (state, { theme }: { theme: TTheme }) {
    state.theme = theme
  },

  [ERootMutations.SetSearchQuery] (state, { query }: { query: string }) {
    state.query = query
  },

  [ERootMutations.RemoveNotification] ({ notifications }, { index }: { index: number }) {
    notifications.splice(index, 1)
  }
}

export {
  mutations
}
