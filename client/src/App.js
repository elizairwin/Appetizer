import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Register from './components/Register/Register'
import Authenticate from './components/Authenticate/Authenticate'
import Restaurants from './components/Restaurant/Restaurant'


function App() {
	return (
	  <Router>
		<div>
		  <Switch>
		  	<Route exact path="/" component={withRouter(Restaurants)} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/login" component={withRouter(Authenticate)} />
			<Route exact path="/restaurants" component={Restaurants} />
		  </Switch>
		</div>
	  </Router>
	);
  }
  
  export default App;
