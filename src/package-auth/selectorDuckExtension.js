
export default duckName => {

  function getResourceFromStore(store) {
    return store[duckName] || {}
  }

  function getLatestItemByCreationDate(store) {
    const items = getResourceFromStore(store)
    return Object.values(items).sort((itemA, itemB) => {
      return new Date(itemB.created_at) - new Date(itemA.created_at)
    })[0] || {}
  }


  const selectors = {
    getResourceFromStore,
    getLatestItemByCreationDate
  }

  return {selectors}
}