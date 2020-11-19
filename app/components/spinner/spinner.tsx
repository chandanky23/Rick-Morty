import React from 'react'
import Spin from 'antd/lib/spin'
import styled from 'styled-components'

const Container = styled(Spin)`
  display: flex;
  justify-content: center;
`

const Spinner: React.FC = () => (
  <Container />
)

export default Spinner