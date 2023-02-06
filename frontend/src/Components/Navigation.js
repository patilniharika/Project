import { useContext, useState } from "react";
import { Button, Image, Navbar, NavbarBrand, Container, Row, Col } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import location from "../svg/location1.svg";
import phone from "../svg/phone.svg";
import mail from "../svg/mail1.svg";
import user1 from "../svg/user.svg";
import cart from "../svg/cart.svg";

import logo from "../img/logo.png";

import BookTable from "./BookTable";
import PageInfo from "./PageInfo";
import NavigationMenu from "./NavigationMenu";
import Login from "./Login";
import SessionContext from "./Context";
import User from "./User";

export default function Navigation(props) {

    let display = false;

    const user = useContext(SessionContext);

    if (user.user == null) {

       ;
    }
    else {
        display = true;
    }

    const [showBookTable, setShowBookTable] = useState(false);
    const handleBookTableClose = () => setShowBookTable(false);
    const handleShowBookTable = () => setShowBookTable(true);

    const [showNav, setShowNav] = useState(false);
    const handleNavClose = () => setShowNav(false);
    const handleShowNav = () => setShowNav(true);

    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClose = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const [showUser, setShowUser] = useState(false);
    const handleUserClose = () => setShowUser(false);
    const handleShowUser = () => setShowUser(true);

    return (
        <Container fluid className="bg-cover bg-no-repeat container1 g-0 position-relative"
            style={{ backgroundImage: `url(${props.bg})` }}>

            <Container fluid className="py-4 px-6 d-none d-xl-block">

                <Row>
                    <Col xs={7}>
                        <img src={location} className="h-5 d-inline mx-2" alt="" />
                        Silk St, Barbican, London EC2Y 8DS, UK
                    </Col>
                    <Col className="text-center">
                        <img src={phone} className="h-5 d-inline mx-2" alt="" />
                        (+91) 1234567890
                    </Col>
                    <Col className="text-center">
                        <img src={mail} className="h-5 d-inline mx-2" alt="" />
                        admin@example.com
                    </Col>
                </Row>

            </Container>

            <hr className="border-black" />

            <Navbar expand='xl' className="mx-4">

                <NavbarToggle aria-controls="navMenu" className="border-0" onClick={handleShowNav} />

                <NavbarBrand className="mr-auto">
                    <Image src={logo} fluid className="h-10 md:h-20" />
                </NavbarBrand>

                <NavigationMenu id="navMenu" show={showNav} hide={handleNavClose} />

                <div className="d-flex">

                    <Button onClick={handleShowLogin}
                        variant='white'
                        className={`rounded-none text-sm font-medium p-2 d-block ml-auto w-max
                        ${display ? 'd-none' : ''}`}
                        role="tooltip"
                        title="USER LOGIN / SIGNUP">

                        <img src={user1} alt="" />

                    </Button>

                    <Login show={showLogin} hide={handleLoginClose} />


                    <Button onClick={handleShowBookTable}
                        variant='white'
                        className="border-4 border-black rounded-none text-sm font-medium p-2 d-none d-md-block ml-auto w-max sm:mx-2" >

                        FIND A TABLE

                    </Button>

                    <BookTable show={showBookTable} hide={handleBookTableClose} className='mx-24' />

                    <Button onClick={handleShowUser}
                        variant='white'
                        className={`rounded-none text-sm font-medium p-2 d-block ml-auto w-max
                        ${display ? '' : 'd-none'}`}
                        role="tooltip"
                        title={user.user}>

                        <img src={user1} alt="" />

                    </Button>

                    <User show={showUser} hide={handleUserClose} />

                    <Button
                        variant='white'
                        className={`rounded-none text-sm font-medium ml-auto p-2 d-block w-max 
                        ${display ? '' : 'd-none'}`}
                        role="tooltip"
                        title="CART">

                        <img src={cart} alt="" />

                    </Button>

                </div>
            </Navbar>

            <PageInfo info={props.info}
                buttonShow={props.buttonShow}
                heading={props.heading}
                infoline={props.infoline} />

        </Container>
    );
}