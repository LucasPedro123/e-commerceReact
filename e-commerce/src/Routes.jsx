import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import {Store} from "./Pages/Store";
import {Error404} from './Pages/Error404';
import {CarrinhoContextoProvider} from "./Context/CarrinhoContexto";
import Carrinho from "./Pages/Carrinho";
import ProductDetails from "./Pages/ProductDetails"

export const Routes = ()=>{
    return (
        <>
            <Link to="/" >Store</Link>
            <Link to="/carrinho" >Carrinho</Link>

            <Switch>
                <CarrinhoContextoProvider>
                    <Route  exact={true} path='/' component={Store}/>
                    <Route  exact={true} path='/carrinho' component={Carrinho}/>
                    <Route  exact={true} path='/:id' component={ProductDetails}/>
                    <Route  component={Error404} exact={true}  />
                </CarrinhoContextoProvider>
            </Switch>
        </>

        
    )
}
