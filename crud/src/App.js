import './App.css';
import NewPost from './components/NewPost/NewPost';
import PostView from './components/PostView/PostView';
import PostEdit from './components/PostEdit/PostEdit';
import Home from './components/Home/Home'
import { Route, Routes} from 'react-router-dom';
import PostsProvider from './Context/PostsProvider';

function App() {

  return ( 
    <PostsProvider>
      <div className="AppWrapper">  
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/posts/new" element={<NewPost/>}/>
          <Route path="/posts/:postId" element={<PostView />}/>
          <Route path="/posts/:postId/edit" element={<PostEdit/>}/>
          <Route path="*" element={<div>404 Not Found</div>}/>
        </Routes>
      </div>
    </PostsProvider>
  );
}

export default App;