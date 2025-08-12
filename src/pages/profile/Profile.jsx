import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import './Profile.css'
import post3 from '../../assets/post/3.jpeg'
import postUser1 from '../../assets/person/7.jpeg'
const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
                <img src={post3} alt=""  className="profileCoverImg"/>
                <img src={postUser1} alt=""  className="profileUserImg"/>
            </div>  
            <div className="profileInfo">
                <h4 className="profileInfoName">Gaurav Subedi</h4>
                <span className="profileInfoDesc"> Hello My fRIENDS</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
