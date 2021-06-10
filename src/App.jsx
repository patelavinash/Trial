import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Contactus from './Contactuss';
import Home from './Home';
import Aboutus from './Aboutus';
//Fat arrow function
const App = () =>
{
    return(
                <>
                <Switch>
                        <Route exact path="/" component="Home"/>
                        <Route exact path="/Contact" component="Contactuss"/>
                        <Route exact path="/About" component="About" />
                        <Route component="Error"/>

                </Switch>
                
                
                
                </>
        );
};
export default App;