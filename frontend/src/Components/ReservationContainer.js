import { Container, Row, Col, Button } from "react-bootstrap";

export default function ReservationContainer(){

    const handleClick = () =>{
        window.location.href = '/reservations';
    }

    return(
        <Container fluid className="py-16 bg-[url('./img/cafe.png')] bg-cover bg-no-repeat">
            <Row>
                <Row >
                    <Col className='text-center fs4 text-5xl my-2 head'>
                        MAKE A RESERVATION
                    </Col>
                </Row>
                <Row className="">
                    <Col className='text-center text-lg fw-bold my-2'>
                        <Button onClick={handleClick}
                        className="my-5 p-2 border-4 fw-bold border-black hover:border-black rounded-none bg-transparent text-black">
                            BOOK A TABLE NOW
                        </Button>
                        <br />
                        <p className= "fs2 text-lg">
                            THE FINEST PASTERIES. EXQUISITE SHAKES. GENUINE SERVICE.
                        </p>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}