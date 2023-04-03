import { Form, Input, Button, Card, message } from 'antd';
import { useState, useEffect } from "react";
import { Links } from '../../models';
import { DataStore } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const { TextArea } = Input;

const UpdateUrl = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [links, setLinks] = useState([]);
    const [title, setTitle] = useState([]);
    const [uri, setUri] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Links, id).then(setLinks);

    }, [id])
    useEffect(() => {
        if (!Links) {
            return;
        }
        setTitle(links.title);
        setUri(links.uri);

    }, [links]);


    const updateurl = async () => {
        if (!uri) {
            message.error('Uri required!');
            return;
        }
        if (!title) {
            message.error('title required!');
            return;
        }

        const updatedLink = await DataStore.save(
            Links.copyOf(links, (updated) => {
                updated.uri = uri;
                updated.title = title;

            })
        )
        setLinks(updatedLink);
        message.success("Link has been updated!");
        navigate('/deleteurl');
    };

    return (
        <Card title={'Update'} style={{ margin: 20 }}>
            <Form layout='vertical'>
                <Form.Item label={'Url'} required>
                    <Input
                        value={uri}
                        onChange={(e) => setUri(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={'Title'} required>
                    <TextArea
                        rows={1}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'
                        onClick={updateurl}
                    >Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default UpdateUrl;