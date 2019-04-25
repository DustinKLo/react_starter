import React from 'react';
import { Route, Link, BrowserRouter as Router, Redirect } from 'react-router-dom'

/**
* import App component
*/

export default function Routes(props) {
  return (
    <Router>
      <div>
        <Route exact path='/tosca' component={App} />
      </div>
    </Router>
  );
}
