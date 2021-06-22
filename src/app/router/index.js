import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { HOME, DETAILS } from './constants'
import AppProvider from '../helpers/appContext'
import Header from '../components/header'
import ListView from '../components/listView'
import DetailsView from '../components/detailsView'
import ErrorPage from '../components/errorPage'

const RouterApp = () => {
  return (
    <Router>
      <CookiesProvider>
        <AppProvider>
          <Header />
          <Switch>
            <Route exact path={HOME}>
              <ListView />
            </Route>
            <Route path={`${DETAILS}/:id`}>
              <DetailsView />
            </Route>
            <Route path="*">
              <ErrorPage body={'No se ha podido encontrar la página...'} />
            </Route>
          </Switch>
        </AppProvider>
      </CookiesProvider>
    </Router>
  )
}

export default RouterApp
