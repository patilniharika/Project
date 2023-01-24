import { Image, Offcanvas, OffcanvasBody, OffcanvasHeader } from "react-bootstrap";

import logo from "../img/logo.png";

import BookTableForm from "./BookTableForm";

export default function BookTable(props){ 
    return(
        <Offcanvas show={props.show} onHide={props.hide} placement='top' className="m-auto bg-[url('./img/cafe.png')] bg-cover bg-no-repeat h-75 " >
            <OffcanvasHeader closeButton className="mx-12">
                <Image src={logo} fluid className="h-24" />
            </OffcanvasHeader>
            <OffcanvasBody >
                <div className="text-center fw-bold text-7xl text-black">
                    Book A Table
                </div>
                <div className="text-center text-black text-lg">
                    Phone bookings: (+91) 1234567890. Closed Sunday night and Mondays. Lorem ipsum <br /> dolor sit amet, consectetuer adipiscing elit.
                </div>
                <BookTableForm />
            </OffcanvasBody>
        </Offcanvas>
    );
}