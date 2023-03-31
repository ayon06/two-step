import { useEffect } from 'react'
import { useGetUsers } from '../../services/authentication/authentication.service'

export const LoginPage = () => {
  const { data, loading, refetch } = useGetUsers()

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <button
      onClick={() => {
        console.log('refetching')
        refetch()
      }}
    >
      Hello
    </button>
  )
}
