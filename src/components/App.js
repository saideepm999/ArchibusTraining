import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
function App() {
  const Local_Storage_key="contacts"
  const [contacts,setContacts]=useState([])
  const addContactHandler=(contact)=>{
    console.log(contacts)
    setContacts([...contacts,contact])
  }
  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(Local_Storage_key))
    if (retrieveContacts) setContacts(retrieveContacts);
  },[]);
  useEffect(()=>{
    localStorage.setItem(Local_Storage_key,JSON.stringify(contacts))
  },[contacts])
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
