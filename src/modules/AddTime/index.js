import { Form, Input, Button, Card, message, TimePicker } from 'antd';
import { DataStore } from 'aws-amplify';
import { Times } from '../../models';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import moment from 'moment';
const format = 'hh A';

const AddTime = () => {
    const navigate = useNavigate();
    const [time, setTime] = useState("12 AM");

    const onTimeChange = (time, timeString) => {
        setTime(timeString.toString());
    }

    const onFinish = async ({ time }) => {
        if (!time) {
            message.error('Valid time is required!');
            return;
        }
       // console.log(time.$d)
        
        console.log(moment(time.$d).format(moment.HTML5_FMT.TIME_MS))
       // console.log(moment(time.$d,["hh:mm:ss.SSS", moment.ISO_8601]))
        await DataStore.save(
            new Times({
                time:moment(time.$d).format(moment.HTML5_FMT.TIME),
            }));
        message.success('Time has been created!')
        navigate('/times');
    }

    return (
        <Card title={'Create Time '} style={{ margin: 20 }}>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label={'Time'} required name='time'>
                    <TimePicker
                        onChange={onTimeChange}
                        defaultValue={dayjs('12 AM', format)}
                        value={dayjs(time, format)}
                        format={format}
                        use12Hours={true}
                    />
                </Form.Item>


                <Form.Item>
                    <Button type='primary' htmlType='submit'>Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default AddTime;