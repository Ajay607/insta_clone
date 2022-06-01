import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-wrapper'>
      <div className='profile-outer'>
        <div className='profile-content'>
          <div className='profile-images'>
            <img src='https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' alt='profile-image'></img>
          </div>
          <div className='content'>
            <div>
              <h3 className='name'>Ajay pathak</h3>
              <p>
                <span className='post'>40 post</span>
                <span className='followers'>40 followers</span>
                <span className='following'>40 following</span>
              </p>
            </div>
          </div>
        </div>

        <div className='gallery'>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
        </div>

      </div>
    </div>
  )
}

export default Profile