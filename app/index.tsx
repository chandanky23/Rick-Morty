import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import client from 'app/api'
import 'app/styles/app.less'
import App from 'app/app'
import Theme from 'app/styles/theme'

ReactDOM.render(
  <ApolloProvider client={client}>
  <Theme>
    <App />
  </Theme>
  </ApolloProvider>,
  document.getElementById('app')
)
