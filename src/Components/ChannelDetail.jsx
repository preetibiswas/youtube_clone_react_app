import React from 'react'
import { useState,useEffect } from 'react'
import { Box } from '@mui/material'
import { Videos,ChannelCard } from '../features'
import { useParams } from 'react-router-dom'
import { fetchFromapi } from '../utils/fetchFromapi'
import { margin } from '@mui/system'

const ChannelDetail = () => {
  const { id }=useParams()
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
  console.log(channelDetail)
  console.log(videos)
  useEffect(()=>{
    fetchFromapi(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));

    fetchFromapi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))
  }
  ,[id])
  return (
  <Box minHeight='95vh'>
  <Box >
    <div style={{
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    zIndex:10,
    height:'300px'

  }}/>
  <ChannelCard channelDetail={channelDetail} marginTop='-93px'  />
  </Box>
 <Box display='flex' p='2'>
<Box sx={{mr:{sm:'100px'}}}/>
<Videos videos={videos}/>
 </Box>
  </Box>
  )
}

export default ChannelDetail