import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Breadcrumb, Button, Layout, Menu } from 'antd'
import { Header, Content, Footer } from 'antd/lib/layout/layout'
import { NavBar } from './shared/components/navbar'
import { RouterSwitches } from './shared/router-switches/router-switches'
import { User } from './shared/types/user'
import {
  defaultInitialLoggedInUserContext,
  guestUser,
  loggedInUserContext,
} from './context/loggedInUserContext'

function App() {
  const [loggedInUser, setLoggedInUser] = useState<User>(guestUser)

  const value = {
    ...defaultInitialLoggedInUserContext,
    loggedInUser: loggedInUser,
    setLoggedInUser: setLoggedInUser,
  }

  return (
    <loggedInUserContext.Provider value={value}>
      <Router>
        <Layout className="App">
          <Header className="header">
            <NavBar />
          </Header>

          <Content className="site-content">
            <div className="site-content-background">
              <RouterSwitches />
            </div>
          </Content>

          <Footer className="site-footer" style={{ textAlign: 'center' }}>
            Created by Tran Duc Anh, 2021
          </Footer>
        </Layout>
      </Router>
    </loggedInUserContext.Provider>
  )
}

export default App
