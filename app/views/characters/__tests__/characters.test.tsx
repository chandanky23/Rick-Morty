import React from 'react'
import Characters from '../characters'
import { MockedProvider } from '@apollo/client/testing'
import { ApolloProvider } from '@apollo/client'
import client from 'app/api'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

it('renders Character page without error', () => {
  let container = document.createElement('div');
  act(() => {
    ReactDOM.render(<ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>, container
    )
  })
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={[]}>
      <Characters />
    </MockedProvider>
  );

  expect(component.root.children).toContainHTML('span');
});
