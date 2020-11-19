import styled from "styled-components"
import Layout from "antd/lib/layout"

export const Header = styled(Layout.Header)`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryColor};
`
