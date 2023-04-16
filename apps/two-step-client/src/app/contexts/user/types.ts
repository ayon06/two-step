import { ReactNode } from 'react'
import { User } from '../../utils/types/generated-queries/graphql'

export type UserState = {
  user: Partial<User> | null
  isLoading: boolean
  isError: boolean
}

export enum EUserReducerActionType {
  createUser,
  deleteUser,
  updateUser,
  setIsLoading,
  setIsError,
}

export type UserReducerAction = {
  type: EUserReducerActionType
  user?: Partial<User> | null
  isLoading?: boolean
  isError?: boolean
}

export interface IUserContextProviderProps {
  children?: ReactNode
}
