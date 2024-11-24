import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideo, getAllVideo, getSingleCategory, updateCategory } from '../services/allAPI'






function View({addVideoResponse,deleteCategoryResponse,setDeleteVideoResponseFromCtaegory}) {
  const [allVideo,setAllVideo]=useState([])
  const [deleteVideoResponse,setDeleteVideoResponse]=useState("")

  useEffect(()=>{
    getVideo()


  },[addVideoResponse,deleteVideoResponse,deleteCategoryResponse])
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
  // dropping video
  const videoCategoryDropped=async(e)=>{
    const {videoDetails,categoryId}=JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(videoDetails,categoryId);
    
    // getting single video from category
    try{
      const {data}=await getSingleCategory(categoryId)
      console.log(data);

      // filtering catogory and updating it

      const updateCategoryVideoList=data.allVideos.filter(item=>item.id!=videoDetails.id)
      console.log(updateCategoryVideoList);

      const {id,categoryName}=data
      const categoryResult=await updateCategory(id,{id,categoryName,allVideos:updateCategoryVideoList})
      setDeleteVideoResponseFromCtaegory(categoryResult.data)

      await addVideo(videoDetails)
      getVideo()
      
      

      
    }
    catch(err){
      console.log(err);
     
    }
    
    

  }

//  prevent  default event
  const dragOverAllVideo=(e)=>{
    e.preventDefault()

  }


  return (
    <>
    {
      allVideo.length> 0 ?
      <Row droppable={true} onDragOver={(e)=>dragOverAllVideo(e)} onDrop={(e)=>videoCategoryDropped(e)}  className='border border-3 border-warning '>
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