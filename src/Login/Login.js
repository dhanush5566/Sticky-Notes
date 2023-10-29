import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './Login.css';

function Login() {
    const [formValues, setFormValues] = useState({
		  email: '',
		  password: ''
	  });

    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    const formControlChangeHandler = (ev) =>{
		const {name, value} = ev.target;
		setFormValues({
			...formValues,
			[name]: value
		});
		console.log(formValues);
	}
  
  const loginFormHandler = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
      } else {
        navigate('/home', { replace: true });
      }

		  //ev.preventDefault();
	}


    return (
      <div className="login-box d-flex flex-column align-items-center justify-content-center">
      <h3>Login</h3>
        <Form className="border p-4" noValidate validated={validated} onSubmit={loginFormHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formValues.email} placeholder="Email" onChange={formControlChangeHandler} required />
              <Form.Control.Feedback type="invalid">
                Please enter a email
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={formValues.password} placeholder="Password" onChange={formControlChangeHandler} required />
              <Form.Control.Feedback type="invalid">
                Please enter a pssword
              </Form.Control.Feedback>
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
}

export default Login;
