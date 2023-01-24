import { useState } from "react";
import { Button, Image, Navbar, NavbarBrand, Container, Row, Col } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import location from "../svg/location1.svg";
import phone from "../svg/phone.svg";
import mail from "../svg/mail1.svg";
import user from "../svg/user.svg";
import cart from "../svg/cart.svg";

import logo from "../img/logo.png";

import BookTable from "./BookTable";
import PageInfo from "./PageInfo";
import NavigationMenu from "./NavigationMenu";
import Login from "./Login";

export default function Navigation(props){

    let display;
    
    if(typeof props.show === 'undefined'){
        display = false;
    }
    else{
        display = props.show;
    }
    console.log(display)
    // const msg = () => (display ? console.log('hello') : console.log('bye'));
    
    // useEffect(() => {msg();});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return(
        <Container fluid className="bg-cover bg-no-repeat container1 g-0 position-relative"
        style={{backgroundImage: `url(${props.bg})`}}>

            <Container fluid className="py-4 px-6 d-none d-xl-block">

                <Row>
                    <Col xs={7}>
                        <img src={location} className="h-5 d-inline mx-2" alt="" />
                        Silk St, Barbican, London EC2Y 8DS, UK
                    </Col>
                    <Col className="text-center">
                        <img src={phone} className="h-5 d-inline mx-2" alt=""/>
                        (+91) 1234567890
                    </Col>
                    <Col className="text-center">
                        <img src={mail} className="h-5 d-inline mx-2" alt=""/>
                        admin@example.com
                    </Col>
                </Row>

            </Container>

            <hr className="border-black"/>
            
            <Navbar expand='xl' className="mx-4">

                <NavbarBrand>
                    <Image src={logo} fluid className="h-12 md:h-20" />
                </NavbarBrand>

                <NavigationMenu id="navMenu" show={show1} hide={handleClose1} />
                    
                <Button onClick={handleShow2} 
                variant='white' 
                className="rounded-none text-sm font-medium p-2 d-block ml-auto w-max"  
                role="tooltip" 
                title="USER LOGIN / SIGNUP">
            
                    <img src={user} alt="" />
                
                </Button>

                <Login show={show2} hide={handleClose2} />

                <Button 
                variant='white' 
                className={`rounded-none text-sm font-medium p-2 d-block ml-auto w-max 
                ${display ? 'd-block' : 'd-none'}`}  
                role="tooltip" 
                title="CART">
            
                    <img src={cart} alt=""/>
                
                </Button>
                
                <Button onClick={handleShow} 
                variant='white' 
                className="border-4 border-black rounded-none text-sm font-medium p-2 d-none d-md-block ml-auto w-max sm:mx-2" >
                    
                    FIND A TABLE
                
                </Button>

                <BookTable show={show} hide={handleClose} className='mx-24'/>

                <NavbarToggle aria-controls="navMenu" className="border-0" onClick={handleShow1} />
            </Navbar>

            <PageInfo info={props.info} 
            buttonShow={props.buttonShow} 
            heading={props.heading}
            infoline={props.infoline} />
            
        </Container>
    );
}