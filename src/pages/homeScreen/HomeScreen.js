import { useEffect } from "react"
import { Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import CategoriesBar from "../../components/categoriesBar/CategoriesBar"
import Video from "../../components/video/Video"
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action"

import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from "../../components/skeletons/SkeletonVideo"
import HelmetCustom from "../../components/HelmetCustom"

const HomeScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  const {videos, activeCategory, loading} = useSelector(state=>state.homeVideos)

  const fetchData = () => {
    if(videos.length >= 100) return
    if(activeCategory === 'All') {
      dispatch(getPopularVideos())
    } else {
      dispatch(getVideosByCategory(activeCategory))
    }
  }

  return (
    <>
    <HelmetCustom title='YouTube'/>
    <CategoriesBar />
    
    
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className='spinner-border text-danger d-block mx-auto'></div>
          }
          style={{overflowY: 'hidden'}}
          className='row'
        >
          {!loading ? videos.map((video, idx) => 
            <Col lg={3} md={4} key={idx}>
              <Video video={video} />
            </Col>) : 
            [...Array(20)].map((_,id) =><Col lg={3} md={4} key={id}> <SkeletonVideo /></Col>)
            }
        </InfiniteScroll>
      
    
    </>
  )
}

export default HomeScreen
