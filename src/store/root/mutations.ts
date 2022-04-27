import { MutationTree } from 'vuex'
import { IRootState, INotification, ERootMutations, TTheme } from './types'

const mutations: MutationTree<IRootState> = {
  [ERootMutations.SetLoading] (state) {
    state.loading = !state.loading
  },

  [ERootMutations.SetNotification] ({ notifications }, { notification }: { notification: INotification }) {
    notifications.push(notification)
  },

  [ERootMutations.RemoveNotification] ({ notifications }, { index }: { index: number }) {
    notifications.splice(index, 1)
  },

  [ERootMutations.SetColorTheme] (state, { theme }: { theme: TTheme }) {
    state.theme = theme
  }
}

export {
  mutations
}
