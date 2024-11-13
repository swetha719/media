import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideo } from '../services/allAPI'





function View({addVideoResponse}) {
  const [allVideo,setAllVideo]=useState([])
  const [deleteVideoResponse,setDeleteVideoResponse]=useState("")

  useEffect(()=>{
    getVideo()


  },[addVideoResponse,deleteVideoResponse])
  console.log(allVideo);
  // createing seperate function for api call
  
  const getVideo=async()=>{
    try{
      const result=await getAllVideo()
       console.log(result.data);
       setAllVideo(result.data)
    
    }
    catch(err){
      console.log(err);
      

    }
    
  }




  return (
    <>
    {
      allVideo.length> 0 ?
      <Row className='border border-3 border-warning '>
        {
          allVideo?.map(video=>(

            <Col key={video?.id} lg={4} md={6} sm={12}>

               <VideoCard setDeleteVideoResponse={setDeleteVideoResponse}  displayData={video}/>

            </Col>
          ))
        }
    

     </Row>
     :
     <div className='text-danger fs-3 fw-bold'>Nothing to display</div>
    }
    
    
    
    </>
  )
}

export default View