import { API, graphqlOperation } from 'aws-amplify';

import * as customOperations from '../../customGraphQL';
import * as subscriptions from '../../../graphql/subscriptions';

export const onCreateBlogName = () => {
  try {
    const subscription = API.graphql(
      graphqlOperation(customOperations.subscriptions.onCreateBlogName)
    ).subscribe({
      next: ({ provider, value }) =>
        console.log('provider, value', provider, value),
    });
    return subscription;
  } catch (error) {
    console.error('error from onCreateBlog subscription', error);
  }
  return;
};
