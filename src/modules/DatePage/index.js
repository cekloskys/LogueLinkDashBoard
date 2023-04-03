import { DataStore } from 'aws-amplify';
import { Dates } from '../../models';
import { Form, Button, Card, message } from 'antd';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DatePage = () => {
    
    const [cal, setCal] = useState(new Date());

    const onFinish = async () => {
        const dates = [];

        const start = new Date(cal[0].getTime());

        var dt;

        while (start <= cal[1]) {
            dt = new Date(start);
            dates.push((dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear());
            start.setDate(start.getDate() + 1);
        }

        console.log(dates);

        await Promise.all(
            dates.map((a) =>
                DataStore.save(
                    new Dates({
                        date: a,
                    })
                )
            )
        );

        message.success('Dates have been created!')
    }
    


    return (
        <Card title={'Create Date'} style={{ margin: 20 }}>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label={'Calendar'} required name='calendar'>
                    <Calendar onChange={setCal} value={cal} selectRange={true} />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Submit</Button>
                </Form.Item>
                
            </Form>
        </Card>
    );
}

export default DatePage;