import {mountReducer} from 'reducerRegistry.js'
import packageUser from 'package-user/package-user.js'
import packageComponentLibrary from 'package-component-library/package-component-library.js'
import config from 'config.js'

const {token} = localStorage.getItem('auth_session') || {}
const {services: {serviceUser0d7a}} = config

export const userPackage = packageUser('talea', {...serviceUser0d7a, token}, packageComponentLibrary, {mountReducer})
export const componentLibraryPackage = packageComponentLibrary