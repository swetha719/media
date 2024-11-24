import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import View from '../components/View'


function Home() {
  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [deleteCategoryResponse,setDeleteCategoryResponse]=useState("")
  const [deleteVideoResponseFromCategory,setDeleteVideoResponseFromCtaegory]=useState("")

  return (
    <>
    <div className="container m-5 d-flex  justify-content-between">
      <Add setAddVideoResponse={setAddVideoResponse}/>
      <Link to={'/history'} className='text-warning fw-bold fs-5' style={{textDecoration:'none'}}>Watch History</Link>

    </div>

    <div className="row m-5">
      <div className="col-lg-6">
        <h3 className='text-warning'>All Videos</h3>
        <View addVideoResponse={addVideoResponse} deleteCategoryResponse={deleteCategoryResponse} setDeleteVideoResponseFromCtaegory={setDeleteVideoResponseFromCtaegory} />

      </div>
      <div className="col-lg-6">
      <Category setDeleteCategoryResponse={setDeleteCategoryResponse} deleteVideoResponseFromCategory={deleteVideoResponseFromCategory}/>

      </div>

    </div>
    </>
  )
}

export default Home