import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { getVideosBySearch } from "../../redux/actions/videos.action"
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import HelmetCustom from "../../components/HelmetCustom"


const SearchScreen = () => {
  const {query} = useParams()
  const dispatch = useDispatch()

  const { videos, loading } = useSelector(state => state?.searchedVideos)

  useEffect(() => {
    dispatch(getVideosBySearch(query))
  },[query, dispatch])

  return (
    <Container className='searchScreen__container'>
      <HelmetCustom title={`${query} - YouTube`}/>

      {!loading ? (
            videos?.map(video => (
               <VideoHorizontal
                  video={video}
                  key={video.etag}
                  searchScreen
               />
            ))
         ) : <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
          <Skeleton width='100%' height='160px' count={20}/>
         </SkeletonTheme>
      }
    </Container>
  )
}

export default SearchScreen
