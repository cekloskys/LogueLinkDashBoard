import { Form, Input, Button, Card, message } from 'antd';
import { useState, useEffect } from "react";
import { Tutorials } from '../../models';
import { DataStore } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const { TextArea } = Input;

const UpdateTutorial = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [tutorials, setTutorials] = useState([]);
    const [title, setTitle] = useState([]);
    const [uri, setUri] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Tutorials, id).then(setTutorials);

    }, [id])
    console.log(tutorials)
    useEffect(() => {
        if (!Tutorials) {
            return;
        }
        setTitle(tutorials.title);
        setUri(tutorials.uri);

    }, [tutorials]);


    const updateTutorial = async () => {
        if (!uri) {
            message.error('Uri required!');
            return;
        }
        if (!title) {
            message.error('title required!');
            return;
        }

        const updatedTutorial = await DataStore.save(
            Tutorials.copyOf(tutorials, (updated) => {
                updated.uri = uri;
                updated.title = title;

            })
        )
        setTutorials(updatedTutorial);
        message.success("Tutorial has been updated!");
        navigate('/tutorials');
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
                        rows={2}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'
                        onClick={updateTutorial}
                    >Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default UpdateTutorial;