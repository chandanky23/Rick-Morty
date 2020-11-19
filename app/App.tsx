import React, { useEffect } from 'react'
import Layout from 'antd/lib/layout'
import styled from 'styled-components'
import { BrowserRouter, useHistory } from 'react-router-dom'
import Header from 'app/components/header'
import Sidebar from 'app/components/sidebar'
import Routes from 'app/views'
import { APP_CONSTANTS } from 'app/vars'
import { routes } from 'app/routes'

const Content = styled(Layout)`
  &.ant-layout {
    min-height: 100vh;
    padding: 24px 24px;
    background: linear-gradient(12.96deg, #249c20 0%, #020202 99.96%);
  }
`

const App: React.FC = () => {

  return (
    <Layout style={{ overflow: 'hidden' }}>
      <Header header={APP_CONSTANTS.APP_NAME} />
      <BrowserRouter>
        <Layout>
          <Sidebar initUrl={routes.episodes} />
          <Content>
            <Routes />
          </Content>
        </Layout>
      </BrowserRouter>
    </Layout>
  )
}

export default App
