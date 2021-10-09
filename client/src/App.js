import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './views/NotFound';
import SellUsYourGuitars from './views/SellUsYourGuitars';
import Shop from './views/Shop';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Shop />
                </Route>
                <Route path='/sell-us-your-guitars'>
                    <SellUsYourGuitars />
                </Route>
                <Route path='/item/:id'></Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
