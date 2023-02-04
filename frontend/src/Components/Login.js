import { Image, Offcanvas, OffcanvasBody, OffcanvasHeader } from "react-bootstrap";

import logo from "../img/logo.png";

import SignupForm from "./SignupForm";

export default function Login(props){

    return(
        <Offcanvas show={props.show} onHide={props.hide} placement="top" className="m-auto bg-[url('./img/dessert55.png')] bg-cover bg-no-repeat" >
            <OffcanvasHeader closeButton className="mx-12">
                <Image src={logo} fluid className="h-16" />
            </OffcanvasHeader>
            <OffcanvasBody className="pt-0">
                <div className="text-center fw-bold text-5xl md:text-7xl text-black">
                    SIGNUP / LOGIN
                </div>
                <div className="text-center text-black text-lg">
                    
                </div>

                <SignupForm />

            </OffcanvasBody>
        </Offcanvas>
    );
}