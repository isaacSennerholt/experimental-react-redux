import React from 'react'

export default function(AuthenticationService, {ButtonComponent}) {

  function UserLogoutButtonContainer() {

    function invalidateAuthSession(
      updateAuthenticationSession,
      clearLocalStorage
    ) {
      return () => {
        return updateAuthenticationSession({active: false})
          .then(() => clearLocalStorage())
      }
    }

    return (
      <div>
        <AuthenticationService render={({
          updateAuthenticationSession,
          clearLocalStorage
        }) => {
          return (
            <ButtonComponent onClick={invalidateAuthSession(
              updateAuthenticationSession,
              clearLocalStorage
            )}>
              Logout
            </ButtonComponent>
          )
        }} />
      </div>
    )

  }

  return UserLogoutButtonContainer

}
