# Full-Stack Test

HTML page to test full stack skills.

## Installation

1. Download and extract the zip file. For example in **C:/**.

2. Open the **C:/FullStackTest/index.html** file in a browser.

    * If the browser console displays the error:
    
    **_"Access to script at 'file:///C:/FullStackTest/js/main.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted."_**, then:
      1. Close the Chrome browser.
      2. Excecute the following command to open and run the page in Chrome.
      ```bash
      ./chrome --allow-file-access-from-fileschrome --allow-file-access-from-fileschrome --allow-file-access-from-files file:///C:/FullStackTest/index.html
    ```

## JSONPlaceholder REST API

### API Relationships
**user**  -> **post** (contains **userId**) -> **comment** (contains **postId**)

**user**  -> **todo** (contains **userId**)

### Sample Payload Responses
#### User
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

#### Post
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

#### Comment
```json
{
  "postId": 1,
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "Eliseo@gardner.biz",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}
```

#### Todo
```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

## Usage

1. On submitting the form, the submission is prevented if no checkbox has been ticked and a warning message is presented to the user.

2. After submitting the form, If at least two checkboxes have been ticked, API calls are performed to https://jsonplaceholder.typicode.com/ and corresponding lists are displayed:

    * Separately (two, three or four lists), if they are not related by ID or more than 2 checkboxes are checked.
        * Example 1 (two separate lists): /comments and /todos.
            * List 1 (comments). Each list row should have: name, body.
            * List 2 (todos). Each list row should have: title, completed.
    
    * Combined (one list), if they are related by ID.
        * Example 2 (combined list): /posts and /users.
            * List (combined). Each list row should have: title, body, name.

3. Clicking on Clear button the form is reseted and lists are removed.
