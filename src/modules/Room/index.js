import { Link } from 'react-router-dom';
import { Card, Table, Button, Popconfirm, message } from 'antd';
import { useState, useEffect } from "react";
import { DataStore } from 'aws-amplify';
import { Rooms } from '../../models';

const RoomsPage = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        DataStore.query(Rooms).then(setRooms);
    }, []);



    const deleteRoom = async (item) => {
        await DataStore.delete(Rooms, d => d.id.eq(item.id));
        setRooms(rooms.filter((d) => d.id !== item.id));
        message.success('Room has been deleted.');
    };



    const DeleteRoomTable = [
        {
            title: 'Room Name',
            dataIndex: 'room',
            key: 'room',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) => (
                <div>
                    <Popconfirm
                        placement="topLeft"
                        title={'Are you sure you want to delete this Room?'}
                        onConfirm={() => deleteRoom(item)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger type='primary' style={{ margin: 10 }}>Remove</Button>
                    </Popconfirm>
                    <Link to={`update/${item.id}`}>
                        <Button type='primary' style={{ margin: 10 }}>Update</Button>
                    </Link>
                </div>

            )
        }
    ];
    const renderNewItemButton = () => {
        return (
            <Link to={'addroom'}>
                <Button type='primary'>Add Room</Button>
            </Link>
        );
    };


    return (

        <Card title={'Rooms'} style={{ margin: 20 }} extra={renderNewItemButton()}>
            <Table
                dataSource={rooms}
                columns={DeleteRoomTable}
                rowKey='id' />
        </Card>
    );
};

export default RoomsPage;

