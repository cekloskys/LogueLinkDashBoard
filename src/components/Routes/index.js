import { Route, Routes } from 'react-router-dom';
import AddUrl from '../../modules/AddUrl';
import DeleteUrl from '../../modules/DeleteUrl';
import ReservationDetails from '../../modules/ReservationDetails';
import Reservations from '../../modules/Reservations';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Reservations />} />
            <Route path='reservation' element={<ReservationDetails />} />
            <Route path='addurl' element={<AddUrl />} />
            <Route path='deleteurl' element={<DeleteUrl />} />
        </Routes>
    );
};

export default AppRoutes;