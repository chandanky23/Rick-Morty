import styled from "styled-components"
import Button from "antd/lib/button"

export const EpisodeContainer = styled.div`
  margin: 16px 0;
  color: ${({ theme }) => theme.colors.whiteColor};
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const DeleteButton = styled(Button)`
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.redColor};
  border: none;
  margin-left: 16px;
`

export const SubTitleContainer = styled.div`
  color: ${({ theme }) => theme.colors.whiteColor};
  display: flex;
  font-size: 14px;
`

export const Label = styled.div`
  color: inherit;
`

export const SubTitle = styled.div`
  color: inherit;
  font-weight: bold;
`

export const ExtraContainer = styled.div`
  margin: 32px 0;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 20px;
`

export const CardContainer = styled(ButtonContainer)`
  flex-wrap: wrap;
  margin: 16px 0;
  justify-content: center;
`
