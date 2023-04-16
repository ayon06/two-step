import { useContext } from 'react'
import { UserContext, UserDispatchContext } from './UserContextProvider'

export const useUserContext = () => {
  const state = useContext(UserContext)
  const dispatch = useContext(UserDispatchContext)
  if (dispatch === null) throw new Error('Could not initiate user dispatch context')

  return {
    state,
    dispatch,
  }
}
