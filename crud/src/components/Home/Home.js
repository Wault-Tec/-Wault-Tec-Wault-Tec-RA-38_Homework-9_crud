import { useState, useEffect } from "react";
import Header from "../Header/Header";
import useJsonFetch from '../../Hooks/useJsonFetch';
import Post from "../Post/Post";

const Home = () => {
  const [posts, setPosts] = useState([])
  const [data] = useJsonFetch('http://localhost:7777/posts');

  useEffect(()=> {
    if(data !== undefined) {
      setPosts(data)
    }
  }, [])

  useEffect(()=> {
    if(data !== undefined) {
      setPosts(data)
    }
  }, [data])

  return (
    <>
    <Header/>
    {posts.map((item)=> (
      <Post input={true} Link={true} text={item.content} id={item.id} key={item.id}/>
    ))} 
    </>
  )
}

export default Home