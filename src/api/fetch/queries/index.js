import { API, graphqlOperation } from 'aws-amplify';

import * as operations from '../../customGraphQL';

export const getBlogName = async ({ blogId }) => {
  console.log('blogId', blogId);
  try {
    const result = await API.graphql(
      graphqlOperation(operations.queries.getBlogName, { blogId })
    );

    return result.data.getBlog;
  } catch (error) {
    console.error('error from getBlog', error);
  }
  return;
};
