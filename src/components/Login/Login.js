import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Login.module.css";
import Navbar from "../Navbar";

function Login() {
  // const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      // toast.error("Invalid Email OR password");
      setErrorMsg("Fill all fields");
      alert("Fill all fields");
      return;
    }
    setErrorMsg("");
    // toast.success("login successfully!");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        // navigate("https://github.com/Raushan-kumar88");
        window.open('https://github.com/Raushan-kumar88?tab=repositories');
        // window.open('https://github.com/Raushan-kumar88?tab=repositories', '_blank');

        // const user = res.user;
        // alert("login success fully");
        toast.success("login successfully!");

      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
      toast.error("Invalid Email OR password");
        setErrorMsg(err.message);
      });
  };
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          type="email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
    </>
  );
}

export default Login;
