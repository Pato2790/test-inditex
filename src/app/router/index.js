import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/header'
import ListView from '../components/listView'
import DetailsView from '../components/detailsView'
import ErrorPage from '../components/errorPage'

const RouterApp = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <ListView />
        </Route>
        <Route path="/details/:id">
          <DetailsView />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterApp
