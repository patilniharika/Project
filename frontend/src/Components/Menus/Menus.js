import Footer from '../Footer';
import MenuItem from '../MenuItem';
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

            <MenuItem />
            <ReservationContainer />
            <Footer />
        </>
    );
}