
export default duckName => {

  function getResourceFromStore(store) {
    return store[duckName] || {}
  }

  function getItemById(store, id) {
    const items = getResourceFromStore(store)
    return items[id] || {}
  }

  function getLatestItemByCreationDate(store) {
    const items = getResourceFromStore(store)
    return Object.values(items).sort((itemA, itemB) => {
      return new Date(itemB.created_at) - new Date(itemA.created_at)
    })[0] || {}
  }


  const selectors = {
    getResourceFromStore,
    getItemById,
    getLatestItemByCreationDate
  }

  return {selectors}
}
