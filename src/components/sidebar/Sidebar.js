import './_sidebar.scss'

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied
} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth.action'
import { Link } from 'react-router-dom'

const Sidebar = ({sidebarToggle, handleSidebarToggle}) => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className={sidebarToggle ? 'sidebar open' : 'sidebar'} onClick={() => handleSidebarToggle()}>
      <li>
        <MdHome size={23}/>
        <span>Home</span>
      </li>
      <Link to='/feed/subscriptions'>
        <li>
          <MdSubscriptions size={23}/>
          <span>Subscriptions</span>
        </li>
      </Link>
      <li>
        <MdThumbUp size={23}/>
        <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23}/>
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23}/>
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23}/>
        <span>I Don't Know</span>
      </li>

      <hr />

      <li onClick={handleLogout}>
        <MdExitToApp size={23}/>
        <span>Log Out</span>
      </li>

      <hr />
    </nav>
  )
}

export default Sidebar
