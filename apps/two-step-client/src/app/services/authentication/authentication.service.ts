import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const registerNewUser = async (email: string, password: string) => {
  const auth = getAuth()
  const result = await createUserWithEmailAndPassword(auth, email, password)
  return result.user
}

export const signInWithUsernamePassword = async (email: string, password: string) => {
  const auth = getAuth()
  const result = await signInWithEmailAndPassword(auth, email, password)
  return result.user
}
