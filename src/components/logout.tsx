import { notification } from 'antd'
import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { guestUser, loggedInUserContext } from '../context/loggedInUserContext'
import { AuthenticationService } from '../shared/services/authenticationService'

export function Logout() {
  const { loggedInUser, setLoggedInUser } = useContext(loggedInUserContext)
  const history = useHistory()

  useEffect(() => {
    (async () => {
      if (loggedInUser.role === 'Guest') {
        history.replace('/')
      } else {
        const authService = new AuthenticationService()
        await authService.logout()

        setLoggedInUser(guestUser)
        history.replace('/')
        notification.success({
          message: 'You have successfully logged out!',
        })
      }
    })()
  }, [])
  return <></>
}
