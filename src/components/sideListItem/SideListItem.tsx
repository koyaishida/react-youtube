import React from 'react'
import { Link } from "react-router-dom"
import Styles from "./SideListItem.module.scss"


type SideListItemProps = {
  id: string
  src: string
  title: string
}

const SideListItem:React.FC<SideListItemProps> = ({id,src,title}) => {
  return (
    <Link className={Styles.item}to={{pathname: "watch", search: `?v=${id}`}}>
      <img src={src} alt={title}/>
      <div className={Styles.info}>
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default SideListItem
