import React from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const SignInPage = () => {
    return (
        <Container
            fluid
            className="d-flex align-items-center justify-content-center"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #1d2b64, #f8cdda)',
            }}
        >
            <Row>
                <Col md={8} lg={6} xl={5} className="mx-auto">
                    <Card className="shadow-lg border-0 rounded-lg">
                        <Card.Body>
                            <h3 className="text-center mb-4 text-primary">Welcome Back</h3>
                            <p className="text-center text-muted">
                                Sign in to continue to your account
                            </p>
                            <Form>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        className="p-3"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        className="p-3"
                                    />
                                </Form.Group>

                                <div className="d-grid">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="rounded-pill shadow-sm p-2"
                                    >
                                        Sign In
                                    </Button>
                                </div>
                            </Form>

                            <div className="text-center mt-3">
                                <a href="/forgot-password" className="text-muted">
                                    Forgot Password?
                                </a>
                            </div>

                            <hr className="my-4" />

                            <div className="text-center">
                                <p className="text-muted">
                                    Don't have an account?{' '}
                                    <a href="/signup" className="text-primary">
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SignInPage;
