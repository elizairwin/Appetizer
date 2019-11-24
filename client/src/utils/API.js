import axios from "axios"


export default {


    // Saves a book to the database
    registerUser: function (user) {

        return axios.post("api/users/register", user);
    },

    authenticateUser: function (user) {
 
        return axios.post("/api/users/authenticate", user);
    },

    getRestaurants: function (token){
        console.log(token)
        return axios.post("/api/restaurants", {token: token})
    }



}