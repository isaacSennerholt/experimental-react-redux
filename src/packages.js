import fetchRequest from 'fetchRequest.js'
import {mountReducer} from 'reducerRegistry.js'
import clientConfig from 'clientConfig.js'
import instPackageUser from 'package-user/package-user.js'
import instPackageAuth from 'package-auth/package-auth.js'
import packageComponentLibrary from 'package-component-library/package-component-library.js'

const {services: {serviceUser0d7a}} = clientConfig

export const componentLibraryPackage = packageComponentLibrary

export const authPackage = instPackageAuth(
  'web-client',
  serviceUser0d7a,
  componentLibraryPackage,
  {requestModule: fetchRequest, mountReducer}
)

export const userPackage = instPackageUser(
  'web-client',
  serviceUser0d7a,
  componentLibraryPackage,
  authPackage,
  {requestModule: fetchRequest, mountReducer}
)