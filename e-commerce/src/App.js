import React from "react";
import {Routes} from "./Routes";
// 2. Importando o Header.
import { Header } from "./components/header";
import "./Assets/global.scss"

function App() {
  return (
    <>
      <Header/>
      
      <Routes />
      

    </>
  );
}

export default App;
