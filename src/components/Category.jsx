import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, getAllCategory } from '../services/allAPI';

function Category() {
  const [show, setShow] = useState(false);
  // state for store user entering data

  const [categoryName,setCategoryName]=useState("")
  console.log(categoryName);

  // state for getting category
  const [categoryGet,setCategoryGet]=useState([])
  console.log(categoryGet);
  
  


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// useeffect for get category
useEffect(() => {
  getCategory()

}, [])


  // add button

  const handleAddCategory=async()=>{
    if(categoryName){
      // api call
     try{
      await  addCategory({categoryName,allVideos:[]})
      handleClose()
      getCategory()
     }
     catch(err){
      console.log(err);
      
     }
    }
    else{
      toast.warning("enter category name..")

    }
  }

    // getting funtcion
    const getCategory=async()=>{
      try{
        const result=await getAllCategory()
        setCategoryGet(result.data)

      }
      catch(err){
        console.log(err);
        
      }
    }
  

  return (
    <>
   <div className='container '>
      <div className="d-flex align-item-center">
        <h3 className='mainText text-warning'>All Category</h3>
        
          <button onClick={handleShow} className='btn btn-warning bg-black fs-5 rounded-circle ms-3 fw-bolder text-warning' ><i className="fa-solid fa-plus"></i></button>
      </div>

      {/* category outer design */}
            {
              categoryGet.length>0?
              categoryGet?.map(category=>(
                <div className="container-fluid mt-3">
                <div className="border border-light border-3 rounded  p-3 mb-3">
                  <div className="d-flex justify-content-between">
                    <h6>{category.categoryName}</h6>
                    <div className="btn"><i className='fa-solid fa-trash' style={{color:'red'}} ></i></div>
                  </div>
                </div>
              </div>
              ))
              :
              <div className="text-danger fw-bold fs-3">Category not added yet</div>
            }
          
              <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                   <Modal.Body>
          {/* form ctrl */}
                      <div className='p-3 border border-3 border-warning rounded'>
                         <FloatingLabel    controlId="categoryName"     label="category"  >
                          <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="category" />
                         </FloatingLabel>
                       </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Cancel</Button>
                      <Button onClick={handleAddCategory} variant="warning">Add</Button>
                 </Modal.Footer>
              </Modal>
   
          
     

      


      
      
   </div>
   <ToastContainer position="top-right" autoClose={5000} theme='colored'/> 
    </>
  )
}

export default Category