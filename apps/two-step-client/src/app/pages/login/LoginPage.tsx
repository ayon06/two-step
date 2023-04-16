import { Button, Card, TextField } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCreateUser } from '../../services/users/create-user.service'
import { useUser } from '../../services/users/useUser'
import { RegistrationModal } from './registration/registration-modal'

export const LoginPage = () => {
  const { createNewUser, deleteUser, isError, isLoading, setUserIsError, setUserIsLoading, updateUser, user } =
    useUser()

  const [registrationModalIsOpen, setRegistrationModalIsOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <Card>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data)
        })}
      >
        <TextField
          id="email"
          label="Email"
          variant="standard"
          type="email"
          {...register('email', {
            required: true,
          })}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
          {...register('password', {
            required: true,
          })}
        />
        <Button variant="contained" type="submit">
          Log In
        </Button>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </form>
      <RegistrationModal open={registrationModalIsOpen} id="registration-modal"></RegistrationModal>
    </Card>
  )
}
