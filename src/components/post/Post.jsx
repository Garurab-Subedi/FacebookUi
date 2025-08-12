import React, { useState } from 'react'
import './Post.css'
import person1 from '../../assets/person/1.jpeg'
import post1 from '../../assets/post/1.jpeg'
import likee from '../../assets/like.png'
import heart from '../../assets/heart.png'
import { MoreVert } from '@mui/icons-material'
import {Users} from "../../dummyData"
const Post = ({post}) => {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler =()=> {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                  <img src={Users.filter(u=>u.id=== post?.userId)[0].profilePicture} alt=""  className='postProfileImg'/>
                  <span className='postUsername'>{Users.filter(u=>u.id=== post?.userId)[0].username}</span>
                  <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                  <MoreVert className='postIcon'/>
                </div>
            </div>
            <div className="postCenter">
              <div className="postText">{post?.desc}</div>
              <img src={post.photo} alt="" className='postImg'/>
            </div>
            <div className="postButtom">
              <div className="postBottomLeft">
                <img src={likee} alt="" className='likeIcon' onClick={likeHandler}/>
                <img src={heart} alt="" className='likeIcon' />
                <span className='postLikeCounter'> {like} people like it</span>
              </div>
              <div className="postBottomRight">
                <span className='postCommentText'> {post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post