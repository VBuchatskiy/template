import { IRootState } from './types'

const state: IRootState = {
  loading: false,
  theme: 'dark',
  query: '',
  notifications: []
}

export {
  state
}
