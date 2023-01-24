import Footer from "../Footer";
import Navigation from "../Navigation";
import MenuCards from "../MenuCards";
import ReservationContainer from "../ReservationContainer";

export default function Contact(props){
    return(
        <>
            <Navigation bg={props.bg} 
            info={true} 
            buttonShow={false}
            heading={'CONTACT'} 
            infoline={'FIND THE RESTAURANT & GET IN TOUCH'} />

            <p className="text-center font-bold text-xl text-rose-500 mt-12 mb-4">
                DISCOVER OUR DESSERTS
            </p>

            <p className="text-center text-4xl font-bold md:text-7xl head">
                OUR MENUS
            </p>

            <MenuCards display={'d-none'} 
                containerC={"pt-0 px-16 bg-transparent"} />
            <ReservationContainer />
            <Footer />
        </>
    );
}