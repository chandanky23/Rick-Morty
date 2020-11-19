import React, { useState } from 'react'
// import { EnvironmentOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { Container, MenuContainer, Item } from './styles'
import { sidenavConfig } from './config'

interface Props {
  className?: string
}

const Sidebar: React.FC<Props> = ({
  className,
}) => {
  let history = useHistory()
  return (
    <Container
      className={className}
    >
      <MenuContainer
        mode='inline'
        defaultSelectedKeys={[sidenavConfig[0].key]}
      >
        {sidenavConfig.map(nav => (
          <Item key={nav.key} onClick={() => history.push(nav.redirect)}>
            {nav.title}
          </Item>
        ))}
      </MenuContainer>
    </Container>
  )
}

export default Sidebar