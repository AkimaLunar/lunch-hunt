import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './containers/Shell';
import registerServiceWorker from './registerServiceWorker';
import './styles/normalize.css';
import './styles/style.css';

import { ApolloProvider } from 'react-apollo';
import { client } from './apolloClient';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Shell />
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();
