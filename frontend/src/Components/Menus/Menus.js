import Footer from '../Footer';
import MenuAdd from '../MenuAdd';
import Navigation from '../Navigation';
import ReservationContainer from '../ReservationContainer';

export default function Menus(props){
    return(
        <>
            <Navigation bg={props.bg} 
            info={true} 
            buttonShow={false} 
            heading={'PATISSERIES'}
            infoline={'DISCOVER OUR EXQUISITE MENU'} />

            <MenuAdd />
            <ReservationContainer />
            <Footer />
        </>
    );
}