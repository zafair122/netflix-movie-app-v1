import React from 'react'
import './watch.scss'
import { ArrowBackOutlined } from '@mui/icons-material'
import video from '../../assets/video.mp4'

const Watch = () => {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video src={video} autoPlay progress controls></video>
    </div>
  )
}

export default Watch