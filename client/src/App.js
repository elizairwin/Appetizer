import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/Register/Register'
import Authenticate from './components/Authenticate/Authenticate'
import Restaurants from './components/Restaurant/Restaurant'





function App() {
	return (
	  <Router>
		<div>
		  <Switch>
		  	<Route exact path="/" component={Register} />
			<Route exact path="/users/register" component={Register} />
			<Route exact path="/users/authenticate" component={Authenticate} />
			<Route exact path="/restaurants" component={Restaurants} />
		  </Switch>
		</div>
	  </Router>
	);
  }
  
  export default App;
