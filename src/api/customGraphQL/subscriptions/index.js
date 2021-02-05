import { API, graphqlOperation } from 'aws-amplify';

export * from '../../../graphql/subscriptions';

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
