import About from "../About";
import Footer from "../Footer";
import MenuCards from "../MenuCards";
import Navigation from "../Navigation";
import PictureCards from "../PictureCards";
import ReservationContainer from "../ReservationContainer";

export default function Home(props){
    return(
        <>
            <Navigation bg={props.bg} 
            info={true} 
            buttonShow={true} 
            heading={'A SWEET EXPERIENCE'}
            infoline={'THE FINEST PASTRIES. EXQUISITE SHAKES. GENUINE SERVICE.'} 
            show ={props.show} />
            <About />
            <PictureCards />
            <MenuCards containerC={"pt-20 px-16 bg-rose-100"} />
            <ReservationContainer />
            <Footer />
        </>
    );
}