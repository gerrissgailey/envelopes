import axios from "axios"

export default {
    signUpUser: (email, password) => {
        axios.post("/api/users/", {email, password})
        .then(user => axios.post("/api/users/login", {email, password}))
        .catch(error => console.log(error))
    },
    login: (email, password) => {
        return axios.post("/api/users/login", {email, password})
    },
    createEnvelope: (envelopeName, user) => {
        axios.post("/api/envelopes/", {envelopeName, user})
    },
    getEnvelopes: (id) => {
        return axios.get("/api/envelopes/" + id )
    },
    getTransactions: (id) => {
        return axios.get("/api/transactions/" + id )
    }
}