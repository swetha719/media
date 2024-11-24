// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { deleteHistory, getAllHistory } from '../services/allAPI'



// function History() {

//   const [videoHistories,setVideoHistory]=useState([])
//   console.log(videoHistories);
  

//   useEffect(() => {
  
//     getHistory()

//   }, [])
  
//   // get history

//   const getHistory=async()=>{
//     try{
//       const result= await getAllHistory()
//       console.log(result.data);
//       setVideoHistory(result.data)
      
//     }
//     catch(err){
//       console.log(err);
      
//     }
//   }


//   // deleting history

//   const delHistory=async(videoId)=>{
//     try{
//       await deleteHistory(videoId)
//       getHistory()
//     }
//     catch(err){
//       console.log(err);
      
//     }
//   }

//   return (
//     <>
//     <div className='container my-5'>
//       <div className='d-flex justify-content-between align-items-center'>
//       <h3 className='text-warning'>Watch History</h3>
//       <Link to={'/home'} className='text-warning' style={{textDecoration:'none',fontSize:'20px'}}>Back to <i class="fa-solid fa-house"></i></Link>

//       </div>
      
//       <table className='table mt-5' style={{overflowX: 'auto',backgroundColor: 'white',borderRadius: '8px',padding: '10px',}}>
//           <thead style={{ backgroundColor: 'white' }}>
//             <tr>
//               <th>#</th>
//               <th>Caption</th>
//               <th>Link</th>
//               <th>Date</th>
//               <th><i className="fa-solid fa-ellipsis"></i></th>
//             </tr>
//             </thead>
//             <tbody style={{ backgroundColor: 'white' }}>
//              {
//               videoHistories.length>0?
//               videoHistories?.map((item,index)=>(
//                 <tr key={item?.id}>
//                 <td>{index+1}</td>
//                 <td>{item?.caption}</td>
//                 <td><a href={item?.youTubeUrl} target='_blank'>{item?.youTubeUrl}</a></td>
//                 <th>{item?.formatedDate}</th>

//                 <td><button className='btn' onClick={()=>delHistory(item?.id)}><i className="fa-solid fa-trash" style={{color:'red'}}></i></button></td>
//               </tr>
//               ))
//               :
//               <div className='text-danger fw-bold fs-3'>Nothing to display</div>
//              }
//             </tbody>

            
//         </table>

//     </div>
//     </>
//   )
// }

// export default History


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistory, getAllHistory } from '../services/allAPI';

function History() {
  const [videoHistories, setVideoHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    try {
      const result = await getAllHistory();
      setVideoHistory(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const delHistory = async (videoId) => {
    try {
      await deleteHistory(videoId);
      getHistory();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div style={{ padding: '20px',maxWidth: '1200px',margin: 'auto',display: 'flex',flexDirection: 'column',gap: '20px'  }}>
        {/* Header */}
        <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center',flexWrap: 'wrap',}}>
          <h3 style={{ color: 'orange', fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', margin: '0' }}>Watch History</h3>
          <Link to={'/home'} style={{color: 'orange',  textDecoration: 'none',  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', margin: '5px 0',}}>Back to <i className="fa-solid fa-house"></i>
          </Link>
        </div>

        {/* Responsive Table Container */}
        <div style={{ overflowX: 'auto', // Enables scrolling for small screens 
            borderRadius: '8px', padding: '10px',}}>
          <table style={{  width: '100%',  borderCollapse: 'collapse',   
              fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', // Responsive font size
              }}   >
            <thead >
              <tr>
                <th style={{ padding: '10px',color:'white',fontSize:'30px' }}>#</th>
                <th style={{ padding: '10px',color:'white',fontSize:'20px'  }}>CAPTION</th>
                <th style={{ padding: '10px',color:'white',fontSize:'20px' }}>LINK</th>
                <th style={{ padding: '10px',color:'white',fontSize:'20px' }}>DATE</th>
                <th style={{ padding: '10px' ,color:'white',fontSize:'20px', fontWeight:"bold"}}>
                  <i className="fa-solid fa-ellipsis"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {videoHistories.length > 0 ? (
                videoHistories.map((item, index) => (
                  <tr
                    key={item?.id}
                    style={{
                      borderBottom: '1px solid #ddd',
                      textAlign: 'left',
                    }}
                  >
                    <td style={{ padding: '10px' }}>{index + 1}</td>
                    <td style={{ padding: '10px' }}>{item?.caption}</td>
                    <td style={{ padding: '10px' }}>
                      <a
                        href={item?.youTubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'blue', textDecoration: 'none' }}
                      >
                        {item?.youTubeUrl}
                      </a>
                    </td>
                    <td style={{ padding: '10px' }}>{item?.formatedDate}</td>
                    <td style={{ padding: '10px' }}>
                      <button
                        style={{
                          border: 'none',
                          backgroundColor: 'transparent',
                          cursor: 'pointer',
                        }}
                        onClick={() => delHistory(item?.id)}
                      >
                        <i
                          className="fa-solid fa-trash"
                          style={{ color: 'red', fontSize: '1.2rem' }}
                        ></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    style={{
                      textAlign: 'center',
                      color: 'red',
                      fontWeight: 'bold',
                      fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                      padding: '20px',
                    }}
                  >
                    Nothing to display
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default History;
