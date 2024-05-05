import { useState } from 'react'
import './SignupForm.css'


function SignupForm(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const handleNameChange = (event) =>{
        setName(event.target.value);
    }
    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }

    return  <>
    <div className='form'>
        <h1>Sign up</h1>
    <label htmlFor="name">Name:
      <input
         id="name"
         name="name"
         value={name}
         onChange={handleNameChange}/>
    </label>
    <label htmlFor="email">Email:
    <input
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}/>
    </label>
    <label htmlFor="password">Password:
    <input
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}/>
    </label>
    </div>
    
    </>   
}


export default SignupForm