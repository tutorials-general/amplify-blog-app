import { API, graphqlOperation } from 'aws-amplify';

import * as operations from '../../customGraphQL';

export const createBlog = async ({ name }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(operations.mutations.CreateBlog, { name })
    );
    console.log('result from createBlog: ', result);
    return result.data.createBlog;
  } catch (error) {
    console.error('error from createBlog', error);
  }

  return;
};

export const createPost = async ({ title, content, blogID }) => {
  const result = await API.graphql(
    graphqlOperation(
      operations.mutations.CreatePost({ title, content, blogID })
    )
  );
  console.log('result from createPost: ', result);
  return result.data.createPost;
};

export const createComment = async ({ content, postID }) => {
  const result = await API.graphql(
    graphqlOperation(operations.mutations.CreateComment({ content, postID }))
  );

  console.log('result from createCommnet: ', result);
  return result.data.createComment;
};
