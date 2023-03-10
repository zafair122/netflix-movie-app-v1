import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'
import './featured.scss'
import banner from '../../assets/banner/b4.jpg'
import movie1 from '../../assets/movies/movie1.png'

const Featured = ({ type }) => {
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure" > dventure </option>
                        <option option value="comedy"> Comedy </option>
                        <option option value="crime"> Crime </option>
                        <option option value="fantasy"> Fantasy </option>
                        <option value="historical"> Historical </option>
                        <option option value="horror"> Horror </option>
                        <option option value="romance"> Romance </option>
                        <option option value="sci - fi"> Sci-fi </option>
                        <option value="thriller"> Thriller </option>
                        <option option value="western"> Western </option>
                        <option value="drama"> Drama </option>
                        <option value="animation"> Animation </option>
                        <option value="documentary"> Documentary </option>
                    </select>
                </div>
            )}
            <img src={banner} alt="" />
            <div className="info">
                <img src={movie1} alt="Title Image" />
                <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus, laborum reiciendis expedita delectus mollitia perspiciatis nisi! Ipsa repudiandae adipisci similique molestiae quam laborum, accusamus unde iusto rem commodi cum!</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured