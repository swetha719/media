import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, deleteVideo, getAllCategory, getSingleVideo, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';



function Category({setDeleteCategoryResponse,deleteVideoResponseFromCategory}) {
  const [show, setShow] = useState(false);
  // state for store user entering data

  const [categoryName, setCategoryName] = useState("")
  console.log(categoryName);

  // state for getting category
  const [categoryGet, setCategoryGet] = useState([])
  console.log(categoryGet);
  




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // useeffect for get category
  useEffect(() => {
    getCategory()

  }, [deleteVideoResponseFromCategory])


  // add button

  const handleAddCategory = async () => {
    if (categoryName) {
      // api call
      try {
        await addCategory({ categoryName, allVideos: [] })
        setCategoryName("")
        handleClose()
        getCategory()
        
      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.warning("enter category name..")

    }
  }

  // getting funtcion
  const getCategory = async () => {
    try {
      const result = await getAllCategory()
      setCategoryGet(result.data)

    }
    catch (err) {
      console.log(err);

    }
  }
  // delete category

  const delCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId)
      getCategory()
    }
    catch (err) {
      console.log(err);

    }
  }

  // drp video
  const videoDropped=async(e,categoryId)=>{
    console.log(`video dropped in category with id ${categoryId}`);
    const videoId=e.dataTransfer.getData('videoId' )
    console.log(`dragged video with id ${videoId} and dropped in category id ${categoryId}`);

    // for get a single video
    
    try{
      const {data}= await getSingleVideo(videoId)
      console.log(data);

      // getting category details for updation
      const selectedCtegory=categoryGet.find(item=>item.id==categoryId)
      selectedCtegory.allVideos.push(data)
      console.log(selectedCtegory);
      await updateCategory(categoryId,selectedCtegory)
      getCategory()
      const  result=await  deleteVideo(videoId)
      setDeleteCategoryResponse(result.data)
      
      
      
    }
    catch(err){
      console.log(err);
      
    }


    
    
  }

  // drag image from category to all video
  const dragStarted=(e,videoDetails,categoryId)=>{
    console.log(`dragging started at category with video:${videoDetails} and category id : ${categoryId}`);
    const dataShare={videoDetails,categoryId}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
   

  }

//  prevent default
  const dragOverCategory=(e)=>{
    e.preventDefault()

  }

  return (
    <>
      <div className='container-category '>
        <div className="d-flex align-item-center">
          <h3 className='mainText text-warning'>All Category</h3>

          <button onClick={handleShow} className='btn btn-warning bg-black fs-5 rounded-circle ms-3 fw-bolder text-warning' ><i className="fa-solid fa-plus"></i></button>
        </div>

        {/* category outer design */}
        <div className="container-fluid mt-3 p-3 border  border-3 border-warning rounded ">
        {
          categoryGet.length > 0 ?
            categoryGet?.map(category => (
              
                <div droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,category.id)} className="border border-light border-3 rounded  p-3 mb-3">
                  <div className="d-flex justify-content-between">
                    <h6>{category.categoryName}</h6>
                    <button onClick={() => delCategory(category.id)} className="btn"><i className='fa-solid fa-trash' style={{ color: 'red' }} ></i>
                    </button>
                  </div>

                  {/* cards displaying in category */}
                   <div className="row mt-3">
                   {
                    category.allVideos.length>0 &&
                    category.allVideos?.map(video=>(
                      // drag video from category to all video
                      <div draggable={true} onDragStart={(e)=>dragStarted(e,video,category.id)} className="col-lg-6">
                      <VideoCard displayData={video} insideCategory={true}/>
                    </div>

                    ))
                   }
                  </div>
                </div>
              
            ))
            :
            <div className="text-danger fw-bold fs-3">Category not added yet</div>
        }
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* form ctrl */}
            <div className='p-3 border border-3 border-warning rounded'>
              <FloatingLabel controlId="categoryName" label="category"  >
                <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="category" />
              </FloatingLabel>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Cancel</Button>
            <Button onClick={handleAddCategory} variant="warning">Add</Button>
          </Modal.Footer>
        </Modal>









      </div>
      <ToastContainer position="top-right" autoClose={5000} theme='colored' />
    </>
  )
}

export default Category