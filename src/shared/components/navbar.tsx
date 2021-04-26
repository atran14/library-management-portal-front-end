import { Button, Layout, Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ProfileOutlined,
  BookOutlined,
  PlusCircleTwoTone,
  MinusCircleTwoTone,
  EditTwoTone,
  HomeTwoTone,
} from '@ant-design/icons'
import { loggedInUserContext } from '../../context/loggedInUserContext'
import { useContext } from 'react'

export function NavBar() {
  const { loggedInUser } = useContext(loggedInUserContext)
  const [guestMode, setGuestMode] = useState(true)

  useEffect(() => {
    setGuestMode(loggedInUser.role === 'Guest')
  }, [loggedInUser])

  return (
    <>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home" icon={<HomeTwoTone style={{fontSize: "1.75rem"}} />}>
          <Link to="/" />
        </Menu.Item>

        <Menu.Item key="books" icon={<BookOutlined />}>
          <Link to="/books">Books</Link>
        </Menu.Item>

        <Menu.Item key="categories" icon={<BookOutlined />}>
          <Link to="/categories">Categories</Link>
        </Menu.Item>

        <Menu.Item key="borrow-request" icon={<BookOutlined />}>
          <Link to="/borrow-request">Borrow Requests</Link>
        </Menu.Item>
      </Menu>

      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        {guestMode && (
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        )}
        {!guestMode && (
          <>
            <div
              style={{ color: 'white' }}
            >{`Welcome, ${loggedInUser.firstName} ${loggedInUser.lastName}!`}</div>
            <Button danger>
              <Link to="/logout">Logout</Link>
            </Button>
          </>
        )}
      </div>
    </>
  )
}
