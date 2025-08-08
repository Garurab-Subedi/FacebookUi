import React from 'react'
import './Sidebar.css'
import { RssFeed, Chat, PlayCircleFilled, Group, Bookmark, HelpOutline, WorkOutline, Event } from '@mui/icons-material'
import person1 from '../../assets/person/1.jpeg'
import person2 from '../../assets/person/2.jpeg'
import person3 from '../../assets/person/3.jpeg'
import person4 from '../../assets/person/4.jpeg'
import person5 from '../../assets/person/5.jpeg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon' />
                    <span className="sidebarListItemText">Feed</span>   
                </li>
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon' />
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilled className='sidebarIcon' />
                    <span className="sidebarListItemText">Videos</span>
                </li>    
                <li className="sidebarListItem">
                    <Group className='sidebarIcon' />
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon' />
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className='sidebarIcon' />
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className='sidebarIcon' />
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className='sidebarIcon' />
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon' />
                    <span className="sidebarListItemText">Followings</span>
                </li>          
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={person1} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">John Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src={person2} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Jane Smith</span>
                </li>
                <li className="sidebarFriend">
                    <img src={person3} alt="" className="sidebarFriendImg     " />
                    <span className="sidebarFriendName">Alice Johnson</span>
                </li>
                <li className="sidebarFriend">
                    <img src={person4} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Bob Brown</span>
                </li>
                <li className="sidebarFriend">
                    <img src={person5} alt="" className="sidebarFriendImg " />
                    <span className="sidebarFriendName">Charlie Davis</span>
                </li>
                 <li className="sidebarFriend">
                    <img src={person4} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Bob Brown</span>
                </li>
                <li className="sidebarFriend">
                    <img src={person5} alt="" className="sidebarFriendImg " />
                    <span className="sidebarFriendName">Charlie Davis</span>
                </li>
                 <li className="sidebarFriend">
                    <img src={person4} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Bob Brown</span>
                </li>
                <li className="sidebarFriend">
                    <img src={person5} alt="" className="sidebarFriendImg " />
                    <span className="sidebarFriendName">Charlie Davis</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar