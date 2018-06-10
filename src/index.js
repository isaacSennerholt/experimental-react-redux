import React from 'react'
import ReactDom from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch} from 'react-router-dom'
import store from 'store.js'
import appRouteComponents from 'appRouteComponents.js'

function render() {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {appRouteComponents}
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