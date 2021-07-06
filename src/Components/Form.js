import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState({name: "", email: "", role: ""})


const changeHandler = event => {
    setMember({...member, [event.target.name]: event.target.value})
}

const submitForm = event => {
    event.preventDefault();
    const newMember = {
        ...member,
        id: Date.now()
    }
    props.addNewMember(newMember);
    setMember({name: "", email: "", role: ""})
}

return (
    <form onSubmit={submitForm}>
        
        <h1>Add A Member</h1>
    
    {/* name label */}
        <label htmlFor="name">
            Name: {""}
        </label>
        <input type="text" name="name" onChange={changeHandler} value={member.name}/>
    
    {/* email label */}
        <label htmlFor="email">
            Email: {""}
        </label>
        <input type="text" name="email" onChange={changeHandler} value={member.email}/>   
    
    {/* role label */}
        <label htmlFor="role">
            Role: {""}
        </label>
        <input type="text" name="role" onChange={changeHandler} value={member.role}/> 
    <br></br>
    <button type="submit">Add Member</button>
    </form>
    )
}
export default Form;