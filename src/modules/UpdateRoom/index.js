import { Form, Input, Button, Card, message } from 'antd';
import { useState, useEffect } from "react";
import { Rooms } from '../../models';
import { DataStore } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const { TextArea } = Input;

const UpdateRoom = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Rooms, id).then(setRooms);

    }, [id])
    console.log(rooms)
    useEffect(() => {
        if (!Rooms) {
            return;
        }
        setRoom(rooms.room);


    }, [rooms]);


    const updateRoom = async () => {
        if (!room) {
            message.error('Room is required!');
            return;
        }

        const updatedRoom = await DataStore.save(
            Rooms.copyOf(rooms, (updated) => {
                updated.room = room;

            })
        )
        setRooms(updatedRoom);
        message.success("Room has been updated!");
        navigate('/rooms');
    };

    return (
        <Card title={'Update'} style={{ margin: 20 }}>
            <Form layout='vertical'>
                <Form.Item label={'Room'} required>
                    <TextArea
                        rows={1}
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'
                        onClick={updateRoom}
                    >Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default UpdateRoom;