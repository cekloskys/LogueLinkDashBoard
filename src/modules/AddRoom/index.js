import { Form, Input, Button, Card, message} from 'antd';
import { DataStore } from 'aws-amplify';
import { Rooms } from '../../models';
import { useNavigate } from "react-router-dom";
const AddRoom = () => {
    const navigate = useNavigate();

    const onFinish = async ({ room }) => {
        if (!room) {
            message.error('Valid Room is required!');
            return;
        }
        const NewRoom = await DataStore.save(
            new Rooms({
                room,
            }));
        message.success('Room has been created!')
        navigate('/rooms');
    }

    return (
        <Card title={'Create Room'} style={{ margin: 20 }}>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label={'Room'} required name='room'>
                    <Input placeholder='Enter Room Name' />
                </Form.Item>


                <Form.Item>
                    <Button type='primary' htmlType='submit'>Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default AddRoom;