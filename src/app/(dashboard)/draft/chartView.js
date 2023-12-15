import {useEffect, useState} from "react"
import {Button, Card, Checkbox, DatePicker, Divider, Flex, Space, Typography} from "antd"
import {Line} from "@ant-design/charts"
import dayjs from "dayjs";

import locale from 'antd/es/date-picker/locale/zh_CN';
import 'dayjs/locale/zh-cn';
// 设置 : https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/%E8%AE%BE%E7%BD%AE.json
const group1 = [
    {
        name: 'zs',
        // url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/remote_data/sheet001.json',
        url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/remote_data/all.json',
        include: ['温度', '设置']
    }
];

export function ChartView() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            gap: 8,
            height: 'calc(100vh - 58px)',
            overflowY: 'auto',
            padding: '0.5em'
        }}>
            <SectionCard title="环境信息" group={group1}/>
        </div>
    )
}

const dateFormat = 'YYYY/MM/DD';
function SectionCard({title, group}) {
    const [value, setValue] = useState([dayjs('2023/01/01', dateFormat), dayjs('2023/12/30', dateFormat)]);
    const initChecked = group.map(i => i.url);
    const [checkedVal, setCheckedVal] = useState(initChecked)

    const options = group.map((i) => ({label: i.name, value: i.url}))


    const onChange = (checkedValues) => {
        setCheckedVal(checkedValues)
    }

    const range = {
        start: dayjs(value[0]).valueOf(),
        end: dayjs(value[1]).valueOf()
    }

    return (
        <Card>
            <Flex vertical={true} flex={1}>
                <div>
                    <Flex justify="space-between">
                        <Typography.Title level={5}>{title}</Typography.Title>
                        <Checkbox.Group
                            defaultValue={initChecked}
                            options={options}
                            onChange={onChange}
                            style={{
                                display: "flex",
                                alignItems: 'center'
                            }}
                        />
                        <Space>
                            <Space.Compact block>
                                <DatePicker.RangePicker
                                    defaultValue={value}
                                    format={dateFormat}
                                    value={value}
                                    locale={locale}

                                    onChange={(val) => {
                                        setValue(val);
                                    }}
                                    changeOnBlur
                                />
                                {/*<Button type="primary">查询</Button>*/}
                            </Space.Compact>
                            <Button disabled>下载数据</Button>
                        </Space>
                    </Flex>
                    <Divider/>
                </div>
                <Flex flex={1} justify="flex-start">
                    <Flex flex={1} gap={8} vertical>
                        {
                            checkedVal.map((item, index) => (<LineChart key={index} url={item} range={range}/>))
                        }
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}

function LineChart({url, range}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const asyncFetch = () => {
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    const {start, end} = range;
                    // setData(json.filter(x => x.timestamp > start && x.timestamp < end))
                    setData(json)
                })
                .catch((error) => {
                    console.log('fetch data failed', error);
                });
        };
        asyncFetch();
    }, [url, range]);

    const config = {
        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'category',
        xAxis: {
            type: 'time',
        },
        yAxis: {
            label: {
                // 数值格式化为千分位
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
        },
    };

    return (
        <Line {...config} style={{width: '100%', minHeight: 300}}/>
    )
}
