import { useState } from "react";
import PostsContext from "./PostContext";

export default function PostsProvider(props) {
  const [content, setContent] = useState('')
  const changeContentHandler = (content) => {
    setContent(content)
  }

  return (
    <PostsContext.Provider value={{content, changeContentHandler}}>
      {props.children}
    </PostsContext.Provider>
  )
}

