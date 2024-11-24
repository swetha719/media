import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, watchHistory } from '../services/allAPI';



function VideoCard({displayData,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    
    const{caption,youTubeUrl}=displayData
    const localTime=new Date()
    console.log(localTime);
    const formatedDate=localTime.toLocaleString()
    const videoHistory={caption,youTubeUrl,formatedDate}

    try{
      await  watchHistory(videoHistory)

    }
    catch(err){
      console.log(err);
      
    }

    setShow(true)
  };

  // delete video from view

  const handleRemoveVideo=async(videoId)=>{
    try{
      const result=await deleteVideo(videoId)
      console.log(result);
      setDeleteVideoResponse(result.data)
      
    }
    catch(err){
      console.log(err);
      
    }

  }

  // drag image
  const dragStarted=(e,videoId)=>{
    console.log(videoId);
    console.log(`videocard dragged with id ${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
    
    
  }

  return (
    <>
      <Card draggable={true} onDragStart={(e)=>dragStarted(e,displayData?.id)} className='m-3 bg-warning' style={{height:'300px',width:'200px'}}>
      <Card.Img onClick={handleShow} style={{height:'200px'}} variant="top" src={displayData?.imageUrl} />
      <Card.Body className='d-flex align-items-center justify-content-between'>

        <h6  style={{color:'black'}}>{displayData?.caption}</h6>
        {
          !insideCategory &&
          <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn'> <i className="fa-solid fa-trash" style={{color:'red',fontSize:'20px'}}></i></button>

        }
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          
        <iframe width="100%" height="514" src={`${displayData?.youTubeUrl}?autoplay=1`} title="Armadham | Aavesham | Jithu Madhavan |Fahadh Faasil | Sushin Shyam | Vinayak| Nazriya| Anwar Rasheed" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>


    
    </>
  )
}

export default VideoCard