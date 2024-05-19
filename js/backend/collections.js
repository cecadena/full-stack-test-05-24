/**
 * Function to return elements for each collection where the checkbox was checked.
 * Separately (two, three or four elements in the map), if they are not related by ID or more than 2 checkboxes are checked.
 * Combined (one list), if they are related by ID.
 *
 * @param {*} checkboxes
 * @return {*} Map with key=collection, value=array of collection elements.
 */
async function getData (checkboxes) {
  const collections = new Map();
  for (const checkbox of checkboxes) {
    const collection = checkbox.value;
    const result = await callJsonPlaceholderApi(collection);
    console.log(`${collection} results retrieved: ${result.length}`);
    collections.set(collection, result);
  }
  addChildrenElementsToParent(collections);
  console.log(collections);
  return collections;
}

/**
 * Function to call the JsonPlaceholder API to get the elements of one collection.
 *
 * @param {*} collection Collection to query.
 * @return {*} Array of category elements.
 */
async function callJsonPlaceholderApi (collection) {
    return await fetch(`https://jsonplaceholder.typicode.com/${collection}`).
    then(response => response.json())
    .catch(error => console.error(`Error calling API: ${error}`))
}

/**
 *  If only 2 collections were selected, this function adds children elements of one collection 
 * to the corresponding parent element determined by the id (userId or postId).
 *
 * @param {*} collections Map with key=collection, value=array of collection elements
 */
function addChildrenElementsToParent (collections) {
  if (collections.size <= 2) {
    addChildren(collections, 'posts', 'comments', 'postId');
    addChildren(collections, 'users', 'posts', 'userId');
    addChildren(collections, 'users', 'todos', 'userId');
    console.log(collections);
  } else {
    console.log('Skipping formatting due to more than 2 checkboxes selected.');
  }
}

/**
 * Function to move children elements from the origianl collection array to the corresponding parent element based on the parentId.
 * If there are children elements left without a parent element, they will stay in the original array.
 *
 * @param {*} collections Map with key=collection, value=array of collection elements.
 * @param {*} parentCollection Name of the parent collection.
 * @param {*} childCollection Name of the child collection.
 * @param {*} parentId Property representing the relationship in the children elements.
 */
function addChildren (collections, parentCollection, childCollection, parentId) {
  if (collections.has(childCollection)) {
    if (collections.has(parentCollection)) {
      const collectionByParentId = getCollectionByParentId(collections, childCollection, parentId);
      collections.get(parentCollection).forEach(parent => {
        parent[childCollection] = collectionByParentId.get(parent.id);
        collectionByParentId.delete(parent.id);
      });
      collections.set(childCollection, Array.from(collectionByParentId.keys()));
    }
  }
}

/**
 * Function to return elements ordered by parentId.
 *
 * @param {*} collections Map with key=collection, value=array of collection elements.
 * @param {*} childCollection Name of the child collection.
 * @param {*} parentId Property representing the relationship in the children elements.
 * @return {*} Map with key=parentId, value=array of collection elements with that parentId.
 */
function getCollectionByParentId (collections, childCollection, parentId) {
  return collections.get(childCollection).reduce((map, object) => {
    const id = object[parentId]
    if (!map.get(id)) {
      map.set(id, []);
    }
    map.get(id).push(object)
    return map
  }, new Map());
}

export default {
  getData
};