import { apiClient } from "./ApiClient"

// export default function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

// export const retrieveHelloWorldBean = 
//     () => apiClient.get('http://localhost:8080/hello-world-bean')

export const retrieveHelloWorldPath = 
(username, token) => apiClient.get(`/hello-world/path-variable/${username}`
// , {
//     headers: {
//         Authorization: token
//     }
// })
)