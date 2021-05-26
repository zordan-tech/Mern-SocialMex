import './post.css'
import { MoreVert } from '@material-ui/icons'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

function Post({ post }) {
    const [like, setlike] = useState(post.likes.length)
    const [isLiked, setisLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)
        }
        fetchUser()
    },[post.userId])

    const likeHandler = () => {
        setlike(isLiked ? like - 1 : like + 1)
        setisLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                        <img className="postProfileImg" src={user.profilePicture || PF+"person/noAvatar.png"} alt="" />
                        </Link>
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF+post.img} alt="nnnn" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="like" />
                        <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="heart" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
