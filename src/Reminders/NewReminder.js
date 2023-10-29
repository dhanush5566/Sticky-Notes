import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./NewReminder.css";

function NewReminder() {

    const [formValues, setFormValues] = useState({
        title: '',
        details: '',
        dueDate: '',
        priority: 'High'
    })
    const navigate = useNavigate();


    const handleChangeFormControl = (ev) => {
        ev.preventDefault();
        const { name, value } = ev.target;
        console.log(name);
        console.log(value);
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(formValues);
        saveReminder();


    }

    const saveReminder = () => {
        const req = {
            ...formValues,
            "createdDate": null
        }
        axios.post('http://localhost:8181/api/reminder/save',
            {
                id: "",
                title: req.title,
                details: req.details,
                dueDate: req.dueDate,
                priority: req.priority,
                createdDate: ""
            })
        .then((res) => {
            console.log(res);
            navigate('/', { replace: true });
           })
    
          // Catch errors if any
          .catch((err) => {
            console.log(err);
           })
}

return (
    <>
        <div className='d-flex justify-content-center mt-4'>
            <Card border="light" style={{ width: '18rem' }}>
                <Card.Header><h5>New Reminder</h5></Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Form.Label column lg={2} className='fw-bold'>
                                Title
                            </Form.Label>
                            <Col>
                                <Form.Control type="text" onChange={handleChangeFormControl} name="title" placeholder="Title" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Form.Label column lg={2} className='fw-bold'>
                                Details
                            </Form.Label>
                            <Col>
                                <Form.Control type="text" onChange={handleChangeFormControl} name="details" placeholder="Details" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Form.Label column lg={2} className='fw-bold'>
                                Due Date
                            </Form.Label>
                            <Col>
                                <Form.Control type="date" onChange={handleChangeFormControl} name="dueDate" placeholder="yyyy-mm-dd" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Form.Label column lg={2} className='fw-bold'>Priority</Form.Label>
                            <Col>
                                <Form.Select name="priority" defaultValue="High" onChange={handleChangeFormControl}>
                                    <option value='High'>High</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Low'>Low</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="primary" type="submit">Save Reminder</Button>
                            <Button variant="secondary" type="submit">
                                <Link to='/'>Cancel</Link>
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    </>
)
}

export default NewReminder;