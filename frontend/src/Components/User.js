import { useContext } from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import { SessionContext } from "./Context";

export default function User(props){

    const {user, setUser} = useContext(SessionContext);

    const click = () => {
        localStorage.clear();
        setUser(null);
        window.location.href  = '/';
    }

    return(

        <Offcanvas show={props.show} 
            onHide={props.hide} 
            placement="end" 
            className="bg-rose-100" >

            <OffcanvasHeader closeButton className="bg-rose-300 justify-end" />

            <OffcanvasTitle className="bg-rose-300 p-4 text-2xl">
                <div className="font-bold">
                    HELLO,&nbsp;
                    {user}
                </div>
                <div className="">
                    YOUR ACCOUNT
                </div>
            </OffcanvasTitle>

            <OffcanvasBody>
            <Button onClick={click}
                className="bg-rose-300 border-rose-300 rounded-none font-bold hover:bg-rose-400  hover:border-rose-300">
                LOGOUT
            </Button>
            </OffcanvasBody>
            
        </Offcanvas>
    );
}