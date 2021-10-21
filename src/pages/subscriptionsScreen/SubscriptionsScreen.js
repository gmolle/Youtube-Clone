import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useSelector, useDispatch } from 'react-redux'
import HelmetCustom from '../../components/HelmetCustom'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import { getSubscribedChannels } from '../../redux/actions/videos.action'
import './_subscriptionScreen.scss'

const SubscriptionsScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSubscribedChannels())
  },[dispatch])

  const {channels, loading} = useSelector(state=>state.subscribedChannels)

  return (
    <Container fluid>
      <HelmetCustom title='Subscriptions - YouTube'/>

      {
        !loading ? channels?.map(channel=> <VideoHorizontal video={channel} key={channel.id} subScreen/>)
        : <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
          <Skeleton width='100%' height='160px' count={20}/>
         </SkeletonTheme>
      } 
    </Container>
  )
}

export default SubscriptionsScreen
