import { IGifState } from './types'

const state: IGifState = {
  collection: [],
  pagination: {
    offset: 0,
    count: 10,
    total_count: 0
  }
}

export {
  state
}
