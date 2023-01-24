import { useState } from "react";
import axios from "axios";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import Navigation from "./Navigation";

export default function LoginForm() {

    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const postData = () => {
        axios.post('http://127.0.0.1:8000/home/user', {
            name: name,
            phone: phone,
            email: email,
            password: password,
        })
            .then(function (response) {
                console.log(response);
                setShow(true);
                <Navigation show={show} />
                window.location.href = '/';
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    let handleSubmit = async (e) => {
        postData()
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit} className="mx-8 md:mx-20 xl:mx-48">
            <Row>
                <Col>
                    <Row>
                        <FormControl type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            className="bg-transparent rounded-none border-transparent border-b-black my-4" />
                    </Row>
                    <Row>
                        <FormControl type="text"
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
                            className="bg-transparent rounded-none border-transparent border-b-black my-4" />
                    </Row>
                    <Row>
                        <FormControl type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-transparent rounded-none border-transparent border-b-black my-4" />
                    </Row>
                    <Row>
                        <Button className="text-black mt-8 mx-auto w-32 bg-rose-300 border-transparent hover:border-transparent rounded-none fw-bold hover:bg-rose-300" type="submit">
                            SIGNUP
                        </Button>
                    </Row>
                    <hr className="w-1/2 mx-auto mt-4 mb-2" style={{color: "black"}}></hr>
                    <Row className="flex justify-center">
                    or
                    <button className="mx-0 px-0 w-12 bg-transparent">  Login</button>
                    </Row>
                </Col>
            </Row>
            {/* <Row className="my-8 mx-10 divide-x-2 divide-solid  divide-black">
                <Col className="px-4">
                    <Row>
                        <FormControl type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-transparent border-transparent border-b-black rounded-none" />
                    </Row>
                    <Row>
                        <FormControl as="select"
                            value={person}
                            onChange={(e) => setPerson(e.target.value)}
                            className="bg-transparent border-transparent text-black text-2xl font-medium border-b-black rounded-none">
                            {count_person}
                        </FormControl>
                    </Row>
                
                    <Row>
                        <FormControl type="text"
                            placeholder="Enter Phone"
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-transparent border-transparent border-b-black rounded-none" />
                    </Row>
                    <Row>
                        <Col>
                            <FormControl type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-transparent border-transparent text-black text-2xl font-medium border-b-black rounded-none" />
                        </Col>
                        <Col>
                            <FormControl type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="bg-transparent border-transparent text-black text-2xl font-medium border-b-black rounded-none" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Button className="text-black mx-auto w-32 bg-rose-300 border-transparent hover:border-white rounded-none fw-bold hover:bg-rose-300" type="submit">
                    Book Now
                </Button>
            </Row> */}
        </Form>
    );
}