import { useEffect, useRef, useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import Avatar from '../../img/Avatar.jpg';
import './NewPost.css';

const NewPost = () => {
  const [text, setText] = useState('') 
  const [sendData, setSendData] = useState(false)
  const textRef = useRef();

  useEffect(()=> {
    const localText = localStorage.getItem('oldText')
    setText(localText)
    textRef.current.value = localText
  },[])

  const handleChange = (e) => {
    const {value} = e.target
    setText(value)
  }

  const requestData = (text) => {
    return (
      {
        "id": 0,
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

  const handleClick = () => {
    if(text === '') {
      alert('Введите данные')
      return
    }
    sendRequest('http://localhost:7777/posts',requestData(text))
    .then(localStorage.removeItem('oldText'))
    .then(setSendData(true))
  }

  const handleCloseBtn = () => { 
    if(!!text) {
      localStorage.setItem('oldText', text)
    } else {
      localStorage.removeItem('oldText')
      }
    setSendData(true)
  }

  return (
    <div className="newPostWrapper">
      {sendData && (
        <Navigate to="/" replace={true} />
      )}
      <div className="newPostHeader">
        <a href='#' className='Active'>🖉 Публикация</a> 
          {' | '}
        <a href='#'>📷 Фото/видео</a>
          {' | '}
        <a href='#'>📹 Прямой эфир</a>
          {' | '}
        <a href='#'>… Ещё</a>
        <button className='close-btn' onClick={handleCloseBtn}>✖</button>
      </div>
      <div className="postLine"></div>
      <div className="newPostContent">
        <img className="avatar" src={Avatar} />
        <textarea className="newPostTextarea" placeholder='Что у вас нового?' onChange={handleChange} ref={textRef}></textarea>
      </div>
      <button className='NewPost__add-btn' onClick={handleClick}>Опубликовать</button>
    </div>
  )
}

export default NewPost