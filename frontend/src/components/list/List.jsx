import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import ListItem from '../listItem/ListItem'
import './list.scss'
import movie1 from '../../assets/banner/b1.jpg'
import movie2 from '../../assets/banner/b2.jpg'
import movie3 from '../../assets/banner/b3.png'

const List = () => {
    const listRef = useRef()
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    const handleClick = (direction) => {

        const distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            if (slideNumber === 1) {
                setIsMoved(false)
            }
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }

        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            setIsMoved(true)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }

    }
    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }} />
                <div className="container" ref={listRef}>
                    <ListItem movie={movie1} index={0} />
                    <ListItem movie={movie2} index={1} />
                    <ListItem movie={movie3} index={2} />
                    <ListItem movie={movie1} index={3} />
                    <ListItem movie={movie2} index={4} />
                    <ListItem movie={movie3} index={5} />
                    <ListItem movie={movie1} index={6} />
                    <ListItem movie={movie2} index={7} />
                    <ListItem movie={movie3} index={8} />
                    <ListItem movie={movie1} index={9} />
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List