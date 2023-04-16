import { Link, Route, Routes } from 'react-router-dom'
import { useUser } from '../services/users/useUser'
import { LoginPage } from './login/LoginPage'
import { NavBar } from './nav-bar/NavBar'

export const EntryPage = () => {
  const { user } = useUser()

  return (
    <>
      {!user && <LoginPage />}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route. <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      <NavBar />
    </>
  )
}
