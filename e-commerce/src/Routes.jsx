import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import {Store} from "./Pages/Store";
import {Error404} from './Pages/Error404';
import {CarrinhoContextoProvider} from "./Context/CarrinhoContexto";
import Carrinho from "./Pages/Carrinho";

export const Routes = ()=>{
    return (
        <>
        <Link to="/" exact="true">Store</Link>
        <Link to="/carrinho" exact="true">Carrinho</Link>


        <Switch>
            <CarrinhoContextoProvider>
                <Route exact path='/' component={Store}/>
                <Route exact path='/carrinho' component={Carrinho}/>
                <Route component={Error404} />
            </CarrinhoContextoProvider>
        </Switch>

        </>

        
    )
}
