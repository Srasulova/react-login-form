import { useState } from "react";
import Image from "next/image";
import picture from "../picture.jpg";
import { useEffect } from "react";

// function Picture() {
//   return (
//     <div>
//       <Image src={picture} alt="picture" className="img-fluid rounded-start" />
//     </div>
//   );
// }

export default function Form() {
  // const [emailValue, setEmailValue] = useState("");
  // const [passwordlValue, setPasswordValue] = useState("");

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  function handleEmailInput(e: any) {
    setLogin({
      ...login,
      email: e.target.value,
    });
  }

  function handlePasswordInput(e: any) {
    setLogin({
      ...login,
      password: e.target.value,
    });
  }

  const credentials = {
    email: "rasulova_sabina@yahoo.com",
    password: "Aliya0305@",
  };

  function loginButton(e: any) {
    if (
      credentials.email === login.email &&
      credentials.password === login.password
    ) {
      setLogin({
        email: "",
        password: "",
      });
      window.location.href = "https://www.google.com/";
    } else return;
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
                <div className="mb-3 col-md-8 mx-auto">
                  <label className="form-label mb-2">Email address</label>
                  <input
                    value={login.email}
                    onChange={handleEmailInput}
                    type="email"
                    className="form-control mb-3"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="mb-3 col-md-8 mx-auto">
                  <label className="form-label mb-2">Password</label>
                  <input
                    value={login.password}
                    onChange={handlePasswordInput}
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="password"
                  />
                </div>
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
                    // disabled
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

// 1. empty the input area after the credentials were verified
// 2. disable login button before the credentials were added
// 3. enable the login button when both inputs are added
// 4. add typing state
// 5. add login succes message and state
// 6. add await function before redirecting to google page.
