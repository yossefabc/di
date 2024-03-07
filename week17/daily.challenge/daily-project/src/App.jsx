import { useState } from 'react'
import Component from './components/Component';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    checkbox1: false,
    checkbox2: false,
  });

 
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams(formData);
    window.location.href = `http://localhost:3000/?${params.toString()}`;
  };
  return (
    <>
       <div>
      <h1>Form Data</h1>
      <Component formData={formData} handleChange={handleChange}  handleSubmit={handleSubmit}/>
     
    </div>
    </>
  )
}

export default App
