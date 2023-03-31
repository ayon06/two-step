import { useQuery } from '@apollo/client'
import { graphql } from '../../shared/types/generated-queries'

const getUsersQuery = graphql(`
  query getAllUsers {
    users {
      firstName
      _id
    }
  }
`)

export const useGetUsers = () => {
  const { refetch, data, loading, error } = useQuery(getUsersQuery)

  return {
    refetch,
    data,
    loading,
    error,
  }
}
