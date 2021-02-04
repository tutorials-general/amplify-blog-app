import React, { useState, useEffect } from 'react';

import api from './api';
import { Blog } from './components';

function App() {
  const [blogInfo, setBlogInfo] = useState(null);

  const [blogNameInput, setBlogNameInput] = useState('');

  const handleChange = (e) => {
    setBlogNameInput(e.target.value);
  };
  const createBlogHandler = async () => {
    const createdResult = await api.mutations.createBlog({
      name: blogNameInput,
    });
    const blogId = createdResult.id;

    await loadBlog(blogId);
  };

  const loadBlog = async (blogId) => {
    const getBlogResult = await api.queries.getBlogName({ blogId });
    setBlogInfo(getBlogResult);
  };
  return blogInfo ? (
    <Blog blogInfo={blogInfo} />
  ) : (
    <>
      <input type="text" value={blogNameInput} onChange={handleChange} />
      <div onClick={createBlogHandler}>create blog</div>
    </>
  );
}

export default App;
