import React from 'react'
import './RightBar.css'
import birthdayImg from '../../assets/gift.png'
import Add from '../../assets/ad.png'
import person3 from '../../assets/person/3.jpeg'
import {Users} from '../../dummyData'
import Online from '../online/Online'
const RightBar = ({profile}) => {

  const HomeRightBar = () => {
    return(
      <>
         <div className="birthdayContainer">
          <img src={birthdayImg} alt="" className='birthdayImg'/>
          <span className='birthdayText'>
            <b>Gaurab Subedi</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src={Add} alt="" className='rightbarAd' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u)=>(
            <Online key={u.id} user={u} />
          ))}
          </ul>
      </>
    )
  };

  const ProfileRightBar = () => {
    return(
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className='rightbarInfokey'>City:</span>
          <span className='rightbarInfoValue'>Pokhara</span>
        </div>
        <div className="rightbarInfoItem">
          <span className='rightbarInfokey'>From:</span>
          <span className='rightbarInfoValue'>Nepal</span>
        </div>
        <div className="rightbarInfoItem">
          <span className='rightbarInfokey'>Relationship:</span>
          <span className='rightbarInfoValue'>Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={person3} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mina Tiwari</span>
        </div>
        <div className="rightbarFollowing">
          <img src={person3} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mina Tiwari</span>
        </div>
        <div className="rightbarFollowing">
          <img src={person3} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mina Tiwari</span>
        </div>
        <div className="rightbarFollowing">
          <img src={person3} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mina Tiwari</span>
        </div>
        <div className="rightbarFollowing">
          <img src={person3} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mina Tiwari</span>
        </div>
        <div className="rightbarFollowing">
          <img src={person3} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mina Tiwari</span>
        </div>
        <div className="rightbarFollowing">
          <img src={person3} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mina Tiwari</span>
        </div>
        <div className="rightbarFollowing">
          <img src={person3} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Mina Tiwari</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      <ProfileRightBar />
      </div>
    </div>
  )
}

export default RightBar