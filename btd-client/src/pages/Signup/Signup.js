import React, { useState } from "react";
// import Login from "./Login";
import "../page.css";
import PWDRequisite from "../../components/PWDRequisite";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  // const [errorMessage, setError] = useState("");

  const navigate = useNavigate();

  var loggedUser = {    
    email,
    password,
    cpassword
  };

  //password strength
  const [pwdRequisite, setPWDRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

  const handleOnFocus = (e) => {
    setPWDRequisite(true);
  };

  const handleOnBlur = (e) => {
    setPWDRequisite(false);
  };

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 6;
  const specialCharCheck = /[!@#$%^&*.-_]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  const handleSignUp = async () => {
    console.log("signup");
 
      try {
        const response = await fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password,
            cpassword
          })
        });
        const data = await response.json();
          
        if (response.ok) {   
          // toast.success("Signup Successful!", {
          //   position: toast.POSITION.TOP_CENTER
          // });     
          navigate("/");
        } 
        else {
          toast.error("Signup Failed", {
            position: toast.POSITION.TOP_LEFT
          });
          // setError(data.error)
          throw new Error("Signup failed");
        }
      } catch (error) {
        console.error(error);
        // Handle the error
      }
    
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //   email: email,
    //   password: password,
    // });

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };

    // fetch("http://localhost:3001/api/register", requestOptions)
    //   .then((response) => {
    //     if (response.status === 201) {
    //       alert.success("Login Success");
    //     } else {
    //       alert.error("Invalid Email or Password");
    //     }
    //     return response.text();
    //   })
    //   .then((result) => console.log(result))
    //   .then(() => {
    //     navigation.push("/login");
    //   })

    //   .catch((error) => console.log("error", error));

    // setIsSignedUp(true);
  };
  return (
    <div className="container">
      <div className="text1">
        <div>
          <h1 className="title">SIGNUP</h1>
        </div>

        <form className="form-wrapper">
          <div className="name">
            
            <div className="email">
              <label className="label">EMAIL:</label>
              <input
                type="email"
                className="input"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="exampleInputEmail1"
                placeholder="email@email.com"
              ></input>
            </div>
            <div className="password">
              <label className="label">PASSWORD:</label>
              <input
                type="password"
                className="input"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onKeyUp={handleOnKeyUp}
                id="exampleInputPassword1"
                placeholder="password"
              ></input>
            </div>

            <div>
              {pwdRequisite ? (
                <PWDRequisite
                  capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                  numberFlag={checks.numberCheck ? "valid" : "invalid"}
                  pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                  specialCharFlag={
                    checks.specialCharCheck ? "valid" : "invalid"
                  }
                />
              ) : null}
            </div>

            <div className="password1">
              <label className="label">CONFIRM PASSWORD:</label>
              <input
                type="password"
                className="input"
                name="password"
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onKeyUp={handleOnKeyUp}
                id="exampleInputPassword1"
                placeholder="password"
              ></input>
            </div>

            {/* <div>
              {pwdRequisite ? (
                <PWDRequisite
                  capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                  numberFlag={checks.numberCheck ? "valid" : "invalid"}
                  pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                  specialCharFlag={
                    checks.specialCharCheck ? "valid" : "invalid"
                  }
                />
              ) : null}
            </div> */}
            <br></br>
            <br></br>

            <div>
              <button className="submit" type="button" onClick={handleSignUp}>
                SIGNUP
              </button>
            </div>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Signup;


// import React, { useState } from "react";

// import "../page.css";
// import PWDRequisite from "../../components/PWDRequisite";
// import { useNavigate } from "react-router-dom";
// import { textAlign } from "@mui/system";
// import { textFieldClasses } from "@mui/material";

// const Signup = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cpassword, setCPassword] = useState("");

//   // const navigation = useNavigate();
//   const navigate = useNavigate();
//   const [errorMessage, setError] = useState("");




//   var loggedUser = {
//     email,
//     password,
//     cpassword
//   };

//   //password strength
//   const [pwdRequisite, setPWDRequisite] = useState(false);
//   const [checks, setChecks] = useState({
//     capsLetterCheck: false,
//     numberCheck: false,
//     pwdLengthCheck: false,
//     specialCharCheck: false,
//   });

//   const handleOnFocus = (e) => {
//     setPWDRequisite(true);
//   };

//   const handleOnBlur = (e) => {
//     setPWDRequisite(false);
//   };

//   const handleOnKeyUp = (e) => {
//     const { value } = e.target;
//     const capsLetterCheck = /[A-Z]/.test(value);
//     const numberCheck = /[0-9]/.test(value);
//     const pwdLengthCheck = value.length >= 8;
//     const specialCharCheck = /[!@#$%^&*]/.test(value);
//     setChecks({
//       capsLetterCheck,
//       numberCheck,
//       pwdLengthCheck,
//       specialCharCheck,
//     });
//   };

//   const handleSignUp = async () => {

// console.log("signup");
 
//       try {
//         const response = await fetch("/register", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             email,
//             password,
//             cpassword
//           })
//         });
//         const data = await response.json();
          
//         if (response.ok) {
        
//           navigate("/");
//         } else {

//           setError(data.error)
//           throw new Error("Signup failed");
//         }
//       } catch (error) {
//         console.error(error);
//         // Handle the error
//       }
//     };




  
//   return (
//     <div className="container">
//       <div className="text1">
//         <div>
//           <h1 className="title">SIGNUP</h1>
//         </div>

//         <form className="form-wrapper">
//           <div className="name">
//             {/* <label className="label">USERNAME:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 id="exampleInputName"
//                 placeholder="name"
//               ></input> */}
//             <div className="email">
//               <label className="label">EMAIL:</label>
//               <input
//                 type="email"
//                 className="input"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 id="exampleInputEmail1"
//                 placeholder="email@email.com"
//               ></input>
//             </div>
//             <div className="password">
//               <label className="label">PASSWORD:</label>
//               <input
//                 type="password"
//                 className="input"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onFocus={handleOnFocus}
//                 onBlur={handleOnBlur}
//                 onKeyUp={handleOnKeyUp}
//                 id="exampleInputPassword1"
//                 placeholder="password"
//               ></input>
//             </div>

//             <div>
//               {pwdRequisite ? (
//                 <PWDRequisite
//                   capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
//                   numberFlag={checks.numberCheck ? "valid" : "invalid"}
//                   pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
//                   specialCharFlag={
//                     checks.specialCharCheck ? "valid" : "invalid"
//                   }
//                 />
//               ) : null}
//             </div>

//             <div className="password1">
//               <label className="label">CONFIRM PASSWORD:</label>
//               <input
//                 type="password"
//                 className="input"
//                 name="password"
//                 value={cpassword}
//                 onChange={(e) => setCPassword(e.target.value)}
//                 onFocus={handleOnFocus}
//                 onBlur={handleOnBlur}
//                 onKeyUp={handleOnKeyUp}
//                 id="exampleInputPassword1"
//                 placeholder="password"
//               ></input>
//             </div>

//             <div>
//               {pwdRequisite ? (
//                 <PWDRequisite
//                   capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
//                   numberFlag={checks.numberCheck ? "valid" : "invalid"}
//                   pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
//                   specialCharFlag={
//                     checks.specialCharCheck ? "valid" : "invalid"
//                   }
//                 />
//               ) : null}
//             </div>
//             <br></br>
//             <br></br>

//             <div>
//               <button className="submit" type="button" onClick={handleSignUp}>
//                 SIGNUP
//               </button>
//               <p style={{color: "red",
//     textAlign: "center",
//     textTransform: "uppercase"}}>{errorMessage}</p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from "react";

// import "../page.css";
// import PWDRequisite from "../../components/PWDRequisite";
// import { useNavigate } from "react-router-dom";
// import { textAlign } from "@mui/system";
// import { textFieldClasses } from "@mui/material";

// const Signup = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cpassword, setCPassword] = useState("");

//   // const navigation = useNavigate();
//   const navigate = useNavigate();
//   const [errorMessage, setError] = useState("");




//   var loggedUser = {
//     email,
//     password,
//     cpassword
//   };

//   //password strength
//   const [pwdRequisite, setPWDRequisite] = useState(false);
//   const [checks, setChecks] = useState({
//     capsLetterCheck: false,
//     numberCheck: false,
//     pwdLengthCheck: false,
//     specialCharCheck: false,
//   });

//   const handleOnFocus = (e) => {
//     setPWDRequisite(true);
//   };

//   const handleOnBlur = (e) => {
//     setPWDRequisite(false);
//   };

//   const handleOnKeyUp = (e) => {
//     const { value } = e.target;
//     const capsLetterCheck = /[A-Z]/.test(value);
//     const numberCheck = /[0-9]/.test(value);
//     const pwdLengthCheck = value.length >= 8;
//     const specialCharCheck = /[!@#$%^&*]/.test(value);
//     setChecks({
//       capsLetterCheck,
//       numberCheck,
//       pwdLengthCheck,
//       specialCharCheck,
//     });
//   };

//   const handleSignUp = async () => {

// console.log("signup");
 
//       try {
//         const response = await fetch("/register", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             email,
//             password,
//             cpassword
//           })
//         });
//         const data = await response.json();
          
//         if (response.ok) {
        
//           navigate("/");
//         } else {

//           setError(data.error)
//           throw new Error("Signup failed");
//         }
//       } catch (error) {
//         console.error(error);
//         // Handle the error
//       }
//     };




  
//   return (
//     <div className="container">
//       <div className="text1">
//         <div>
//           <h1 className="title">SIGNUP</h1>
//         </div>

//         <form className="form-wrapper">
//           <div className="name">
//             {/* <label className="label">USERNAME:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 id="exampleInputName"
//                 placeholder="name"
//               ></input> */}
//             <div className="email">
//               <label className="label">EMAIL:</label>
//               <input
//                 type="email"
//                 className="input"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 id="exampleInputEmail1"
//                 placeholder="email@email.com"
//               ></input>
//             </div>
//             <div className="password">
//               <label className="label">PASSWORD:</label>
//               <input
//                 type="password"
//                 className="input"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onFocus={handleOnFocus}
//                 onBlur={handleOnBlur}
//                 onKeyUp={handleOnKeyUp}
//                 id="exampleInputPassword1"
//                 placeholder="password"
//               ></input>
//             </div>

//             <div>
//               {pwdRequisite ? (
//                 <PWDRequisite
//                   capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
//                   numberFlag={checks.numberCheck ? "valid" : "invalid"}
//                   pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
//                   specialCharFlag={
//                     checks.specialCharCheck ? "valid" : "invalid"
//                   }
//                 />
//               ) : null}
//             </div>

//             <div className="password1">
//               <label className="label">CONFIRM PASSWORD:</label>
//               <input
//                 type="password"
//                 className="input"
//                 name="password"
//                 value={cpassword}
//                 onChange={(e) => setCPassword(e.target.value)}
//                 onFocus={handleOnFocus}
//                 onBlur={handleOnBlur}
//                 onKeyUp={handleOnKeyUp}
//                 id="exampleInputPassword1"
//                 placeholder="password"
//               ></input>
//             </div>

//             <div>
//               {pwdRequisite ? (
//                 <PWDRequisite
//                   capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
//                   numberFlag={checks.numberCheck ? "valid" : "invalid"}
//                   pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
//                   specialCharFlag={
//                     checks.specialCharCheck ? "valid" : "invalid"
//                   }
//                 />
//               ) : null}
//             </div>
//             <br></br>
//             <br></br>

//             <div>
//               <button className="submit" type="button" onClick={handleSignUp}>
//                 SIGNUP
//               </button>
//               <p style={{color: "red",
//     textAlign: "center",
//     textTransform: "uppercase"}}>{errorMessage}</p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

