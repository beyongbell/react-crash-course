import React, { useState } from 'react';
import './App.css';

import Navbar from './Templates/Navbar';
import Input  from './Components/Input';

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = {id, title};
    setPosts([newPost, ...posts])
    id += 1;
  }

  return (
    <div className="App">
      <Navbar/>
      <Input addPost={addPost} />
    </div>
  );
}

export default App;
