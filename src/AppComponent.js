import React from 'react'
import {Switch, Route} from 'react-router-dom'
import StartPage from 'StartPage'
import styles from 'app-component'

function AppComponent() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path='/' component={StartPage} />
      </Switch>
    </div>
  )
}

export default AppComponent