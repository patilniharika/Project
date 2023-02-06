import { Offcanvas, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";

export default function User(props){

    return(
        <Offcanvas 
            show={props.show} 
            onHide={props.hide} 
            placement="end" 
            className="bg-rose-100" >
            <OffcanvasHeader closeButton className="bg-rose-300 justify-end" />
                <OffcanvasTitle className="bg-rose-300 p-4 text-2xl">
                <div className="font-bold">
                    HELLO,&nbsp;
                    {JSON.parse(localStorage.getItem('user'))}
                </div>
                <div className="">
                    YOUR ACCOUNT
                </div>
                </OffcanvasTitle>
                
        </Offcanvas>
        // <Offcanvas show={props.show} onHide={props.hide} placement="top" className="m-auto bg-[url('./img/dessert55.png')] bg-cover bg-no-repeat" >
        //     <OffcanvasHeader closeButton className="mx-12">
        //         <Image src={logo} fluid className="h-16" />
        //     </OffcanvasHeader>
        //     <OffcanvasBody className="pt-0">
        //         <div className="text-center fw-bold text-5xl md:text-7xl text-black">
        //             SIGNUP / LOGIN
        //         </div>
        //         <div className="text-center text-black text-lg">
                    
        //         </div>

        //         <SignupForm />

        //     </OffcanvasBody>
        // </Offcanvas>
    );
}