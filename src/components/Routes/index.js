import { Route, Routes } from 'react-router-dom';
import AddUrl from '../../modules/AddUrl';
import DeleteUrl from '../../modules/DeleteUrl';
import ReservationDetails from '../../modules/ReservationDetails';
import Reservations from '../../modules/Reservations';
import UpdateUrl from '../../modules/UpdateUrl';
import UpdateTutorial from '../../modules/UpdateTutorial';
import TutorialsPage from '../../modules/Tutorials';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Reservations />} />
            <Route path='reservations/:id' element={<ReservationDetails />} />
            <Route path='addurl' element={<AddUrl />} />
            <Route path='deleteurl' element={<DeleteUrl />} />
            <Route path='deleteurl/update/:id' element={<UpdateUrl />} />
            <Route path='tutorials' element={<TutorialsPage />} />
            <Route path='tutorials/update/:id' element={<UpdateTutorial />} />
        </Routes>
    );
};

export default AppRoutes;