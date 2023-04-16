import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { registerNewUser } from '../../../services/authentication/authentication.service'
import { useCreateUser } from '../../../services/users/create-user.service'
import { CreateUserInput } from '../../../utils/types/generated-queries/graphql'

export const useRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const { createNewUser, data: userData, error, loading } = useCreateUser()

  const {
    register: registerRegistrationForm,
    handleSubmit: handleSubmitRegistrationForm,
    setValue: setRegistrationValues,
  } = useForm()
  const {
    register: registerCreateUserForm,
    handleSubmit: handleSubmitCreateUserForm,
    setValue: setCreateUserValues,
  } = useForm()

  const [defaultNewUserForm, setDefaultNewUserForm] = useState<Partial<CreateUserInput>>({})

  const onSubmiRegistrationForm = useCallback(async (email: string, password: string) => {
    const { uid, email: registeredEmail, displayName, phoneNumber } = await registerNewUser(email, password)
    setDefaultNewUserForm({
      _id: uid,
      displayName: displayName ?? undefined,
      phoneNumber: phoneNumber ?? undefined,
      email: registeredEmail ?? undefined,
    })
  }, [])

  useEffect(() => {
    if (userData) {
      console.log('user retrieved')
    }
  }, [userData])

  return {
    currentStep,
    setCurrentStep,
    createNewUser,
    registerCreateUserForm,
    registerRegistrationForm,
    setCreateUserValues,
    setRegistrationValues,
    onSubmiRegistrationForm,
    handleSubmitRegistrationForm,
    handleSubmitCreateUserForm,
    defaultNewUserForm,
  }
}
