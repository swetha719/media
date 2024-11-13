import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'



function History() {

  const [videoHistories,setVideoHistory]=useState([])
  console.log(videoHistories);
  

  useEffect(() => {
  
    getHistory()

  }, [])
  
  // get history

  const getHistory=async()=>{
    try{
      const result= await getAllHistory()
      console.log(result.data);
      setVideoHistory(result.data)
      
    }
    catch(err){
      console.log(err);
      
    }
  }


  // deleting history

  const delHistory=async(videoId)=>{
    try{
      await deleteHistory(videoId)
      getHistory()
    }
    catch(err){
      console.log(err);
      
    }
  }

  return (
    <>
    <div className='container my-5'>
      <div className='d-flex justify-content-between'>
      <h3 className='text-warning'>Watch History</h3>
      <Link to={'/home'} className='text-warning' style={{textDecoration:'none',fontSize:'20px'}}>Back to <i class="fa-solid fa-house"></i></Link>

      </div>
      
      <table className='table mt-5' style={{backgroundColor:'white'}}>
          <thead style={{ backgroundColor: 'white' }}>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Link</th>
              <th>Date</th>
              <th><i className="fa-solid fa-ellipsis"></i></th>
            </tr>
            </thead>
            <tbody style={{ backgroundColor: 'white' }}>
             {
              videoHistories.length>0?
              videoHistories?.map((item,index)=>(
                <tr key={item?.id}>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td><a href={item?.youTubeUrl} target='_blank'>{item?.youTubeUrl}</a></td>
                <th>{item?.formatedDate}</th>

                <td><button className='btn' onClick={()=>delHistory(item?.id)}><i className="fa-solid fa-trash" style={{color:'red'}}></i></button></td>
              </tr>
              ))
              :
              <div className='text-danger fw-bold fs-3'>Nothing to display</div>
             }
            </tbody>

            
        </table>

    </div>
    </>
  )
}

export default History