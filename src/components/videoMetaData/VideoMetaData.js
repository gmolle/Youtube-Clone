import { useEffect } from 'react'
import moment from 'moment'
import numeral from 'numeral'
import './_videoMetaData.scss'

import {MdThumbUp, MdThumbDown}from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'
import { useDispatch, useSelector } from 'react-redux'
import { checkSubscriptionStatus, getChannelDetails } from '../../redux/actions/channel.action'
import HelmetCustom from '../HelmetCustom'
import { useHistory } from 'react-router'


const VideoMetaData = ({video:{snippet,statistics}, videoId}) => {

  const {channelId, channelTitle, description, title, publishedAt} = snippet
  const {viewCount, likeCount, dislikeCount} = statistics

  const dispatch = useDispatch()

  const {
    snippet: channelSnippet, 
    statistics: channelStatistics 
  } = useSelector(state=>state.channelDetails.channel)

  const subscriptionStatus = useSelector(state => state.channelDetails.subscriptionStatus)

  useEffect(() => {
    dispatch(getChannelDetails(channelId))
    dispatch(checkSubscriptionStatus(channelId)) 
  },[dispatch, channelId])

  const history = useHistory()

  const handleClick = () => {
    history.push(`/channel/${channelId}`)
  }

  return (
    <div className="videoMetaData py-2">
      <HelmetCustom title={title} description={description}/>
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} Views • {moment(publishedAt).fromNow()}</span>
          <div>
            <span className='mr-3'>
              <MdThumbUp size={26}/>{numeral(likeCount).format("0.a")}
            </span>
            <span className='mr-3'>
              <MdThumbDown size={26}/>{numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex" onClick={handleClick} style={{cursor: 'pointer'}}>
          <img src={channelSnippet?.thumbnails?.default?.url} alt="" className='rounded-circle mr-3'/>
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>{numeral(channelStatistics?.subscriberCount).format("0.a")} Subscribers</span>
          </div>
        </div>
        <button  className={`p-2 m-2 border-0 btn ${subscriptionStatus && 'btn-gray'}`}>{subscriptionStatus ? 'Subscribed' : 'Subscribe'}</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText 
          lines={3}
          more='SHOW MORE'
          less='SHOW LESS'
          anchorClass='showMoreText'
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  )
}

export default VideoMetaData
