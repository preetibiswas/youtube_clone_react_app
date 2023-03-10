import React from 'react'
import { useState,useEffect } from 'react';
import { Box,Stack,Typography } from '@mui/material';
import { Videos,Sidebar } from '../features/index';
import { fetchFromapi } from '../utils/fetchFromapi';


const Feed = () => {
  const [selectedCategory,setSelectedCategory]=useState('New')
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    
    fetchFromapi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory])
  return (
   <Stack sx={{ flexDirection:{xs:'column',md:'row'} }}>
    <Box
    sx={{height:{xs:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d', px:{sx:0,md:2}}}
    >
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

      <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#fff'}} >
        Copy right 2023 PB media
      </Typography>

    </Box>
    <Box
    p={2}
    sx={{ overflowY:'auto',height:'90vh',flex:2 }}
    
    >
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color:'white' }}>
       {selectedCategory} <span style={{ color:'#F31503' }}>Videos</span>
      </Typography>
         <Videos videos={videos}/>
         
    </Box>
   </Stack>
  )
}

export default Feed