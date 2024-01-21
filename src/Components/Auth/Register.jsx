import React, { useState } from 'react'
import './RegisterStyle.css'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { SpinnerCircular } from 'spinners-react';

const Register = () => {
 const [showPassword, setShowPassword]= useState(false)

 const handleShowPassword =()=>{
    setShowPassword(!showPassword)
 }
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const[firstName, setFirstName] = useState("")
 const[lastName, setLastName] = useState('')
 const[email, setEmail] = useState('')
 const[phone, setPhoneNo] = useState('')
 const [error, setError] = useState({isError:false, type:'', message: ''})
 const [loading, setLoading] = useState(false)

 const handleSignUp = (e) =>{
   e.preventDefault()
   setLoading(true)
   if(firstName === ""){
       setError({isError:true, type:'firstName', message:'Enter name'})
       setLoading(false)
       console.log("First name");
   }else if (lastName === ""){
       setError({isError:true, type:'lastName', message:'Enter name'})
       setLoading(false)
       console.log("Second name");
   }else if (!email){
       setError({isError:true, type:'email', message:'Enter email'})
       setLoading(false)
   }else if (!email.includes('@')){
       setError({isError:true, type:'email@', message:'Email must contain @'})
       setLoading(false)
   }else if (!phone){
       setError({isError:true, type:'phone', message:'Enter phone'})
       setLoading(false)
   }else if (phone.length < 11){
       setError({isError:true, type:'phoneLength', message:'Phone no must be 11 digits'})
       setLoading(false)
   }
   else if (!password){
       setError({isError:true, type:'password', message:'Enter password'})
   } else if (confirmPassword !== password){
       setError({isError:true, type: "passwordMatch", message: "your password must match"})
   }
   else if (!confirmPassword){
       setError({isError:true, type:'confirmPassword', message:'Enter password again'})
   }else {
       setError({isError:false, type:'', message: ''})
       alert('Yayyy!!')
   }
 }



  return (
    <div className='RegisterBody'>
        <main className='Wrap'>
            <div className='CreateLog'>
                <button className='Create'>Create Account</button>
                <button className='Login'>Login</button>

            </div>
            <section className='WrapBody'>
                <div className='Body'>
                <h1>Hello there</h1>
                <p>Create an account to get started</p>
                <div className='FirstLast'>
                    <div className='First'>
                        <p>First Name</p>
                        {
                            error.isError && error.type === 'firstName'?  <p className='errorText'>input name</p> : null
                        }

                        <input type="text" placeholder='Input first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} className='firstInput'/>
                    </div>
                    <div className='Last'>
                    <p>Last Name</p>
                    {
                        error.isError && error.type === 'lastName'?  <p className='errorText'>{error.message}</p> : null
                    }

                        <input type="text" placeholder='Input last name'value={lastName} onChange={(e)=>setLastName(e.target.value)} className='lastInput'/>

                    </div>

                </div>
                <div className='BodyBelow'>
                    <label htmlFor="">Email Address</label>
                    {
                      error.isError && error.type === 'email'?  <p className='errorText'>{error.message}</p> : null
                    }
                    {
                      error.isError && error.type === 'email@'?  <p className='errorText'>{error.message}</p> : null
                    }



                    <input type="text" placeholder='Input Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='emailInput'/>


                </div>
                <div className='BodyBelow'>
                    <label htmlFor="">Phone Number</label>
                    {
                        error.isError && error.type === 'phone'?  <p className='errorText'>{error.message}</p> : null
                    }
                    {
                        error.isError && error.type === 'phoneLength'?  <p className='errorText'>{error.message}</p> : null
                    }


                    <input type="text" placeholder='Input Phone Number' value={phone} onChange={(e)=>setPhoneNo(e.target.value)} className='emailInput'/>


                </div>
                <div className='BodyBelow'>
                    <label htmlFor="">Password</label>
                     {
                        error.isError && error.type === 'password'?  <p className='errorText'>{error.message}</p> : null
                     }

                    <div className='myInput'>
                    <input type={showPassword? "text" : "password"} placeholder="Input Password" value={password} onChange={(e)=>setPassword(e.target.value)}className='passwordInput'/>
                    {
                        showPassword ?  (<FaEye onClick={handleShowPassword} className='FaEye'/>) :( <FaRegEyeSlash className='FaRegEyeSlash' onClick={handleShowPassword}/>) 
                    }
                    </div>
                    


                </div>
                <div className='BodyBelow'>
                    <label htmlFor="">Confirm Password</label>
                    {
                         error.isError && error.type === 'confirmPassword'?  <p className='errorText'>{error.message}</p> : null
                    }
                    {
                         error.isError && error.type === 'passwordMatch'?  <p className='errorText'>{error.message}</p> : null
                    }

                    <div className='myInput'>
                    <input type={showPassword? "text" : "password"} placeholder="Confirm Your Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='passwordInput'/>
                    {
                        showPassword ?  (<FaEye onClick={handleShowPassword} className='FaEye'/>) :( <FaRegEyeSlash className='FaRegEyeSlash' onClick={handleShowPassword}/>) 
                    }
                    </div>
                   


                </div>
                <button onClick={handleSignUp} className='SignUpBtn'>
                    {
                        loading ? <SpinnerCircular size={30} color='white'/>:"Sign Up"
                    }
                    </button>

                </div>
               

            </section>

        </main>
      
    </div>
  )
}

export default Register
