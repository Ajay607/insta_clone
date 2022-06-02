import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-card-wrapper'>
        <h5>Ajay</h5>
        <div className='card-image-wrapper'>
          <img src='https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' />
        </div>
        <div className='card-content-wrapper'>
          <i className='material-icons' style={{color: "red"}}>favorite</i>
          <h6>title</h6>
          <p>This is amazing post</p>
          <input type="text" placeholder='add a comment' />
        </div>
      </div>
    </div>
  )
}

export default Home