import React from 'react'
import {Form, Button} from 'react-bootstrap'
import '../style/style.css'
import {useForm} from '../hooks/useForm.jsx'

const Login = () => {

  const [values, handleInputChange, reset ]= useForm({
    email: '',
    password: ''
  })
  const {email, password}= values;

  const handleLogin= (e)=>{
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <Form id="formulario">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control
         type="email" 
         placeholder="Ingresa tu correo electronico"
         name='email'
         value= {email}
         onChange= {handleInputChange}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
        type="password"
        placeholder="Contraseña"
        name='password'
        value={password}
        onChange= {handleInputChange}
        />
      </Form.Group>
      
      <Button
      variant="primary"
      type="submit"
      >
        Ingresar
      </Button>
   
    </Form>
  )
}
export default Login
