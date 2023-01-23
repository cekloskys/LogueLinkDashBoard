import { Form, Input, Button, Card, message } from 'antd';

const AddUrl = () => {

    const onFinish = ({Url, title, type}) => {
        if (!Url) {
            message.error('Url required!');
            return;
        }
        if (!title) {
            message.error('Title required!');
            return;
        }
        if (!type) {
            message.error('Type required!');
            return;
        }
        message.success('Url created!');
    }

    return (
        <Card title={'Add Reservation'} style={{margin: 20}}>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label={'Url'} required name='Url'>
                    <Input placeholder='Enter url Ex: https://www.hostinger.com' />
                </Form.Item>
                <Form.Item label={'Time'} required name='time'>
                    <Input placeholder='Select A Time' />
                </Form.Item>
                <Form.Item label={'Room'} required name='Room'>
                <   Input placeholder='Enter A Room Number' />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default AddUrl;