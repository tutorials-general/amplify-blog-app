export const GetBlog = `query($blogId:ID!) {
  getBlog(id:$blogId) {
    id,
    name,
    posts {
      id,
      title,
      content,
      comments {
        id,
        content
      }
    }
  }
}`;

export const getBlogName = `query($blogId:ID!) {
  getBlog(id:$blogId) {
    id,
    name,
  
  }
}`;
