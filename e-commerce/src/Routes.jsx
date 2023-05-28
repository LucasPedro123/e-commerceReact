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
                    {/* 3. Mudança no destino da rota. Isto porque, foi mudado a Api, ou seja, 
                        A rota deve se apresentar em consonância com a Api.
                    */}
                    <Route  path='/phone/:id' component={ProductDetails}/>
                    <Route  path='/carrinho' component={Carrinho}/>
                </CarrinhoContextoProvider>

            </Switch>
        </>

        
    )
}
