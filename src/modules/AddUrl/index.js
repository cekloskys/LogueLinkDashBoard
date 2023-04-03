import { Form, Input, Button, Card, message, Select } from 'antd';
import { DataStore } from 'aws-amplify';
import { Links, Tutorials } from '../../models';
import { useNavigate } from "react-router-dom";

const AddUrl = () => {

    const navigate = useNavigate();

    const handleChange = (value) => {
        console.log(`${value}`);
    };

    const urlPatternValidation = (uri) => {
        const regex = new RegExp("((https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)");
        return regex.test(uri);
    };

    const onFinish = async ({ uri, title, urlType }) => {
        console.log(uri);
        console.log(urlPatternValidation(uri));
        if (!uri || !urlPatternValidation(uri)) {
            message.error('Valid url is required!');
            return;
        }
        if (!title) {
            message.error('Title required!');
            return;
        }
        if (!urlType) {
            message.error('Type required!');
            return;
        }

        if (urlType === 'Link') {
            const NewLink = await DataStore.save(
                new Links({
                    uri,
                    title,
                }));
            message.success('Link has been created!')
            navigate('/deleteurl');
        }
        if (urlType === 'Tutorial') {
            const NewLink = await DataStore.save(
                new Tutorials({
                    uri,
                    title,
                }));
            message.success('Tutorial has been created!')
            navigate('/tutorials');
        }
    }

    return (
        <Card title={'Create Link / Tutorial'} style={{ margin: 20 }}>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label={'Url'} required name='uri'>
                    <Input placeholder='Enter url Ex: https://www.hostinger.com' />
                </Form.Item>
                <Form.Item label={'Title'} required name='title'>
                    <Input placeholder='Enter A Title' />
                </Form.Item>
                <Form.Item label={'Type'} required name='urlType'>
                    <Select defaultValue="Select Type"
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'Link',
                                label: 'Link',
                            },
                            {
                                value: 'Tutorial',
                                label: 'Tutorial',
                            },
                        ]}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default AddUrl;