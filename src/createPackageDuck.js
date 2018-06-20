import createCrudClient from 'create-crud-client'
import {createDuck, withSideEffects, extendDuck} from 'createCrudDuck.js'

export default (duckName, namespace = 'XXX', {requestModule, mountReducer, duckExtensions} = {}) => {

  let duck = createDuck(namespace, duckName)

  if (requestModule) {
    const instCrudClient = createCrudClient(requestModule)
    duck = withSideEffects(duck, instCrudClient())
  }

  if (Array.isArray(duckExtensions) && duckExtensions.length) {
    duck = duckExtensions.reduce((extendedDuck, duckExtension) => {
      const extensionObject = typeof duckExtension === 'function' ?
        duckExtension(duckName) :
        duckExtension

      return extendDuck(extendedDuck, extensionObject)
    }, duck)
  }

  if (mountReducer) {
    const {reducer} = duck
    mountReducer(duckName, reducer)
  }

  return {...duck}

}