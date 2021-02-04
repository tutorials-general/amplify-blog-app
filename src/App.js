import React, { useState, useEffect } from 'react';

import api from './api';

function App() {
  const [blogId, setBlogID] = useState('');
  const [blogName: setBlogName] = useState('');
  const [blogNameInput, setBlogNameInput] = useState('');

  const handleChange = (e) => {
    setBlogNameInput(e.target.value);
  };
  const createBlogHandler = async () => {
    const createdResult = await api.mutations.createBlog({
      name: 'MyFirstBlog',
    });
    console.log('createdResult', createdResult);
    const blogId = createdResult.id;
    
    await loadBlog(blogId);
  };

  const loadBlog = async (blogId) => {
    const getBlogResult = await api.queries.getBlog({ blogId });
    console.log('getBlogResult', getBlogResult);
  };
  return (
    <div>
      <div>blog name: {blogName ? blogName : 'no blog'}</div>
      <input type="text" value={blogNameInput} onChange={handleChange} />
      <div onClick={createBlogHandler}>create blog</div>
    </div>
  );
}

export default App;
