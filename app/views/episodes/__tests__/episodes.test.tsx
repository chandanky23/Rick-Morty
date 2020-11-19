import React from 'react'
import Episodes from '../episodes'
import { MockedProvider } from '@apollo/client/testing'
import { ApolloProvider } from '@apollo/client'
import client from 'app/api'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

it('renders Episodes page without error', () => {
  let container = document.createElement('div');
  act(() => {
    ReactDOM.render(<ApolloProvider client={client}>
      <Episodes />
    </ApolloProvider>, container
    )
  })
});

it('should render loading state initially', () => {

  const component = renderer.create(
    <MockedProvider mocks={[]}>
      <Episodes />
    </MockedProvider>
  );

  expect(component.root.children).toContainHTML('span');
});
