import { useState } from "react";
import { Card, Row, ButtonGroup, Button } from "react-bootstrap";
import Login from "./Login";

export default function Item(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const data = localStorage.getItem('user') || null;

    const add = () => {
        if(data){
            ;
        }
        else{
            handleShow();
        }
    }
    

    return(
        <>
        <Card className="bg-transparent">
            <Card.Img src={props.image} className="p-8" />
            <Card.Body>
                <p className="head text-lg sm:text-3xl" >
                    Croissants
                </p>
            </Card.Body>
            <Card.Footer className="bg-transparent flex justify-center border-0">
                <ButtonGroup >
                    <Button onClick={add}
                        className="bg-rose-300 border-0">
                        +
                    </Button>

                    <Login show={show} hide={handleClose} />

                    <Button className="bg-rose-500 border-0">
                        ADD
                    </Button>
                    <Button className="bg-rose-300 border-0">
                        -
                    </Button>
                </ButtonGroup>
            </Card.Footer>
            <Row>
                
                {/* <Col md={5} className="">
                    <Image src={props.image} className="h-fit w-fit mx-8 my-8" fluid />
                </Col>
                <Col md={6} className="">
                    <p className="text-2xl head mx-8 my-8" >
                        Croissants
                    </p>
                </Col>
                <button className="my-4 mx-auto text-2xl w-32 font-bold text-black flex items-center justify-center bg-rose-500">
                    <svg className="font-bold" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v14M1 8h14"/></svg>
                   ADD
                </button> */}
            </Row>
        </Card>
        </>
    );
}