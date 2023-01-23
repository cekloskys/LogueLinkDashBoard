import { Card, Table } from 'antd';
import reservations from '../../data/dashboard/reservations.json';
import { useNavigate } from 'react-router-dom';

const Reservations = () => {


    const navigate = useNavigate();


    const tableColumns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Reservation Date',
            dataIndex: 'reservationdate',
            key: 'reservationdate',
        },
        {
            title: 'Room',
            dataIndex: 'room',
            key: 'room',
            
        },
        
    ];

    return (
        <Card title='Reservations' style={{margin: 20}}>
            <Table 
                dataSource={reservations}
                columns={tableColumns}
                rowKey='id'
                onRow={(reservations) => ({
                    onClick: () => navigate(`reservations/${reservations.id}`)
                })}
            />
        </Card>
    );
};

export default Reservations;