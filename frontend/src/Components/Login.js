import { Image, Offcanvas, OffcanvasBody, OffcanvasHeader } from "react-bootstrap";

import logo from "../img/logo.png";

import LoginForm from "./LoginForm";

export default function Login(props){ 
    return(
        <Offcanvas show={props.show} onHide={props.hide} placement="top" className="m-auto bg-[url('./img/dessert55.png')] bg-cover bg-no-repeat" >
            <OffcanvasHeader closeButton className="mx-12">
                <Image src={logo} fluid className="h-24" />
            </OffcanvasHeader>
            <OffcanvasBody className="">
                <div className="text-center fw-bold text-7xl text-black">
                    SIGNUP
                </div>
                <div className="text-center text-black text-lg">
                    
                </div>

                <LoginForm />
            </OffcanvasBody>
        </Offcanvas>
    );
}