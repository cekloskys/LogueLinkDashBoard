import { Card, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { DataStore, Predicates , SortDirection} from 'aws-amplify';
import { Reservations } from '../../models';

const Reservation = () => {

    const [reservations, setReservations] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        DataStore.query(Reservations, Predicates.ALL, {
            sort: (d) => d.date(SortDirection.DESCENDING)
        }).then(setReservations);
    }, []);

    const tableColumns = [
        {
            title: 'Reservation Date',
            dataIndex: 'date',
            key: 'date',
            sorter:
            {
                compare: (a, b) => {
                    if (a.date > b.date) {
                        return -1;
                    }
                    if (a.date < b.date) {
                        return 1;
                    }
                    return 0;
                },
                multiple: 1,
            },
        },
        {
            title: 'Time',
            dataIndex: 'startTime',
            key: 'startTime',
        },
        {
            title: 'Name',
            dataIndex: 'studentName',
            key: 'studentName',
        },   
        {
            title: 'Room',
            dataIndex: 'room',
            key: 'room',

        },

    ];

    return (
        <Card title='Reservations' style={{ margin: 20 }}>
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

export default Reservation;