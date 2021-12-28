import { useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../../redux/actions/auth.action'
import './_loginScreen.scss'

const LoginScreen = () => {
  const dispatch = useDispatch()

  const accessToken = useSelector(state=>state.auth.accessToken)

  const handleLogin = () => {
    dispatch(login())
  }

  const history = useHistory()

  useEffect(() => {
    if(accessToken) {
      history.push('/')
    }
  }, [accessToken, history])

  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login With Google</button>
        <p>This Project is made using Youtube Data API</p>
        <p>This app isn't verified with Google.</p>
        <p>After logging in, click on the small advanced button, and then click to continue to the app.</p>
      </div>
    </div>
  )
}

export default LoginScreen
