
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';

const App=()=> {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="edit/:id" element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
