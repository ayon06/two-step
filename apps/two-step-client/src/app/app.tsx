import { UserContextProvider } from './contexts/user/UserContextProvider'
import { EntryPage } from './pages/EntryPage'

export function App() {
  return (
    <UserContextProvider>
      <EntryPage />
    </UserContextProvider>
  )
}

export default App
