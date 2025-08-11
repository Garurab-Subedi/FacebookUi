import React from 'react'
import './Post.css'
import person1 from '../../assets/person/1.jpeg'
import post1 from '../../assets/post/1.jpeg'
import like from '../../assets/like.png'
import heart from '../../assets/heart.png'
import { MoreVert } from '@mui/icons-material'
const Post = () => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                  <img src={person1} alt=""  className='postProfileImg'/>
                  <span className='postUsername'>Gaurab Subedi</span>
                  <span className='postDate'>5 min ago</span>
                </div>
                <div className="postTopRight">
                  <MoreVert className='postIcon'/>
                </div>
            </div>
            <div className="postCenter">
              <div className="postText">Hey! it my first post:</div>
              <img src={post1} alt="" className='postImg'/>
            </div>
            <div className="postButtom">
              <div className="postBottomLeft">
                <img src={like} alt="" className='likeIcon' />
                <img src={heart} alt="" className='likeIcon' />
                <span className='postLikeCounter'> 20 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className='postCommentText'> 5 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post