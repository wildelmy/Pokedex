import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../actions/actions'
import '../style/style.css'
import { useForm } from '../hooks/useForm.jsx'
import { loginGoogle } from '../actions/actions'

const Login = () => {
  

  const handleLoginGoogle = ()=>{
     dispatch(loginGoogle());
  }

  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    email: '',
    password: ''
  })
  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
    console.log(email, password);
  }

  return (
    <div>
      <h1 id="title">Bienvenido a mi pokedex</h1>
    <Form id="formulario" onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu correo electronico"
          name='email'
          value={email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name='password'
          value={password}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
      >
        Ingresar
      </Button>

      <Container className="auth__social-networks">
        <Container
          className="google-btn"
          onClick={handleLoginGoogle}

        >
          <Container className="google-icon-wrapper">
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
          </Container>
        </Container>
      </Container>
    </Form>
    </div>
  )
}
export default Login
