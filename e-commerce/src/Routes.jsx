import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import {Store} from "./Pages/Store-component";
import {Error404} from './Pages/Error404-component';
import {CarrinhoContextoProvider} from "./Context/CarrinhoContexto";
import {Carrinho} from "./Pages/Carrinho-component";
import {ProductDetails} from "./Pages/ProductDetails-component"
import './Styles/index.css'


export const Routes = ()=>{
    return (
        <>
            <Link to="/" >Store</Link>
            <Link to="/carrinho" >Carrinho</Link>

            <Switch>
                <CarrinhoContextoProvider>
                    <Route  exact={true} path='/' component={Store}/>
                    <Route  exact={true} path='/:id' component={ProductDetails}/>
                    <Route  exact={true} path='/carrinho' component={Carrinho}/>
                </CarrinhoContextoProvider>


                
            </Switch>
        </>

        
    )
}
