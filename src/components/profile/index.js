import React from 'react'
import './index.css';
import '../bootstrap.css';
import Account from "../accounts"

const Profile = ({ role,name, profilepicture,linkedin,email,github}) => {

  return (
    <div className="Block">
      <div className="Cover">
      </div>
      <div className="BlockIcon">
        <img src={profilepicture} />
      </div>
      <br/><br/>
      <h4>{name}</h4>
      <br />
      <h6>{role}</h6>
      <br/>
      <p className="BlockPara">
        I am a Full Stack Developer, an open source contributor, an avid photographer and above all a Tech enthusiast. Contributing to projects, programming and helping others to find solutions to technical problems is what I love to do.
      </p>
      <Account/>
    </div>
  )
}

export default Profile;
