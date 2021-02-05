export * from '../../../graphql/queries';

export const GetBlog = /* GraphQL */ `
  query($blogId: ID!) {
    getBlog(id: $blogId) {
      id
      name
      posts {
        id
        title
        content
        comments {
          id
          content
        }
      }
    }
  }
`;

export const getBlogName = /* GraphQL */ `
  query($blogId: ID!) {
    getBlog(id: $blogId) {
      id
      name
    }
  }
`;
