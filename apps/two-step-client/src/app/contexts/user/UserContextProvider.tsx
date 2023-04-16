import { createContext, useReducer } from 'react'
import { IUserContextProviderProps, UserReducerAction, UserState } from './types'
import { userReducer } from './userReducer'

const initialValue: UserState = {
  isError: false,
  isLoading: true,
  user: null,
}

export const UserContext = createContext<UserState>(initialValue)
export const UserDispatchContext = createContext<React.Dispatch<UserReducerAction> | null>(null)

export const UserContextProvider = (props: IUserContextProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialValue)

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{props.children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}
