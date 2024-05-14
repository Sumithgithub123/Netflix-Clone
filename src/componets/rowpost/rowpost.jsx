import React, { useEffect, useState } from 'react'
import './rowpost.css'
import axiosinstance from '../axios'
import {API_KEY, imageurl} from '../../constants/constants'
import YouTube from 'react-youtube'
import Error from '../Error'

function Rowpost(props) {
  const [movies,setMovies] = useState([])
  const [urlid,seturlid] = useState()
  const [err,seterr] = useState(false)
  useEffect(()=>{
  axiosinstance.get(props.url).then((response)=>{
     //console.log(response.data)
     setMovies(response.data.results)
  })
  },[props.url])
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
            seterr(false)
            seturlid(response.data.results[0])
       }else{
        seturlid(false)
       }
     }).catch((err)=>{
      seterr(true)
      console.error(err);
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
     { urlid && err===false &&  <YouTube opts={opts} videoId={urlid.key}/> }
     { urlid===false || err === true ? <Error />:''}
    </div>
  )
}

export default Rowpost
