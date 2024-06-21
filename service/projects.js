import {BASE_URL} from '../src/db/url'

async function getAllProject() {
    return fetch(`${BASE_URL}dbproject`)
        .then(response => response.json())
        .then(users => users);
}

// async function getUsersByIdApiRoutes(userId) {
//     return fetch(`http://localhost:3000/api/users/${userId}`)
//         .then(response => response.json())
//         .then(users => users);
// }

async function postProjectData (data) {
  console.log(data,data)
  return fetch(`${BASE_URL}projects`, {
    method: 'POST',
    body: data,
    // JSON.stringify(data),
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
}

export  {
    getAllProject,
    postProjectData
}