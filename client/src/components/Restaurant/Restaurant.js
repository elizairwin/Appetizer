import React, { Component } from "react";
import API from "../../utils/API";
import decode from 'jwt-decode';

class Restaurants extends Component{
    
    state={
        restaurants: []
    }

    componentDidMount() {

        const token = localStorage.getItem('id_token');
        
        API.getRestaurants(token)
            .then(res => {
                this.setState({ restaurants: res.data })
                console.log(res)
                
            } )
            .catch(err => console.log(err))
            
    }



    render() {

        return (
        <ul>
            
        </ul> 
        )
    }

}

export default Restaurants;
