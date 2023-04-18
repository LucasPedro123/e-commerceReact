import {createContext} from "react";
const CarrinhoContexto = createContext()

export default function CarrinhoContextoProvider( { childre } ){
    return(
        <CarrinhoContexto>
            {childre}
        </CarrinhoContexto>
    )
}