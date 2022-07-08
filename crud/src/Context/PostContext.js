import { createContext } from "react";

const PostsContext = createContext(
  {
    content: '',
    changeContentHandler: () => {}
  }
);

export default PostsContext;

