import { Link } from 'react-router-dom';
import { Card, Table, Button, Popconfirm, message } from 'antd';
import { useState, useEffect } from "react";
import { DataStore } from 'aws-amplify';
import { Tutorials } from '../../models';

const TutorialsPage = () => {

    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        DataStore.query(Tutorials).then(setTutorials);
    }, []);



    const deleteTutorial = async (item) => {
        await DataStore.delete(Tutorials, d => d.id.eq(item.id));
        setTutorials(tutorials.filter((d) => d.id !== item.id));
        message.success('Tutorial has been deleted.');
    };



    const DeleteTutorialTable = [
        {
            title: 'Tutorial Title',
            dataIndex: 'title',
            key: 'title',
            render: (_, item) => (
                <div>
                    <a href={item.uri} target='_blank' rel="noreferrer">
                        {item.title}
                    </a>
                </div>

            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) => (
                <div>
                    <Popconfirm
                        placement="topLeft"
                        title={'Are you sure you want to delete this tutorial?'}
                        onConfirm={() => deleteTutorial(item)}
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

    return (
        <div>
            <div>
                <Card title={'Tutorials'} style={{ margin: 20 }}>
                    <Table
                        dataSource={tutorials}
                        columns={DeleteTutorialTable}
                        rowKey='id' />
                </Card>
            </div>
        </div>
    );
};

export default TutorialsPage;

