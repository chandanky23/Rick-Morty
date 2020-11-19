import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, MenuContainer, Item } from './styles'
import { sidenavConfig } from './config'
interface Props {
  className?: string
}

const Sidebar: React.FC<Props> = ({
  className,
}) => {
  const history = useHistory()
  const location = useLocation()

  return (
    <Container
      className={className}
    >
      <MenuContainer
        mode='inline'
        selectedKeys={[sidenavConfig.filter(nav => location.pathname.includes(nav.redirect) && nav)[0].key]}
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