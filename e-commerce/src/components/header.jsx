import {Link} from 'react-router-dom'
// 1. Criando component Header. Este, ficará visívem em quaisquer campo que o usuário estiver.

export const Header = ()=>{
    return (
        <>
            <header>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" >Store</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/carrinho" >Carrinho</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}