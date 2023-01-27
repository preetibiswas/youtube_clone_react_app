import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar,Feed,ChannelDetail,SearchTerm,VideoDetail } from './features/index'

const App = () => 
   (
   <Router>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
     <Routes>
      <Route exact path='/' element={<Feed/>} />
      <Route exact path='/video/:id' element={<VideoDetail/>} />
      <Route exact path='/channel/:id' element={<ChannelDetail/>} />
      <Route exact path='/search/:searchTerm' element={<
        SearchTerm/>} />
     </Routes>
    </Box>
   </Router>
  )


export default App