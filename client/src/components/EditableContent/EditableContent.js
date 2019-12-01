import React, {Component} from "react";
import API from "../../utils/API";
import AuthService from "../AuthService";

class EditableContent extends Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthService();
    }
    state = {
        edit: false,
        inputData: ""
    }
    changeEditState = () => {
        this.setState({edit:true});
    }
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            inputData: event.target.value
        })
    }
    handleSubmit = () => {
        console.log(this.props.propertyName);
        console.log(this.state.inputData);
        console.log("Inside Handle Submit");
        console.log(this.props.restaurantObject);

        this.props.restaurantObject[this.props.propertyName] = this.state.inputData;

        API.saveEditableContent(this.Auth.getProfile().id, this.props.restaurantObject)
        // API.saveEditableContent(this.Auth.getProfile().id, {[this.props.propertyName]:this.state.inputData}) - Original code
        .then( data => {
            console.log(data);
            this.setState({
                edit:false
            });
            this.props.handleSubmit(this.props.propertyName, this.state.inputData);
            // this.props.handleSubmit({[this.props.propertyName]:this.state.inputData}); - Original Code
        })
        .catch(err => console.log(err));
    }
    render() {
        return (<div>
            {
                this.state.edit
                ?
                <div>
                    <input type="text" style={{backgroundColor: "black"}} onChange={this.handleChange}/>
                    <button style={{backgroundColor:"black"}} onClick={this.handleSubmit}>Save</button> 
                </div>
                :
                <div onClick={this.changeEditState}>
                {this.props.children}
                </div>
            }
        </div>)
    }
}   

export default EditableContent;