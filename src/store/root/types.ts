type TNotification = 'error' | 'success'
type TTheme = 'light' | 'dark'
interface INotification {
  content: string
  type: TNotification
}
interface IRootState {
  loading: boolean
  theme: TTheme,
  notifications: Array<INotification>
}

enum ETheme {
  dark = 'dark',
  light = 'light'
}

enum ERootActions {
  SetNotification = 'SetNotification',
  SetLoading = 'SetLoading',
  SetColorTheme = 'SetColorTheme',
  RemoveNotification = 'RemoveNotification'
}

enum ERootMutations {
  SetNotification = 'SetNotification',
  SetLoading = 'SetLoading',
  SetColorTheme = 'SetColorTheme',
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
