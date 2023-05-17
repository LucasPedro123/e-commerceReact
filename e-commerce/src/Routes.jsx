import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import {Store} from "./Pages/Product/Store-component";
import {Error404} from './Pages/Not-found/Error404-component';
import {CarrinhoContextoProvider} from "./Context/CarrinhoContexto";
import {Carrinho} from "./Pages/Cart/Carrinho-component";
import {ProductDetails} from "./Pages/Product/ProductDetails-component"


export const Routes = ()=>{
    return (
        <>
            
            <Switch>
                
                <CarrinhoContextoProvider>
                    <Route  exact={true} path='/' component={Store}/>
                    <Route  path='/:category/:id' component={ProductDetails}/>
                    <Route  path='/carrinho' component={Carrinho}/>
                </CarrinhoContextoProvider>

            </Switch>
        </>

        
    )
}
