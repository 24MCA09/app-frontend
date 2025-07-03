import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./auth.css"

function Auth() {
    const [show1, setshow1] = useState(false);
    const handleClose = () => setshow1(false);
    const handleshow1 = () => {
        setshow2(false);
        setshow1(true);

    }

    const [show2, setshow2] = useState(false);
    const handleClose2 = () => setshow2(false);
    const handleshow2 = () => {
        setshow2(true);
        setshow1(false);

    }





    return (
        <>
            <Button variant="primary" onClick={handleshow1} center>
                Sign in
            </Button>

            {/* modal */}
            <Modal
                show={show1}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign up</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="container">

                        <div class="card">
                            <div class="card_title">
                                <h1>Create Account</h1>
                                <span>Already have an account?  <Button variant="primary" onClick={handleshow2} center>
                                    Sign in
                                </Button></span>
                            </div>

                            <div class="form">
                                <form action="/register" method="post">
                                    <input type="text" name="username" id="username" placeholder="UserName" />
                                    <input type="email" name="email" placeholder="Email" id="email" />
                                    <input type="password" name="password" placeholder="Password" id="password" />
                                    <button>Sign Up</button>
                                </form>
                            </div>
                            <div class="card_terms">
                                <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="">Terms of Service</a></span>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Create</Button>
                </Modal.Footer>
            </Modal>



            <Modal
                show={show2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign in</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="container">
                        <div class="card">
                            <div class="card_title">
                                <h1>Sign in to your Account</h1>
                                <span>Don't have an account?<Button variant="primary" onClick={handleshow1} center>
                                    Create One
                                </Button></span>
                            </div>
                            <div class="form">
                                <form action="/register" method="post">
                                    <input type="email" name="email" placeholder="Email" id="email" />
                                    <input type="password" name="password" placeholder="Password" id="password" />
                                    <button>Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Cancel
                    </Button>
                    <Button variant="primary">Login</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Auth