import { useState, React, useContext } from "react";
import axios from "axios";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { SessionContext } from "./Context";

export default function SignupForm() {

    const {user, setUser} = useContext(SessionContext)

    const [name, setName] = useState("");
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const a = ['Sign Up', 'Login'];

    const [showLogin, setShowLogin] = useState(false);
    const [button1, setButton1] = useState(a[0]);
    const [button2, setButton2] = useState(a[1]);

    

    const handleLoginClick = () =>{
        setShowLogin(!showLogin);
        setPhone("");
        setPassword("");
        if(button1 === a[0]){
            setButton1(a[1]);
            setButton2(a[0]);
        }
        else{
            setButton1(a[0]);
            setButton2(a[1]);
        }

    }

    const postdata = () => {
        axios.post('http://127.0.0.1:8000/home/user', {
            name,
            phone,
            email,
            password
        })
        .then(function (response) {
            handleLoginClick();
            console.log(response);
            if (response.data === name ){
                setError(null);
            }
            else{
                setError(response.data);
            }
        })
        .catch(function (error) {
            setError(error.data);
            console.log(error.data);
        });
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        if(!showLogin){
           postdata();
        }

        else{
            try{
                const response1 = await axios.post('http://127.0.0.1:8000/home/login', {
                    phone,
                    password
                });
                
                if(!response1.data){
                    setPassword("");
                    setError("Wrong Password please re-enter it.")
                }
                else{
                    const user = response1.data[0];
                    const id = response1.data[1];
                    setUser(user);
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('userid', id);
                    window.location.href = '/';
                }
            } catch (err){
                console.log(err.data);
            }
        }
    };

    

    return (
        <Form className="mx-8 md:mx-20 xl:mx-48" onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Row>
                        <FormControl type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            className={`bg-transparent rounded-none border-transparent border-b-black my-4 ${showLogin? 'd-none' : ''}`} />
                    </Row>
                    <Row>
                        <FormControl type="tel"
                            placeholder="Enter Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} 
                            className="bg-transparent rounded-none border-transparent border-b-black my-4" />
                    </Row>
                    <Row>
                        <FormControl type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`bg-transparent rounded-none border-transparent border-b-black my-4 ${showLogin? 'd-none' : ''}`} />
                    </Row>
                    <Row>
                        <FormControl type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-transparent rounded-none border-transparent border-b-black my-4" />
                    </Row>
                    <Row>
                        <div>
                            {error && (
                                <div className="text-red-900 font-bold text-lg text-center">
                                    {error}
                                </div>
                            )}
                        </div>
                        <Button className="text-black mt-2 mx-auto w-32 bg-rose-300 border-transparent hover:border-transparent rounded-none fw-bold hover:bg-rose-300"
                         type="submit">
                            {button1}
                        </Button>
                    </Row>
                    <hr className="w-1/2 mx-auto mt-4 mb-2" style={{color: "black"}}></hr>
                    <Row className="flex justify-center">
                    or
                    <div href="" onClick= {handleLoginClick} 
                     className="mx-1 px-0 w-16 text-center text-black bg-transparent border-b-2 border-b-black hover:border-b-red-900 ">
                        {button2}
                    </div>
                    </Row>
                </Col>
            </Row>

        </Form>
    );
}