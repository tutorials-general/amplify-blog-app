import React from 'react';

import Post from './Post';

export default function BlogComponent({ blogInfo }) {
  const { id, name, posts } = blogInfo;
  return (
    <div>
      <div>blog name: {name}</div>
      {posts
        ? posts.map((postInfo) => <Post postInfo={postInfo} />)
        : ' No Posts Yet'}
    </div>
  );
}
