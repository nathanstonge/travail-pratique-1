import React, { useState } from "react";
import InputCreateAccount from "../Components/InputCreateAccount";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CreationCompte(props) {
  const accessCodeV = "2525";
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
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
    navigate("/", {state: userInfo})
    // props.onNewAccountCreated(userInfo);
    // setLoginPage(true);
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
                  <Link to="/">
                  <i
                    // onClick={updateUsers}
                    className="fa-solid fa-xmark fa-xl"
                  ></i>
                  </Link>
                </div>
                <div className="card-body p-5 ">
                  <form onSubmit={checkUser}>
                    <InputCreateAccount
                      title="Nom"
                      method={updateInfo}
                      value={userInfo.lastName}
                      type="text"
                      name="lastName"
                      placeholder="Nom"
                      required
                    />

                    <InputCreateAccount
                      title="Prénom"
                      method={updateInfo}
                      value={userInfo.firstName}
                      type="text"
                      name="firstName"
                      placeholder="Prénom"
                      required
                    />

                    <InputCreateAccount
                      title="Date de naissance"
                      method={updateInfo}
                      value={userInfo.birthday}
                      type="date"
                      name="birthday"
                    />

                    <InputCreateAccount
                      title="Nom utilisateur"
                      method={updateInfo}
                      value={userInfo.username}
                      type="text"
                      name="username"
                      placeholder="Nom d'utilisateur"
                      required
                    />

                    <InputCreateAccount
                      title="Mot de passe"
                      method={updateInfo}
                      value={userInfo.password}
                      type="password"
                      name="password"
                      placeholder="Mot de passe"
                      required
                    />
                    <div className="row mb-4">
                      <label className="mb-2">Type de compte:</label>
                      <div className="col">
                        <input
                          onChange={updateInfo}
                          type="radio"
                          name="accountType"
                          id="client"
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
                          id="admin"
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
                          <label>Code d'accès: </label>
                          <input
                            name="adminCode"
                            onChange={updateInfo}
                            value={userInfo.adminCode}
                            type="text"
                          />
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
        <Login />
      )}
    </div>
  );
}

export default CreationCompte;
