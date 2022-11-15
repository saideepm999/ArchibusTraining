import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link ,useNavigate,useParams} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function Edit() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [number,setNumber]=useState("");

  const {id}=useParams();

  const contacts=useSelector(state=>state);

  const dispatch= useDispatch();
  const history=useNavigate();
  const currentContact=contacts.find(contact=> contact.id === parseInt(id));
  
  useEffect(()=>{
    if (currentContact){
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
    

  }, [currentContact]);
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    const checkEmail=contacts.find(contact=> contact.id !== parseInt(id)  && contact.email===email);

    const checkNumber=contacts.find(contact=> contact.id !== parseInt(id)  && contact.number === parseInt(number) );

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
     id:parseInt(id),
     name,
     email,
     number,
   };

   dispatch({type: "UPDATE_CONTACT",payload:data})
   toast.success("User updated successfully");
   history("/");

   //console.log(data)
  };

 
  return (
    <div>
        <div className='container'>
          {currentContact? (
            <>
            <h1 className='display-3 text-center mt-5'>Edit User {id}</h1>
            <div className='row'>
                <div className="col-md-6 shadow mx-auto p-5">
                  <form onSubmit={handleSubmit} >
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
                      <div className='form-group '>
                         <input type="submit" value="Update" className='btn mt-2 btn-dark'/>
                        <Link to="/" className='btn btn-danger mt-2 ml-2'>Cancel</Link>
                      </div>
                    </form>
                </div>

            </div>
            </>
  

          ):(
            <h1 className='display-3 my-5 text-center'> Studentcontact with id: {id} not exists</h1>
          )}
       

    </div>
    </div>
  )
}
