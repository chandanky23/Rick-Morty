import React from 'react'
import { Header as _Header } from './styles'

interface Props {
  header: string
  className?: string
}

const Header: React.FC<Props> = ({ header, className }) => {
  return (
    <_Header className={className}>
      {header}
    </_Header>
  )
}

export default Header