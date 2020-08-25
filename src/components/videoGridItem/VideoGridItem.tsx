import React from 'react'
import Styles from "./videoGridItem.module.scss"
import {Link } from "react-router-dom"

type VideoGridItemProps = {
  id: string,
  src:string,
  title:string
}


const VideoGridItem:React.FC<VideoGridItemProps> = ({id,src,title}) => {
  return (
    <Link to={{pathname: "watch",search: `?v=${id}`}} className={Styles.item}>
      <div >
        <img src={src} alt={title}/>
        <span>{title}</span>
      </div>
    </Link>
    
  )
}

export default VideoGridItem
