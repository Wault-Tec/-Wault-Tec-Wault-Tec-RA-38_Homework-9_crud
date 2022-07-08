import Post from "../Post/Post";
import { useContext, useEffect, useRef, useState } from 'react';
import PostsContext from '../../Context/PostContext';
import './PostEdit.css';
import { useParams, Navigate } from 'react-router-dom';

const PostEdit = () => {
  const [text, setText] = useState();
  const [save, setSave] = useState(false)
  const [close, setClose] = useState(false)
  const {content, changeContentHandler} = useContext(PostsContext)
  const textRef = useRef();
  const {postId} = useParams()

  useEffect(()=> {
    setText(content)
    textRef.current.value = content;
  },[])

  const handleChange = (e) => {
    const {value} = e.target
    setText(value)
  }

  const requestData = (text) => {
    return (
      {
        "id": postId,
        "content": text
      }
    )
  }

  const sendRequest = async (url, body) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  const handleSave = () => {
    if(text === '') {
      alert('Введите данные')
      return
    }
    sendRequest('http://localhost:7777/posts', requestData(text))
    .then(changeContentHandler(text))
    .then(setSave(true))
  }

  const handleClose = () => {
    setClose(true)
  }


  return (
    <>
    {
      save && (
        <Navigate to={`/posts/${postId}`} replace={true} />
      )
    }
    {
      close && (
        <Navigate to={`/posts/${postId}`} replace={true} />
      )
    }
    <div className="PostEdit__header">
      <span>Редактировать публикацию</span>
      <button className='close-btn' onClick={handleClose}>✖</button>
    </div>
    <Post input={false}>
    <textarea className="postEditTextarea" ref={textRef} onChange={handleChange}></textarea>
      <div className="PostEdit_options">
        <div className="options-item">
          🎨 Фото/видео
        </div>
        <div className="options-item">
          👫 Отметить друзей
        </div>
        <div className="options-item">
          😀 Чувства/действия
        </div>
        <div className="options-item">
          📍 Отметить посещение
        </div>
      </div>
    </Post>
    <button className="Edit__btn" onClick={handleSave}>Сохранить</button>
    </>
  )
}

export default PostEdit