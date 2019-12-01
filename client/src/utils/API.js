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
    },

    getRestaurant: function (username){
        return axios.get("api/users/restaurant/"+username);
    },

    saveEditableContent: function (userId,body) {
        console.log(userId, body);
        return axios.put("api/users/customizeRestaurant/"+userId,body);
    }

}