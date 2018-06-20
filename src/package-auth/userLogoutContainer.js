import React from 'react'

export default (UserLogoutService, {ButtonComponent}) => {

  function UserLogoutContainer() {

    function invalidateUser(userLogout, clearLocalStorage) {
      return () => {
        return userLogout()
          .then(() => clearLocalStorage())
      }
    }
  
    return (
      <div>
        <UserLogoutService render={({userLogout, clearLocalStorage}) => {
          return (
            <ButtonComponent onClick={invalidateUser(userLogout, clearLocalStorage)}>
              Logout
            </ButtonComponent>
          )
        }} />
      </div>
    )
    
  }
  
  return UserLogoutContainer

}