import React from 'react';
import { Card, Col, Form } from 'react-bootstrap';

const InventoryItemView = () => (
    <Col xs={ 12 } sm={ 6 } md={ 3 }>
        <Card>
            <Card.Header>
                <Card.Title>Card Title</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Card.Body>
        </Card>
    </Col>
);
export default InventoryItemView;
