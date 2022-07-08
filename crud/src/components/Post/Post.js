import './Post.css';
import Avatar from '../../img/Avatar.jpg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import PostsContext from '../../Context/PostContext';

const Post = (props) => {
  const {changeContentHandler} = useContext(PostsContext)
  
  const handleClick = () => {
    changeContentHandler(props.text)
  }

  const renderInput = (boolean) => {
    if(boolean) {
      return (
        <div className="inputWrapper">
          <img className="avatar avatarMini" src={Avatar} />
          <input type="text" placeholder={"Напишите комментарий..."} className="postInput">
          </input>
        </div>
      )
    }
  }  

  const renderLink = (boolean, text) => {
    if(boolean) {
      return (
        <Link to={`/posts/${props.id}`} onClick={handleClick}>
        <div className="postContent">
          {text}
        </div>
      </Link>
      )
    }
  }

  return (
    <div className="postWrapper">
      <div className="postHeader">
        <img className="avatar" src={Avatar} />
        <div className="userInfo">
          <span className="userName">Pavel Durov</span>
          <span className="userRank">☆ Идейный вдохновитель 
            <span className="postTime"> 4 мин.</span>
          </span>
        </div>
      </div>
    {renderLink(props.Link, props.text)}
    {renderInput(props.input)}
    {props.children}
    </div>
  )
}

export default Post