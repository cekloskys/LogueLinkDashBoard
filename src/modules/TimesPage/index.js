import { DataStore } from 'aws-amplify';
import { Times } from '../../models';
import { Link } from 'react-router-dom';
import { Card, Table, Button, Popconfirm, message } from 'antd';
import { useState, useEffect } from "react";


const TimesPage = () => {


    const [times, setTimes] = useState([]);
    const [displayTimes, setDisplayTimes] = useState([]);


    useEffect(() => {
        DataStore.query(Times).then(setTimes);
    }, []);

    useEffect(() => {
        if (!times) {
            return;
        }

        times.sort((a, b) => (a.time > b.time) ? 1 : -1)
        const dt = [];
        for (let i = 0; i < times.length; i++) {
            var hours = parseInt(times[i].time.substring(0, 2));
            var suffix = hours < 12 ? " AM" : " PM";
            hours = ((hours + 11) % 12 + 1);
            if ((hours === 8 || hours === 9 || hours >= 1) && hours <= 4) {
                hours = '0' + hours + ':00' + suffix;
            } else {
                hours = hours + ':00' + suffix;
            }
            var t = {};
            t.time = hours.toString();
            t.id=times[i].id
            dt.push(t);
            
        }
        
        setDisplayTimes(dt);
    }, [times]);


    const deleteTime = async (item) => {
        
        await DataStore.delete(Times, d => d.id.eq(item.id));
        setTimes(times.filter((d) => d.id !== item.id));
        message.success('Time has been deleted.');
    };

    const DeleteTimeTable = [
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) => (
                <div>
                    <Popconfirm
                        placement="topLeft"
                        title={'Are you sure you want to delete this time?'}
                        onConfirm={() => deleteTime(item)}
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
            <Link to={'addtime'}>
                <Button type='primary'>Add Time</Button>
            </Link>
        );
    };


    return (

        <Card title={'Times'} style={{ margin: 20 }} extra={renderNewItemButton()}>
            <Table
                dataSource={displayTimes}
                columns={DeleteTimeTable}
                rowKey='id' />
        </Card>
    );
}

export default TimesPage;