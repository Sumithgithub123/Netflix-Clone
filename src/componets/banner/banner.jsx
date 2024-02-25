import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../constants/constants'
import { imageurl } from '../../constants/constants'
import './banner.css'
import axiosinstance from '../axios'

function Banner() {
    let [movie,setMovie] = useState([])
    useEffect(()=>{
     let x = Math.random() * 20
     let count = parseInt(x)
    //  console.log(count)
     axiosinstance.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        // console.log(response.data)
        setMovie(response.data.results[count])
     }).catch((err)=>{
        console.log(err)
     })
    },[])
    return (
        <div style={{backgroundImage:`url(${movie ? imageurl+movie.backdrop_path : ''})`}} className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title? movie.title : movie.name : ''}</h1>
                <div className='bannerbuttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
