import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AuthenticationPage} from './pages/index';

function App() {

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="*" component={AuthenticationPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
