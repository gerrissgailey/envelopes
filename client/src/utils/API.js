import axios from "axios"

export default {
    signUpUser: (email, password) => {
        axios.post("/api/users/", {email, password})
        .then(user => axios.post("/api/users/login", {email, password}))
        .catch(error => console.log(error))
    },
    login: (email, password) => {
        axios.post("/api/users/login", {email, password})
    }
}