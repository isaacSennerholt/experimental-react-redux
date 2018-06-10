import React from 'react'
import ReactDom from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from 'store.js'
import AppComponent from 'AppComponent'

function render() {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <AppComponent />
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