import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link, BrowserRouter as Router} from 'react-router-dom'
import '../style/styleLogin.css'

const Login = () => {
  return (
    <Router>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu correo electronico" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Link to="/addmovie">
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
      </Link>
    </Form>
    </Router>
  )
}
export default Login
