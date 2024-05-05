import { useState } from 'react';
import './Form.css';



function Form(){
    const [formData,setFormData] = useState({
        name:'',
        lastname:'',
        phone:'',
        email:'',
        comment:''
    });
    const [submitted,setSubmitted] = useState(false);
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(formData);
        setSubmitted(true);
    }
    return <>
    <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <input  type='text'
        id='name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required />
        <input  type='text'
        id='lastname'
        name='lastname'
        value={formData.lastname}
        onChange={handleChange}
        required />
        <input  type='tel'
        id='phone'
        name='phone'
        value={formData.phone}
        onChange={handleChange} 
        required/>
        <input  type='email'
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required />
        <textarea id="comment" 
        name='comment'
        value={formData.comment}
        onChange={handleChange}
        required ></textarea>
        <button type='submit'>Submit</button>
    </form>
   {submitted && 'Göndərildi'}
    </>
}



export default Form