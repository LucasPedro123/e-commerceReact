import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import {Store} from "./Pages/Store-component";
import {Error404} from './Pages/Error404-component';
import {CarrinhoContextoProvider} from "./Context/CarrinhoContexto";
import {Carrinho} from "./Pages/Carrinho-component";
import {ProductDetails} from "./Pages/ProductDetails-component"


export const Routes = ()=>{
    return (
        <>
            <Link to="/" >Store</Link>
            <Link to="/carrinho" >Carrinho</Link>

            <Switch>
                <CarrinhoContextoProvider>
                    <Route  exact={true} path='/' component={Store}/>
                    {/* 1) Adicionando categoria do produto na rota */}
                    <Route  path='/:category/:id' component={ProductDetails}/>
                    <Route  path='/carrinho' component={Carrinho}/>
                </CarrinhoContextoProvider>


                
            </Switch>
        </>

        
    )
}
