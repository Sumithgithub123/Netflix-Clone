import React, { useEffect, useState } from 'react'
import './rowpost.css'
import axiosinstance from '../axios'
import {API_KEY, imageurl} from '../../constants/constants'
import YouTube from 'react-youtube'

function Rowpost(props) {
  const [movies,setMovies] = useState([])
  const [urlid,seturlid] = useState([])
  useEffect(()=>{
  axiosinstance.get(props.url).then((response)=>{
     //console.log(response.data)
     setMovies(response.data.results)
  })
  },[])
  const opts={
   height:'390',
   width:'100%',
   playerVars:{
    autoplay:1,
   }
  }
  const handlemovie = (id)=>{
     axiosinstance.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
       if(response.data.results.length!==0){
            seturlid(response.data.results[0])
       }else{
        console.log('not')
       }
     })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
      {
        movies.map((movie,index)=>{
            return(
             <img key={index} onClick={()=>handlemovie(movie.id)} className={props.issmall? 'smallposter' : 'poster'} src={`${imageurl+movie.backdrop_path}`} alt="" />
            )
        })
      }
      </div>
     { urlid &&  <YouTube opts={opts} videoId={urlid.key}/> }
    </div>
  )
}

export default Rowpost
