import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../assets/music-beat.gif'
import Card from 'react-bootstrap/Card'
import settings from '../assets/set.webp'
import catagorize from '../assets/cat.jpg'
import history from '../assets/history.jpg'


function Landing() {
  return (
    <>
   <div className='container landingsection '>
      <div className='row align-item-center my-5'>
        <div className="col-lg-5" style={{marginTop:'80px'}}>
          <h3  >Welcome to <span  className='heading text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eum, deleniti officiis odio quis libero natus suscipit molestiae iste similique itaque expedita temporibus quisquam aspernatur a repellat nihil facere nobis.</p>
          <Link to={'/home'} className='btn btn-warning mt-4'>Get Started</Link>

        </div>

        <div className="col"></div>

        <div className="col-lg-6">  <img src={landingImage} alt="" /></div>
        
  
      </div>
   </div>

   {/* cards */}
       <div className='feature container mb-5 me-5' >
         <h3 className='text-center text-warning'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
               <Card style={{ width: '18rem',height:'380px' }} className='p-3'>
                <Card.Img variant="top" src={settings} />
                <Card.Body>
                <Card.Title>Managing Video</Card.Title>
                <Card.Text>
                Users can upload,view and remove video
                  </Card.Text>
               </Card.Body>
               </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '18rem' }} className='p-3'>
                <Card.Img variant="top" src={catagorize} />
                <Card.Body>
                <Card.Title>Catagorize Videos</Card.Title>
                <Card.Text>
                Users can categorize the video by drag and drop feature
                  </Card.Text>
               </Card.Body>
               </Card>
          </div>

          <div className="col-lg-4"> <Card style={{ width: '18rem' }} className='p-3'>
                <Card.Img variant="top" src={history} />
                <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                Users can manage the watch history of all video
                  </Card.Text>
               </Card.Body>
               </Card></div>
        </div>
       </div>

       {/* third sewction */}
       <div className="last container mb-5 my-5 p-5 border border-white border-3 rounded">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-warning">Simple,Fast and Powerful</h2>
                <div><p style={{color:'white',textAlign:'justify'}}><span style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores quos ut dolorem at adipisci minus voluptatibus ipsum eaque eos ea, enim fugiat amet iste quae animi accusamus delectus quas.</p></div>
                <div><p style={{color:'white',textAlign:'justify'}}><span style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>Catagorize Video:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores quos ut dolorem at adipisci minus voluptatibus ipsum eaque eos ea, enim fugiat amet iste quae animi accusamus delectus quas.</p></div>
                <div><p style={{color:'white',textAlign:'justify'}}><span style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>Managing History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores quos ut dolorem at adipisci minus voluptatibus ipsum eaque eos ea, enim fugiat amet iste quae animi accusamus delectus quas.</p></div>

          </div>
          <div className="col-lg-6 " style={{padding:'40px'}}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/U7tRMt8Q3Lk?si=z_5NVBp2d2XEjJYv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

       </div>

    </>
  )
}

export default Landing