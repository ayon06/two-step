import './registerServiceWorker.js'

import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { initializeApp } from 'firebase/app'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

const firebaseConfig = {
  apiKey: 'AIzaSyAb40ByYyvjdoSDjvGBBkx2_bijfALD278',
  authDomain: 'two-step-e387b.firebaseapp.com',
  projectId: 'two-step-e387b',
  storageBucket: 'two-step-e387b.appspot.com',
  messagingSenderId: '1056876484968',
  appId: '1:1056876484968:web:2fa8dde9838477e3049edd',
  measurementId: 'G-NHCTPZ1J8T',
}

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
