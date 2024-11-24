import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../services/allAPI';



function Add({setAddVideoResponse}) {

  // conditional rendering
  const[isInvalidUrl,setIsinvalidUrl]=useState(false)

  // store datas in add item
  const [videoDetails,setVideoDetails]=useState({caption:"",imageUrl:"",youTubeUrl:""})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(videoDetails);

  // getting youtube url

  const getEmbedUrl=(link)=>{
    // url-https://www.youtube.com/watch?v=tOM-nWPcR4U
    //embeded-- https://www.youtube.com/embed/tOM-nWPcR4"

    if(link.includes("v=")){


      let videoId= link.split("v=")[1].slice(0,11)
      console.log(videoId);
      setVideoDetails({...videoDetails,youTubeUrl:`https://www.youtube.com/embed/${videoId}`})
      setIsinvalidUrl(false)
      

    }
    else{
      setVideoDetails({...videoDetails,youTubeUrl:""})
      setIsinvalidUrl(true)
    }
  
  }

  //to upload video
  const handleUpload=async()=>{
    // de-structuring object
     const{caption,imageUrl,youTubeUrl}=videoDetails

     if(caption && imageUrl && youTubeUrl){
      // console.log("do api call");

      try{
       const result=await  addVideo(videoDetails)
       setAddVideoResponse(result.data)
       console.log(result);
       if(result.status>=200 && result.status<300){
        setVideoDetails({caption:"",imageUrl:"",youTubeUrl:""})
        toast.success(`${result.data.caption}  added to your collection`)
        // setVideos([...videos, result.data]);
        handleClose()
       }
       
      }
      catch(err){
        console.log(err);
        
      }
      
      
     }
     else{
      // alert("please enter the field")
      toast.warning("enter the field completely")
     }

  } 
  

  return (
    <>
    <div className="d-flex align-item-center">
      <h5 className='text-warning'>Upload New Video</h5>
      
        <button onClick={handleShow} className='btn btn-warning bg-black fs-5 rounded-circle ms-3 fw-bolder text-warning' ><i className="fa-solid fa-plus"></i></button>
        
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details!!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <p> Please fill the following details....</p>  
           <div className="border border-3 border-warning rounded p-4">
            {/* caption */}


              <FloatingLabel controlId="floatingInputCaption"label="Video Caption"className="mb-3">
               <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="enter video caption" />
              </FloatingLabel>

              {/* image url */}

              
              <FloatingLabel controlId="floatingInputImage"label="Image Url"className="mb-3">
               <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="enter image url" />
              </FloatingLabel>

              {/* youtube url */}

                
              <FloatingLabel controlId="floatingInputUrl"label="Youtube Url"className="mb-3">
               <Form.Control onChange={e=>getEmbedUrl(e.target.value)} type="text" placeholder="enter youTube url" />
              </FloatingLabel>
               {
                      isInvalidUrl &&

                      <p className='text-danger'>Invalid Url</p>
              }




           </div>
          





      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button onClick={handleUpload} variant="warning">Upload</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Add