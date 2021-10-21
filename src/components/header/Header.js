import './_header.scss'

import {FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdNotifications, MdApps} from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router'

const Header = ({handleSidebarToggle}) => {

  const {auth} = useSelector(state=>state.auth)
  const photoUrl = useSelector(state=>state.auth?.user?.photoUrl) ?? '';

  if(auth) {
    photoUrl = auth?.user?.photoUrl
  }

  const [input, setInput] = useState('')

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search/${input}`)
  }


  return (
    <div className='header'>
      <FaBars className='header__menu' size={26} onClick={() => handleSidebarToggle()}/>
      <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="YouTube Logo" className="header__logo" />

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' value={input} onChange={e=>setInput(e.target.value)}/>
        <button type='submit'>
          <AiOutlineSearch size={22}/>
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src={photoUrl ? photoUrl : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} alt="avatar" />
        {/* <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' alt="avatar" /> */}
      </div>
    </div>
  )
}

export default Header
