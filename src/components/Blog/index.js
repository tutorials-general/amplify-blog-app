import React from 'react';

import Post from './Post';

export default function BlogComponent({ blogInfo }) {
  const { id, name, posts } = blogInfo;
  console.log('posts', posts);
  return (
    <div>
      <div>blog name: {name}</div>
      {posts.items.length > 0
        ? posts.items.map((postInfo) => <Post postInfo={postInfo} />)
        : ' No Posts Yet'}
    </div>
  );
}
