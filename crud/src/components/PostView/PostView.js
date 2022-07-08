import { useContext, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PostsContext from '../../Context/PostContext';
import Post from '../Post/Post';
import './PostView.css';

const PostView = () => {
  const [sendData, setSendData] = useState(false)
  const [edit, setEdit] = useState(false)
  const {content} = useContext(PostsContext)
  const {postId} = useParams()

  const sendRequest = async (url) => {
    const response = await fetch(url, {
      method: 'DELETE'});
  }

  const handleEdit = () => {
    setEdit(true)
  }

  const handleRemove = () => {
    const url = `http://localhost:7777/posts/${postId}`
    sendRequest(url)
    .then(setSendData(true))
  }

  return (
    <Post input={false} Link={false}>
    {sendData && (
        <Navigate to="/" replace={true} />
    )}
    {edit && (
    <Navigate to={`/posts/${postId}/edit`} replace={true} />
    )}
    <div className="postContent">
      {content}
    </div>
    <div className="PostView__footer">
      <button className="PostView__btn" onClick={handleEdit}>Изменить</button>
      <button className="PostView__btn remove-btn" onClick={handleRemove}>Удалить</button>
    </div>
    </Post>
  )
}

export default PostView