import React from 'react';

import Comment from './Comment';

export default function PostComponent({ postInfo }) {
  const { id, title, content, comments } = postInfo;
  return (
    <div>
      <div>post Title: {title}</div>
      <div>post Content: {content}</div>
      {comments
        ? comments.map((commentInfo) => <Comment commentInfo={commentInfo} />)
        : 'No Comment Yet'}
    </div>
  );
}
