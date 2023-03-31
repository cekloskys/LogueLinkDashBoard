import { Link } from 'react-router-dom';
import { Card, Table, Button, Popconfirm, message } from 'antd';
import { useState, useEffect } from "react";
import { DataStore } from 'aws-amplify';
import { Links} from '../../models';

const DeleteUrl = () => {

    const [links, setLinks] = useState([]);

    useEffect(() => {
        DataStore.query(Links).then(setLinks);
    }, []);
    
    const deleteLink = async (item) => {
        await DataStore.delete(Links, d => d.id.eq(item.id));
        setLinks(links.filter((d) => d.id !== item.id));
        message.success('Link has been deleted.');
    };

    const DeleteLinkTable = [
        {
            title: 'Link Title',
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
            title: 'Actions',
            key: 'actions',
            render: (_, item) => (
                <div>
                    <Popconfirm
                        placement="topLeft"
                        title={'Are you sure you want to delete this Link?'}
                        onConfirm={() => deleteLink(item)}
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
            <Link to={'addurl'}>
                <Button type='primary'>Add Link</Button>
            </Link>
        );
    };

    return (
        <div>
            <Card title={'Links'} style={{ margin: 20 }} extra={renderNewItemButton()}>
                <Table
                    dataSource={links}
                    columns={DeleteLinkTable}
                    rowKey='id' />
            </Card>
        </div>
    );
};

export default DeleteUrl;

