import React, { Component } from "react";
import API from "../../utils/API";
import AuthService from '../AuthService';
import withAuth from '../withAuth';
import decode from 'jwt-decode';
const Auth = new AuthService();


class Restaurants extends Component{
    
    state={
        restaurants: [],
        userID: ""
    }

    componentDidMount() {

        const token = localStorage.getItem('id_token');
        const decoded = decode(token);
        console.log(decoded)
        this.setState({userID: decoded.id})
        API.getRestaurants(token)
            .then(res => {
                this.setState({ restaurants: res.data })
                console.log(res)
                
            } )
            .catch(err => console.log(err))
            
    }

    

    handleLogout(){
        Auth.logout()
        this.props.history.replace('/login');
     }



    render() {

        return(
            <div className="App">
                <div className="App-header">

                    <h2>Welcome {this.state.userID}</h2>
                </div>
                <p className="App-intro">
                    <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
                </p>
                </div>
        )
    }

}

export default withAuth(Restaurants);
