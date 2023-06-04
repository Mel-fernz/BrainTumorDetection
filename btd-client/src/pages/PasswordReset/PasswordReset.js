import React,{ useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './passwordReset.css';


const PasswordReset = () => {

  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");

  const setVal=(e)=>{
    setEmail(e.target.value)
  }

  const sendLink= async(e)=>{
    e.preventDefault();

    if(email===""){
      toast.error("Email is required!",{
        position:toast.POSITION.TOP_LEFT
      });
    }else if(!email.includes("@")){
      toast.error("Invalid email",{
        position:toast.POSITION.TOP_LEFT
      });
    }
    else{
    const res =await fetch("/sendpasswordlink",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email})
    });

    const data=await res.json();
    if (data.status === 201){
      setEmail("");
      setMessage(true);
    }
    else{
      toast.error("Invalid user",{
      position:toast.POSITION.TOP_LEFT
    })
    }
 }
}

  

  return (
    <>
    <section className='reset'>
      <div className='data'>

      <div className='form-heading'>
        <h1>Enter Your Email</h1>
        </div>

        {message?<p style={{color:"green"}}>password reset link sent successfully in your email</p>:""}

        <form className="form-wrapper">

          <div className='form-input'>
            <h1 className='email1'>Email</h1>
            <input className='mail' type="email" value={email} onChange={setVal} name='email' id='email' placeholder='enter email address' />
          </div>
          <button className='btn1' type='button' onClick={sendLink}>Send</button>
         
        </form>
        <ToastContainer/>

      </div>
    </section>
    </>
  )
}

export default PasswordReset