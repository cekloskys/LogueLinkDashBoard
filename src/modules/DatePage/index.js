import { DataStore } from 'aws-amplify';
import { Dates } from '../../models';
import { DatePicker, Form, Input, Button, Card, message } from 'antd';
import { useState } from 'react';

const { RangePicker } = DatePicker;

const DatePage = () => {
    const [dates, setDates] = useState(null);
    const [value, setValue] = useState(null);

    const onFinish = async ({ date }) => {
    console.log(dates[0])
    console.log(dates[1])
        message.success('Dates have been created!')
    }
    

    return (
        <Card title={'Create Date'} style={{ margin: 20 }}>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label={'Date'} required name='date'>
                    <RangePicker
                        value={dates || value}
                        onCalendarChange={(val) => setDates(val)}
                        onChange={(val) => setValue(val)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default DatePage;