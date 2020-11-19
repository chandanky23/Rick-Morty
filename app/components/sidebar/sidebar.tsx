import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, MenuContainer, Item } from './styles'
import { sidenavConfig } from './config'
interface Props {
  className?: string
  initUrl: string
}

const Sidebar: React.FC<Props> = ({
  className,
  initUrl
}) => {
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    history.push(initUrl)
  }, [])

  const activeNav = sidenavConfig.filter(nav => location.pathname.includes(nav.redirect) && nav)[0]

  return (
    <Container
      className={className}
    >
      <MenuContainer
        selectedKeys={[activeNav && activeNav.key]}
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