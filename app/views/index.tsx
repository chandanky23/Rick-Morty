import React, { useEffect } from 'react'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import loadable from '@loadable/component'
import { routes } from 'app/routes'

const Episodes = loadable(() => import('./episodes'))
const Characters = loadable(() => import('./characters'))
const Locations = loadable(() => import('./locations'))
const Episode = loadable(() => import('./episodes/episode'))
const Character = loadable(() => import('./characters/character'))
const Location = loadable(() => import('./locations/location'))

const Routes: React.FC = () => {
  const location = useLocation()
  const history = useHistory()
  useEffect(() => {
    // if (![routes.characters, routes.episodes, routes.locations].includes(location.pathname)) {
    history.push(routes.episodes)
    // }
  }, [])

  return (
    <Switch>
      <Route exact path={routes.episodes} render={() => <Episodes />} />
      <Route exact path={routes.episode} render={() => <Episode />} />
      <Route exact path={routes.characters} render={() => <Characters />} />
      <Route exact path={routes.character} render={() => <Character />} />
      <Route exact path={routes.locations} render={() => <Locations />} />
      <Route exact path={routes.location} render={() => <Location />} />
    </Switch>
  )
}

export default Routes
