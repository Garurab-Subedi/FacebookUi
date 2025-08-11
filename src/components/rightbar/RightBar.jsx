import React from 'react'
import './RightBar.css'
import birthdayImg from '../../assets/gift.png'
import Add from '../../assets/ad.png'
import person3 from '../../assets/person/3.jpeg'
const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src={birthdayImg} alt="" className='birthdayImg'/>
          <span className='birthdayText'>
            <b>Gaurab Subedi</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src={Add} alt="" className='rightbarAd' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src={person3} alt="" className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Gaurab Subedi</span>
          </li>
                    <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src={person3} alt="" className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Gaurab Subedi</span>
          </li>
                    <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src={person3} alt="" className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Gaurab Subedi</span>
          </li>
                    <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src={person3} alt="" className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Gaurab Subedi</span>
          </li>
                    <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src={person3} alt="" className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Gaurab Subedi</span>
          </li>
                    <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img src={person3} alt="" className='rightbarProfileImg' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Gaurab Subedi</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RightBar