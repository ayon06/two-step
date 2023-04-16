import { UserReducerAction, EUserReducerActionType, UserState } from './types'

export const userReducer = (
  state: UserState,
  { type, user: newUserState, isLoading, isError }: UserReducerAction,
): UserState => {
  switch (type) {
    case EUserReducerActionType.createUser:
      return {
        ...state,
        user: { ...(newUserState ? newUserState : {}) },
      }
    case EUserReducerActionType.deleteUser:
      return {
        ...state,
        user: null,
      }
    case EUserReducerActionType.updateUser:
      return {
        ...state,
        user: {
          ...(state.user ? state.user : {}),
          ...(newUserState ? newUserState : {}),
        },
      }
    case EUserReducerActionType.setIsLoading:
      return {
        ...state,
        isLoading: isLoading ?? false,
      }
    case EUserReducerActionType.setIsError:
      return {
        ...state,
        isError: isError ?? false,
      }
  }
}
