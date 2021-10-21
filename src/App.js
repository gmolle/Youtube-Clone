import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import HomeScreen from "./pages/homeScreen/HomeScreen"
import LoginScreen from "./pages/loginScreen/LoginScreen"
import { useSelector } from "react-redux"
import { useHistory } from 'react-router'

import {Route, Switch, Redirect} from 'react-router-dom'

import './_app.scss'
import WatchScreen from "./pages/watchScreen/WatchScreen"
import SearchScreen from "./pages/searchScreen/SearchScreen"
import SubscriptionsScreen from "./pages/subscriptionsScreen/SubscriptionsScreen"
import ChannelScreen from "./pages/channelScreen/ChannelScreen"

const Layout = ({children}) => {
  const [sidebarToggle, setSidebarToggle] = useState(false)

  const handleSidebarToggle = () => setSidebarToggle(value => !value)
  return(
    <div>
      <Header handleSidebarToggle={handleSidebarToggle}/>
      <div className="app__container">
        <Sidebar sidebarToggle={sidebarToggle} handleSidebarToggle={handleSidebarToggle}/>
        <Container fluid className='app__main'>
          {children}
        </Container>
      </div>
    </div>
  )
}

const App = () => {
  const {accessToken, loading} = useSelector(state=>state.auth)

  const history = useHistory()

  useEffect(() => {
    if(!loading && !accessToken) {
      history.push('/auth')
    }
  }, [accessToken, loading, history])

  return (
    <Switch>
      <Route path='/' exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path='/auth'>
        <LoginScreen />
      </Route>

      <Route path='/search/:query'>
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>

      <Route path='/watch/:id'>
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>

      <Route path='/feed/subscriptions'>
        <Layout>
          <SubscriptionsScreen />
        </Layout>
      </Route>

      <Route path='/channel/:channelId'>
        <Layout>
          <ChannelScreen />
        </Layout>
      </Route>

      <Route>
        <Redirect to='/'/>
      </Route>
    </Switch>
  )
}

export default App
