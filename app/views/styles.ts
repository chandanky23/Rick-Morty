import styled from "styled-components"
import _Breadcrumb from "antd/lib/breadcrumb"
import _Form from "antd/lib/form"

export const Breadcrumb = styled(_Breadcrumb)`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.colors.primaryColor};

  .ant-breadcrumb-separator {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`

export const BreadcrumbItem = styled(Breadcrumb.Item)`
  color: ${({ theme }) => theme.colors.primaryColor};
`

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.primaryColor};
`

export const Title = styled.div`
  font-size: 30px;
  color: inherit;
  font-weight: bold;
  margin: 0 16px 16px 0;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
`

export const Form = styled(_Form)`
  margin-right: 16px;
  .ant-form-item-label > label {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  &:last-child {
    margin-right: 0;
  }
`
