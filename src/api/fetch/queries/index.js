import { API, graphqlOperation } from 'aws-amplify';

import * as operations from '../../customGraphQL';

export const getBlog = async ({ blogId }) => {
  console.log('blogId', blogId);
  try {
    const result = await API.graphql(
      graphqlOperation(operations.queries.getBlogName, { blogId })
    );
    console.log('result', result);
    return result;
  } catch (error) {
    console.error('error from getBlog', error);
  }
  return;
};
