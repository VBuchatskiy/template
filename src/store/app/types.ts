type TNotification = 'error' | 'success'
type TTheme = 'light' | 'dark'

interface INotification {
  content: string
  type: TNotification
}
interface IRootState {
  loading: boolean,
  query: string,
  theme: TTheme,
  notifications: Array<INotification>
}

enum ETheme {
  dark = 'dark',
  light = 'light'
}

enum ERootActions {
  SetNotification = 'SetNotification',
  SetLoadingState = 'SetLoadingState',
  SetColorTheme = 'SetColorTheme',
  SetSearchQuery = 'SetSearchQuery',
  RemoveNotification = 'RemoveNotification'
}

enum ERootMutations {
  SetNotification = 'SetNotification',
  SetLoadingState = 'SetLoadingState',
  SetColorTheme = 'SetColorTheme',
  SetSearchQuery = 'SetSearchQuery',
  RemoveNotification = 'RemoveNotification'
}

export {
  TTheme,
  ERootActions,
  ERootMutations,
  ETheme,
  IRootState,
  INotification
}
