import { API, graphqlOperation } from 'aws-amplify';

export const onCreateBlogName = /* GraphQL */ `
  subscription OnCreateBlogName {
    onCreateBlog {
      id
      name
      posts {
        items {
          id
          title
          content
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
