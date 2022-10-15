import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import CreationCompte from "./routes/CreationCompte";
import Login from "./routes/Login";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/createaccount/" element={<CreationCompte/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App;
