import { Card, Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import dishes from '../../data/dashboard/dishes.json';

const ReservationDetails = () => {

    const { id } = useParams();

    return (
        <Card title={`Reservation Number ${id}`} style={{ margin: 20 }}>
            <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
                <Descriptions.Item label='Student Name / Email'>{dishes[0].studentName} /
                      {dishes[0].requesterChcEmail}</Descriptions.Item>
                <Descriptions.Item label='Date / Time'>{dishes[0].Date} / {dishes[0].time}</Descriptions.Item>
                <Descriptions.Item label='Room Name'>{dishes[0].roomName}</Descriptions.Item>
                <Descriptions.Item label='Room Number'>{dishes[0].roomNumber}</Descriptions.Item>
                <Descriptions.Item label='Number of participants'>{dishes[0].numberOfParticipants}</Descriptions.Item>
                <Descriptions.Item label='One or Two Block selection'>{dishes[0].blockSelection}</Descriptions.Item>
                <Descriptions.Item label='Course Number'>{dishes[0].courseNumber}</Descriptions.Item>
                <Descriptions.Item label='Teacher Name'>{dishes[0].teacherName}</Descriptions.Item>
            </Descriptions>
            
            
        </Card>
    );
};



export default ReservationDetails;