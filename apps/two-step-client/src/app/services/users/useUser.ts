import { useCallback } from 'react'
import { EUserReducerActionType } from '../../contexts/user/types'
import { useUserContext } from '../../contexts/user/useUserContext'
import { User } from '../../utils/types/generated-queries/graphql'

export const useUser = () => {
  const {
    dispatch,
    state: { isError, isLoading, user },
  } = useUserContext()

  const createNewUser = useCallback(
    (userInfo: User) => {
      dispatch({
        type: EUserReducerActionType.createUser,
        user: userInfo,
      })
    },
    [dispatch],
  )

  const updateUser = useCallback(
    (userInfo: Partial<User>) => {
      dispatch({
        type: EUserReducerActionType.updateUser,
        user: userInfo,
      })
    },
    [dispatch],
  )

  const setUserIsLoading = useCallback(
    (isLoading: boolean) => {
      dispatch({
        type: EUserReducerActionType.setIsLoading,
        isLoading,
      })
    },
    [dispatch],
  )

  const setUserIsError = useCallback(
    (isError: boolean) => {
      dispatch({
        type: EUserReducerActionType.setIsLoading,
        isError,
      })
    },
    [dispatch],
  )

  const deleteUser = useCallback(() => {
    dispatch({
      type: EUserReducerActionType.deleteUser,
    })
  }, [dispatch])

  return {
    user,
    isLoading,
    isError,
    createNewUser,
    updateUser,
    setUserIsLoading,
    setUserIsError,
    deleteUser,
  }
}
