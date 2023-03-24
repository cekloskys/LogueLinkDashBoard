import { createContext, useState, useEffect, useContext } from 'react';
import { Auth, DataStore } from 'aws-amplify';
import { Reservations } from '../models';

const ReservationsContext = createContext({});

const ReservationsContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [reservations, setReservation] = useState();
    const sub = user?.attributes?.sub;

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(setUser);
    }, []);

    useEffect(() => {
        if (!sub) {
            return;
        }
    
        DataStore.query.then(
            (reservations) => setReservation(reservations[0]));
            
    }, [sub]);

    
return (
<ReservationsContextProvider value ={{ reservations, sub, setReservation }}>
    {children}
    </ReservationsContextProvider>
    );
};

export default ReservationsContext;

export const useReservationsContext = () => useContext(ReservationsContext);