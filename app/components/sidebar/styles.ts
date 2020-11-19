import styled from 'styled-components'
import Layout from 'antd/lib/layout'
import Menu from 'antd/lib/menu'

export const Container = styled(Layout.Sider)`
  width: 200px;
  &.ant-layout-sider {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }
`

export const MenuContainer = styled(Menu)`
  min-height: 100vh;
  border-right: 0;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`

export const Item = styled(MenuContainer.Item)`
  color: ${({ theme }) => theme.colors.primaryColor};
`
