import { IRootState } from './types'

const state: IRootState = {
  loading: false,
  theme: 'dark',
  notifications: [{ content: 'error1', type: 'success' }]
}

export {
  state
}
