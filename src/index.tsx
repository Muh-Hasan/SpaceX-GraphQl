import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from "./serviceWorker";

// apollo
import { ApolloProvider, ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

import { persistCache } from 'apollo-cache-persist';
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';

const cache = new InMemoryCache()

const a = async() => { await persistCache({
  cache,
  storage: window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
});
}

const client = new ApolloClient({
  uri: "https://spacexdata.herokuapp.com/graphql",
  cache
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
a()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
