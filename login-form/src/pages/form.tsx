import { useState } from "react";
import Image from "next/image";
import picture from "../assets/picture.jpg";

export default function Form() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);

  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin({
      ...login,
      email: e.target.value,
    });
  }

  function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin({
      ...login,
      password: e.target.value,
    });
  }

  const credentials = {
    email: "rasulova_sabina@yahoo.com",
    password: "Aliya0305@",
  };

  // function loginButton(e: any) {
  //   if (
  //     credentials.email === login.email &&
  //     credentials.password === login.password
  //   ) {
  //     setLogin({ email: "", password: "" });
  //     window.location.href = "https://www.google.com/";
  //   } else {
  //     switch (true) {
  //       case login.email === "":
  //         setStatus("emailEmpty");
  //         break;
  //       case login.password === "":
  //         setStatus("passwordEmpty");
  //         break;
  //       case credentials.email !== login.email:
  //         setStatus("EmailError");
  //         break;
  //       case credentials.password !== login.password:
  //         setStatus("PasswordError");
  //         break;
  //       default:
  //         return;
  //     }
  //   }
  // }

  // function loginButton(e: any) {
  //   if (
  //     credentials.email === login.email &&
  //     credentials.password === login.password
  //   ) {
  //     setLogin({
  //       email: "",
  //       password: "",
  //     });
  //     window.location.href = "https://www.google.com/";
  //   } else if (login.email === "") {
  //     setStatus("emailEmpty");
  //   } else if (login.password === "") {
  //     setStatus("passwordEmpty");
  //   } else if (credentials.email !== login.email) {
  //     setStatus("EmailError");
  //   } else if (credentials.password !== login.password) {
  //     setStatus("PasswordError");
  //   } else return;
  // }

  function loginButton(e: any) {
    if (login.email !== "" && login.password !== "") {
      if (
        credentials.email === login.email &&
        credentials.password === login.password
      ) {
        setLogin({
          email: "",
          password: "",
        });
        setStatus("success");

        setTimeout(() => {
          window.location.href = "https://www.google.com/";
        }, 3000);
      } else {
        setStatus("error");
      }
    } else {
      setStatus("empty");
    }
  }

  return (
    <>
      <div className="">
        <div className="card mb-3" style={{ maxWidth: "960px" }}>
          <div className="row g-0">
            <div className="col-md-5">
              <Image
                src={picture}
                alt="picture"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-7 mt-5">
              <div className="card-body">
                <h5 className="card-title text-center my-5 fs-1 fw-bold text-secondary">
                  Log in to continue
                </h5>

                {status === "success" && (
                  <div className="success-blur  d-flex align-items-center">
                    <p className="success text-center fs-1  fw-bold mt-1 text-success mx-auto d-flex align-items-center justify-content-center">
                      Login is successful
                    </p>
                  </div>
                )}

                <div className="mb-3 col-md-8 mx-auto">
                  <label className="form-label mb-0">Email address</label>
                  <input
                    value={login.email}
                    onChange={handleEmailInput}
                    type="email"
                    className="form-control mb-3"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                {status === "empty" && (
                  <p
                    className="empty text-center fs-6 fst-italic fw-lighter mt-1"
                    style={{ color: "red" }}
                  >
                    Email/password cannot be empty
                  </p>
                )}

                {status === "error" && (
                  <p
                    className="error text-center fs-6 fst-italic fw-lighter mt-1"
                    style={{ color: "red" }}
                  >
                    Email/password combination is invalid
                  </p>
                )}
                <div className="mb-3 col-md-8 mx-auto">
                  <label className="form-label mb-0">Password</label>
                  <input
                    value={login.password}
                    onChange={handlePasswordInput}
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="password"
                  />
                </div>
                {/* {status === "passwordEmpty" && (
                  <p className="empty text-center fs-6 fst-italic fw-lighter mt-0">
                    Please type password
                  </p>
                )} */}
                {/* {status === "PasswordError" && (
                  <p className="error text-center fs-6 fst-italic fw-lighter mt-0">
                    Password is incorrect
                  </p>
                )} */}
                <p className="card-text text-center">
                  <small className="text-body-secondary ">
                    <a href="#">Reset password?</a>
                  </small>
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-secondary my-3 mx-auto text-center"
                    style={{ width: "250px" }}
                    onClick={loginButton}
                    // disabled={status === "empty" || status === "submitting"}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// 1. empty the input area after the credentials were verified - done
// 2. disable login button before the credentials were added - done
// 3. add login succes message and state - done
// 4. add await function before redirecting to google page. - done
