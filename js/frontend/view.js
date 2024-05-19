/**
 * Function to display the collections elements in 1, 2, 3 or 4 column divs(lists).
 *
 * @param {*} collections Map with key=collection, value=array of collection elements.
 */
function displayCollections (collections) {
  let i = 1;
  for (const [collectionName, elements] of collections.entries()) {
    if (elements.length > 0) {
      const columnDiv = document.getElementById(`column${i++}`);
      columnDiv.innerHTML = `<h1>${collectionName}</h1>`;
      elements.forEach(element => {
        addElementToView(columnDiv, collectionName, element);
      });
    }
  }
}

/**
 * Function to add a div element data to the column div.
 *
 * @param {*} columnDiv Column div to contain the new div element.
 * @param {*} collectionName Name of the collection to determine the data format.
 * @param {*} element Data element to add to the HTML page.
 */
function addElementToView (columnDiv, collectionName, element) {
  let text = ''
  const elementDiv = document.createElement('div');
  elementDiv.setAttribute('class', 'element');
  elementDiv.setAttribute('id', collectionName);
  switch (collectionName) {
    case 'users':
      text = getUserText(element);
      break;
    case 'posts':
      text = getPostText(element);
      break;
    case 'comments':
      text = getCommentText(element);
      break;
    case 'todos':
      text = getTodoText(element);
      break;
    default:
      break;
  }
  elementDiv.innerHTML = text;
  columnDiv.appendChild(elementDiv);
}

/**
 * Function to return user information in HTML format.
 *
 * @param {*} user User data.
 * @return {*} User data in HTML format.
 */
function getUserText (user) {
  let text = `<div class='user'><hr><h2>${user.name}</h2><hr>`
  if (user.posts) {
    user.posts.forEach(post => {
      text += getPostText(post);
    });
  }
  if (user.todos) {
    user.todos.forEach(todo => {
      text += getTodoText(todo);
    });
  }
  return text + '</div>';
}

/**
 * Function to return todo information in HTML format.
 *
 * @param {*} todo Todo data.
 * @return {*} Todo data in HTML format.
 */
function getTodoText (todo) {
  return `<div class='todo'><input type="checkbox" class='checkbox' ${todo.completed ? 'checked' : ''} disabled />${todo.title}</div>`;
}

/**
 * Function to return post information in HTML format.
 *
 * @param {*} post Post data.
 * @return {*} Post data in HTML format.
 */
function getPostText (post) {
  let text = `<div class='post'><br><h2>${post.title}</h2>${post.body}`
  if (post.comments) {
    post.comments.forEach(comment => {
      text += getCommentText(comment);
    });
  }
  return text + '<hr></div>';
}

/**
 * Function to return comment information in HTML format.
 *
 * @param {*} comment Comment data.
 * @return {*} Comment data in HTML format.
 */
function getCommentText (comment) {
  const text = `<div class='comment'><br><h4>${comment.name}</h4>${comment.body}`
  return text + '</div>';
}

export default {
  displayCollections
};