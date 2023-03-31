import { Route, Routes } from 'react-router-dom';
import AddUrl from '../../modules/AddUrl';
import DeleteUrl from '../../modules/DeleteUrl';
import ReservationDetails from '../../modules/ReservationDetails';
import Reservations from '../../modules/Reservations';
import UpdateUrl from '../../modules/UpdateUrl';
import UpdateTutorial from '../../modules/UpdateTutorial';
import TutorialsPage from '../../modules/Tutorials';
import RoomsPage from '../../modules/Room';
import UpdateRoom from '../../modules/UpdateRoom';
import AddRoom from '../../modules/AddRoom';
import DatePage from '../../modules/DatePage';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Reservations />} />
            <Route path='reservations/:id' element={<ReservationDetails />} />
            <Route path='deleteurl/addurl' element={<AddUrl />} />
            <Route path='tutorials/addurl' element={<AddUrl />} />
            <Route path='deleteurl' element={<DeleteUrl />} />
            <Route path='deleteurl/update/:id' element={<UpdateUrl />} />
            <Route path='tutorials' element={<TutorialsPage />} />
            <Route path='tutorials/update/:id' element={<UpdateTutorial />} />
            <Route path='rooms' element={<RoomsPage/>} />
            <Route path='rooms/update/:id' element={<UpdateRoom />} />
            <Route path='rooms/addroom' element={<AddRoom />} />
            <Route path='dates' element={<DatePage/>} />
            
        </Routes>
    );
};

export default AppRoutes;