import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./auth.css"
import { loginAPI, registerAPI } from '../../services/allAPI';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const navigate = useNavigate()
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

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })

    // registration
    const handleRegister = async (e) => {
        e.preventDefault()
        const { username, email, password } = userData
        // console.log(userData);

        if (!username || !email || !password) {
            toast.info('Pease fill the form completely')
        } else {
            const result = await registerAPI(userData)
            // console.log(result);
            if (result.status === 200) {
                toast.success(`${result.data.username} registed successfully`)
                setUserData({
                    username: "", email: "", password: ""
                })
                handleClose();
                handleshow2();
            } else {
                toast.error(result.response.data)
                console.log(result);
                setUserData({
                    username: "", email: "", password: ""
                })
            }
        }
    }

    // login
    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = userData
        // console.log(userData);

        if (!email || !password) {
            toast.info('Pease fill the form completely')
        } else {
            if (email == "admin@gmail.com") {
                const result = await loginAPI(userData)
                if (result.status === 200) {
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                   
                    setUserData({
                        email: "", password: ""
                    })

                    toast.success('Login Sucessful')

                    //navigate
                    setTimeout(() => {

                        navigate('/admin')
                        handleClose2()
                       
                    }, 2000);
                } else {
                    toast.error(result.response.data)
                    console.log(result);
                    setUserData({
                        email: "", password: ""
                    })
                }
            }
            else {
                const result = await loginAPI(userData)

                if (result.status === 200) {
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))

                    setUserData({
                        email: "", password: ""
                    })

                    toast.success('Login Sucessful')

                    //navigate
                    setTimeout(() => {

                        navigate('/')
                        handleClose2()
                        window.location.reload();
                    }, 2000);
                } else {
                    toast.error(result.response.data)
                    console.log(result);
                    setUserData({
                        email: "", password: ""
                    })
                }
            }
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleshow2}>
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

                </Modal.Header>

                <Modal.Body>
                    <div className=''>

                        <div className="card">
                            <div className="card_title">
                                <h3>Create Account</h3>
                                <span>Already have an account?  <Button variant="primary" onClick={handleshow2} center>
                                    Sign in
                                </Button></span>
                            </div>

                            <Form className='text-light w-100 mt-4'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Username" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter your Email Id" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="password" placeholder="Enter your password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                                </Form.Group>

                            </Form>

                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleRegister}>Create</Button>
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

                </Modal.Header>

                <Modal.Body>
                    <div >
                        <div className="card">
                            <div className="card_title">
                                <h3>Sign In</h3>
                                <span>Don't have an account? <Button onClick={handleshow1}>Sign up</Button></span>
                            </div>
                            <Form className='text-light w-100 mt-4'>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter your Email Id" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="password" placeholder="Enter your password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                                </Form.Group>

                            </Form>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleLogin}>Login</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' autoClose={2000} theme='colored' />
        </>
    )
}

export default Auth