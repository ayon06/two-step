import { useMutation } from '@apollo/client'
import { string } from 'joi'
import { useCallback } from 'react'
import { graphql } from '../../utils/types/generated-queries'
import { CreateUserInput } from '../../utils/types/generated-queries/graphql'

const createUserMutation = graphql(`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      firstName
      middleName
      lastName
      phoneNumber
      email
      birthDate
    }
  }
`)

export const useCreateUser = () => {
  const [createUser, { data, error, loading }] = useMutation(createUserMutation)

  const createNewUser = useCallback(
    async (input: CreateUserInput) => {
      createUser({
        variables: {
          createUserInput: input,
        },
      })
    },
    [createUser],
  )
  return {
    createNewUser,
    data,
    error,
    loading,
  }
}
