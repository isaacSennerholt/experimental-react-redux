import React from 'react'
import ReactDom from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import store from './store'

import StartPageScene from './startPage/StartPageScene'

function render() {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={StartPageScene} />
        </Switch>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

if (module.hot) {
  module.hot.accept(() => render())
}

render()