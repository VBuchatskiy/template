interface IPagination {
  count: number
  offset: number
  'total_count': number
}

interface IGif {
  id: string
}

interface IGifState {
  collection: Array<IGif>
  pagination: IPagination | never
}

enum EGifActions {
  GetGifCollection = 'GetGifCollection',
}

enum EGifMutations {
  SetGifCollection = 'SetGifCollection',
}

export {
  IGifState,
  IGif,
  IPagination,
  EGifActions,
  EGifMutations
}
