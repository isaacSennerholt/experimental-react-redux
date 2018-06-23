import fetchRequest from 'fetchRequest.js'
import {mountReducer} from 'reducerRegistry.js'
import clientConfig from 'clientConfig.js'
import selectorExtensionUtilities from 'selectorExtensionUtilities.js'
import packageComponentLibrary from 'package-component-library/package-component-library.js'
import instPackageUser from 'package-user/package-user.js'
import instPackageAuthentication from 'package-authentication/package-authentication.js'

const {services: {serviceUser0d7a}} = clientConfig

export const componentLibraryPackage = packageComponentLibrary

export const authenticationPackage = instPackageAuthentication(
  'web-client',
  serviceUser0d7a,
  componentLibraryPackage,
  {
    requestModule: fetchRequest,
    mountReducer,
    duckExtensions: [selectorExtensionUtilities]
  }
)

export const userPackage = instPackageUser(
  'web-client',
  serviceUser0d7a,
  componentLibraryPackage,
  authenticationPackage,
  {requestModule: fetchRequest, mountReducer}
)
