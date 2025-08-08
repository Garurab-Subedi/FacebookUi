import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Topbar />
        <div className="homeContainer">
            <Sidebar />
            <Feed />
            <RightBar />
        </div>
    </div>
  )
}

export default Home