import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListView from './views/ListView';
import ItemView from './views/ItemView';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" > 
                    <ListView />
                </Route>
                <Route path="/item/:id">
                    <ItemView />
                </Route>
                <Route path="/" >
                    404: Page not found
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
