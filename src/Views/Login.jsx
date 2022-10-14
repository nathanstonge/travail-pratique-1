import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import CreationCompte from "./CreationCompte";

function Login(props) {
  const listUsers = props.listUsers;
  console.log(listUsers);

  const [accountCreation, setAccountCreation] = useState(false);
  const [connexionInfos, setInfos] = useState({
    userName: "",
    password: "",
  });

  function handleChange(event) {
   
    const { value, name } = event.target;
    setInfos((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleConnexion() {}

  function createNewAccount() {
    setAccountCreation(true);
  }

  return (
    <div>
    {!accountCreation ?
      (<div className="container" style={{ marginTop: "8%" }}>
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="card p-5">
            <div className="card-body">
              <div className="row mb-4">
                <img
                  src="https://hbr.org/resources/images/article_assets/2019/08/Aug19_25_518358614.jpg"
                  className="rounded-circle"
                  alt="Profile Picture"
                />
              </div>
              <div className="row mb-2">
                <input
                  name="userName"
                  onChange={handleChange}
                  value={connexionInfos.userName}
                  type="text"
                  placeholder="Nom d'utilisateur"
                />
              </div>
              <div className="row mb-4">
                <input
                  name="password"
                  onChange={handleChange}
                  value={connexionInfos.password}
                  type="password"
                  placeholder="Mot de passe"
                />
              </div>
              <div className="row mb-2">
                <button onClick={handleConnexion} className="btn btn-success">
                  Connexion
                </button>
              </div>
              <div className="row text-center">
                <button className="btn btn-link" onClick={createNewAccount}>
                  Créer un nouveau compte
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary"
        style={{ top: "50px", right: "50px", position: "absolute" }}
      >
        Connexion administrateur
      </button>
    </div>) : <CreationCompte/>}
    </div>
    
    
  );
}

export default Login;
