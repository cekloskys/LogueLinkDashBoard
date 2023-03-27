import { Card, Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Reservations } from '../../models';

const ReservationDetails = () => {
    const [reservation, setReservation] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (!id){
            return
        }
        DataStore.query(Reservations, id).then(setReservation);
    }, [id]);

    return (
        <Card title={`Reservation Number ${id}`} style={{ margin: 20 }}>
            <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
                <Descriptions.Item label='Student Name / Email'>{reservation?.studentName} / {reservation?.studentEmai}</Descriptions.Item>
                <Descriptions.Item label='Date / Time'>{reservation?.date} / {reservation?.startTime}</Descriptions.Item>
                <Descriptions.Item label='Room Name'>{reservation?.room}</Descriptions.Item>
                <Descriptions.Item label='Number of participants'>{reservation?.nbrParticipants}</Descriptions.Item>
                <Descriptions.Item label='One or Two Hour Block'>{reservation?.hrBlock}</Descriptions.Item>
                <Descriptions.Item label='Course Number'>{reservation?.course}</Descriptions.Item>
                <Descriptions.Item label='Teacher Name'>{reservation?.teacher}</Descriptions.Item>
            </Descriptions>
            
            
        </Card>
    );
};



export default ReservationDetails;