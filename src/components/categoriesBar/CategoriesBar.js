import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import './_categoriesBar.scss'

const keywords = [
  'All',
  'React js',
  'Redux',
  'Valorant',
  'History',
  'World of Warcraft',
  'Coding',
  'API',
  'React Native',
  'Computer Science',
  'Algorithms',
  'Music',
  'JavaScript',
  'CSS',
]

const CategoriesBar = () => {
  const [active, setActive] = useState('All')

  const dispatch = useDispatch()

  const handleClick = (word) => {
    setActive(word)
    if(word === 'All') {
      dispatch(getPopularVideos())
    } else {
      dispatch(getVideosByCategory(word))
    }
  }

  return (
    <div className="categoriesBar">
      {keywords.map((word, idx) => 
      <span key={idx} 
      onClick={() => handleClick(word)}
      className={active === word ? 'active' : ''}
      >
        {word}
      </span>)}
    </div>
  )
}

export default CategoriesBar
