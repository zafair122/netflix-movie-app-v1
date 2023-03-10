import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import './listItem.scss'
import video from '../../assets/video.mp4'
// import movie1 from '../../assets/banner/b1.jpg'

const ListItem = ({ movie, index }) => {
    const trailer = {video}
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className='listItem'
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={movie} alt="Movie Banner" />
            {isHovered && (
                <>
                    <video src={video} autoPlay={true} loop controls />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className='icon' />
                            <Add className='icon' />
                            <ThumbUpAltOutlined className='icon' />
                            <ThumbDownAltOutlined className='icon' />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 15 mins</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, perferendis.
                        </div>
                        <div className="genre">Action</div>
                    </div>

                </>
            )}


        </div>

    )
}

export default ListItem