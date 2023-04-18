import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import {Store} from "./Pages/Store"
import {Error404} from './Pages/Error404'

export const Routes = ()=>{
    return (
        <>
        <Link to="/" exact="true">Store</Link>

        <Switch>
            <Route exact path='/' component={Store}/>
            <Route component={Error404} />
        </Switch>

        </>

        
    )
}
