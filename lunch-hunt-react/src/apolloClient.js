import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getAuthHeader } from './utils/authentication';
import { defaults, resolvers } from './state';
import { API_URI } from './config.js';

const cache = new InMemoryCache();
const stateLink = withClientState({ resolvers, cache, defaults })
const authLink = setContext((_, { headers }) => {
  const authorization = getAuthHeader();
  return { headers: { ...headers, authorization } }
});
const httpLink = new HttpLink({ uri: API_URI });

export const client = new ApolloClient({
  link: ApolloLink.from([stateLink, authLink, httpLink]),
  cache,
})
