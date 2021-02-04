export const CreateBlog = `mutation($name:String!){
  createBlog(input:{
    name: $name
  }) {
    id
    name
    updatedAt
    createdAt
  }
}`;

export const CreatePost = `mutation($blogId:ID! , $title: String!, $content: String!) {
  CreatePost(input:{
    title:$title, blogID: $blogId, content: $content
  }) {
    id
  }
}`;

export const CreateComment = `mutation($postId:ID!, content:String){
  CreateComment(input:{
    postID:$postId, content: $content
  }){
    id
  }
}`;
