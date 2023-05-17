import React from "react";
import {Routes} from "./Routes";
import {Link} from 'react-router-dom';


function App() {
  return (
    <>
      <header>

        <div>

          <nav className="nav">

            <ul>
              <Link className="nav-item"to="/" >Store</Link>
              <Link className="nav-item"to="/carrinho" >Carrinho</Link>
            </ul>

          </nav>

        </div>

      </header>

      <Routes />
    </>
  );
}

export default App;
