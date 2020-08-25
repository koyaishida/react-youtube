import React from 'react'
import Youtube from "react-youtube"
import Styles from "./videoPlay.module.scss"

type VideoPlayProps = {
  id: string
}

const VideoPlay:React.FC<VideoPlayProps> = ({id}) => {
  
  return (
    <div className={Styles.wrap}>
      <Youtube className={Styles.video} videoId={id}/> 
    </div>
  )
}

export default VideoPlay
