import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Add() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [number,setNumber]=useState("");

  const contacts=useSelector(state=>state);

  const dispatch=useDispatch();
  const history=useNavigate();

   const handleSubmit=(e)=>{
     e.preventDefault();

     const checkEmail=contacts.find(contact=> contact.email === email && email);

     const checkNumber=contacts.find(contact=> contact.number === parseInt(number) );

     if (!email || !number || !name){
       return toast.warning("please fill all fields")
     }
     if (checkEmail){
       return toast.error("This Email Already Exists!");
     }
     if (checkNumber){
      return toast.error("This Number Already Exists!");
    }
    const data={
      id:contacts[contacts.length -1].id +1,
      name,
      email,
      number,
    };

    dispatch({type: "ADD_CONTACT",payload:data})
    toast.success("User added successfully");
    history("/");

    //console.log(data)
   };
  return (
    <div>
        <div className='container'>
        <h1 className='display-3 text-center mt-5'>Add User</h1>
        <div className='row'>
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                     <input type="text" placeholder='Name' className='form-control' 
                     value={name} onChange={e=>setName(e.target.value)}/>
                  </div>
                  <div className='form-group'>
                     <input type="email" placeholder='Email' className='mt-2 form-control'
                     value={email} onChange={e=>setEmail(e.target.value)}/>
                  </div>
                  <div className='form-group'>
                     <input type="number" placeholder='Phone Number' className='mt-2 form-control'
                     value={number} onChange={e=>setNumber(e.target.value)}/>
                  </div>
                  <div className='form-group'>
                      <input type="submit" value="Add User" className='btn mt-2 btn-block btn-dark'/>

                  </div>
              </form>
            </div>

        </div>

    </div>
    </div>
  )
}
