import { Link } from 'react-router-dom';
import { Card, Table, Button, Popconfirm, message } from 'antd';
import { useState, useEffect } from "react";
import { DataStore, Predicates , SortDirection} from 'aws-amplify';
import { Dates } from '../../models';

const DeleteDate = () => {

    const [dates, setDates] = useState([]);
    

    useEffect(() => {
        DataStore.query(Dates, Predicates.ALL, {
            sort: (d) => d.date(SortDirection.DESCENDING)
        }).then(setDates);
    }, []);


    const deleteDate = async (item) => {
        await DataStore.delete(Dates, d => d.id.eq(item.id));
        setDates(dates.filter((d) => d.id !== item.id));
        message.success('Date has been deleted.');
    };

    const DeleteDateTable = [
        {
            title: 'Dates',
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
            title: 'Actions',
            key: 'actions',
            render: (_, item) => (
                <div>
                    <Popconfirm
                        placement="topLeft"
                        title={'Are you sure you want to delete this date?'}
                        onConfirm={() => deleteDate(item)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger type='primary' style={{ margin: 10 }}>Remove</Button>
                    </Popconfirm>
                </div>

            )
        }
    ];

    const renderNewItemButton = () => {
        return (
            <Link to={'adddate'}>
                <Button type='primary'>Add Dates</Button>
            </Link>
        );
    };

    return (
        <div>
            <Card title={'Listed Dates'} style={{ margin: 20 }} extra={renderNewItemButton()}>
                <Table
                    dataSource={dates}
                    columns={DeleteDateTable}
                    rowKey='id' />
            </Card>
        </div>
    );
};

export default DeleteDate;

