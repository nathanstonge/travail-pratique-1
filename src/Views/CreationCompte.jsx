import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Login from "./Login";

function CreationCompte() {
  const accessCodeV = "2525";
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    username: "",
    password: "",
    accountType: "",
    adminCode: "",
  });
  const [loginPage, setLoginPage] = useState(false);

  function updateInfo(event) {
    const { value, name } = event.target;

    setUserInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function updateUsers() {
    setUsers((prevValue) => {
      return [...prevValue, userInfo];
    });

    setLoginPage(true);
  }
  function checkUser(event) {
    event.preventDefault();
    if (userInfo.accountType === "admin") {
      if (userInfo.adminCode === "") {
        alert("Entrez un code d'accès.");
      } else if (userInfo.adminCode !== accessCodeV) {
        alert("Code administrateur invalide.");
      } else if (userInfo.adminCode === accessCodeV) {
        updateUsers();
      }
    } else {
      updateUsers();
    }
  }

  return (
    <div>
      {!loginPage ? (
        <div className="container" style={{ marginTop: "8%" }}>
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="card">
                <div className="card-header text-end">
                  <i className="fa-solid fa-xmark fa-xl"></i>
                </div>
                <div className="card-body p-5 ">
                  <form onSubmit={checkUser}>
                    <div className="row mb-4">
                      <span>
                        <label>Nom: </label>
                        <input
                          onChange={updateInfo}
                          value={userInfo.lastName}
                          type="text"
                          name="lastName"
                          placeholder="Nom"
                          required
                        />
                      </span>
                    </div>
                    <div className="row mb-4">
                      <label>Prénom: </label>
                      <input
                        onChange={updateInfo}
                        value={userInfo.firstName}
                        type="text"
                        name="firstName"
                        placeholder="Prénom"
                        required
                      />
                    </div>
                    <div className="row mb-4">
                      <label>Date de naissance: </label>
                      <input
                        name="birthday"
                        type="date"
                        value={userInfo.birthday}
                        onChange={updateInfo}
                        required
                      />
                    </div>
                    <div className="row mb-4">
                      <label>Nom utilisateur: </label>
                      <input
                        onChange={updateInfo}
                        value={userInfo.username}
                        type="text"
                        name="username"
                        placeholder="Nom d'utilisateur"
                        required
                      />
                    </div>
                    <div className="row mb-4">
                      <label>Mot de passe: </label>
                      <input
                        onChange={updateInfo}
                        value={userInfo.password}
                        type="text"
                        name="password"
                        placeholder="Mot de passe"
                        required
                      />
                    </div>
                    <div className="row mb-4">
                      <label className="mb-2">Type de compte:</label>
                      <div className="col">
                        <input
                          onChange={updateInfo}
                          type="radio"
                          name="accountType"
                          id=""
                          value="client"
                          required
                        />
                        <label>Client</label>
                      </div>
                      <div className="col">
                        <input
                          onChange={updateInfo}
                          type="radio"
                          name="accountType"
                          id=""
                          value="admin"
                          required
                        />
                        <label className="mb-2">Adminstrateur</label>
                        <br />
                        <div
                          style={
                            userInfo.accountType === "admin"
                              ? { display: "block" }
                              : { display: "none" }
                          }
                        >
                          (<label>Code d'accès: </label>
                          <input
                            name="adminCode"
                            onChange={updateInfo}
                            value={userInfo.adminCode}
                            type="text"
                          />
                          )
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <button type="submit" className="btn btn-success">
                        Créer un compte
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login listUsers={users} />
      )}
    </div>
  );
}

export default CreationCompte;
