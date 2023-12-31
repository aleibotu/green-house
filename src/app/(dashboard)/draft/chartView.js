import {useEffect, useState} from "react"
import {Button, Card, Checkbox, DatePicker, Divider, Flex, Space, Typography} from "antd"
import {Line} from "@ant-design/charts"
import dayjs from "dayjs";

import locale from 'antd/es/date-picker/locale/zh_CN';
import 'dayjs/locale/zh-cn';
// 设置 : https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/%E8%AE%BE%E7%BD%AE.json
const group1 = [
    {
        name: '温度',
        url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/%E6%B8%A9%E5%BA%A6.json',
        include: ['温度', '设置']
    },
    {
        name: '相对湿度',
        url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/%E7%9B%B8%E5%AF%B9%E6%B9%BF%E5%BA%A6.json',
    },
    {
        name: 'CO2浓度',
        url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/CO2%E6%B5%93%E5%BA%A6.json',
    },
    {
        name: '光照强度',
        url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/%E5%85%89%E7%85%A7%E5%BC%BA%E5%BA%A6.json',
    },
];

const group2 = [
    {
        name: '叶面积指数',
        url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/%E5%8F%B6%E9%9D%A2%E7%A7%AF%E6%8C%87%E6%95%B0.json',
    },
    {
        name: '累计湿重',
        url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/%E7%B4%AF%E8%AE%A1%E6%B9%BF%E9%87%8D.json',
    },
    {
        name: '累计果实数量',
        url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/%E7%B4%AF%E8%AE%A1%E6%9E%9C%E5%AE%9E%E6%95%B0%E9%87%8F.json',
    },
    {
        name: '累计干重果实',
        url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/%E7%B4%AF%E8%AE%A1%E5%B9%B2%E9%87%8D%E6%9E%9C%E5%AE%9E.json',
    },
]

const group3 = [
    {
        name: '加热天然气使用',
        url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/%E5%8A%A0%E7%83%AD%E5%A4%A9%E7%84%B6%E6%B0%94%E4%BD%BF%E7%94%A8.json',
    },
    {
        name: '天然气使用',
        url: 'https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/%E5%A4%A9%E7%84%B6%E6%B0%94%E4%BD%BF%E7%94%A8.json',
    },
]

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
            <SectionCard title="作物信息" group={group2}/>
            <SectionCard title="运营信息" group={group3}/>
        </div>
    )
}

const dateFormat = 'YYYY/MM/DD';
function SectionCard({title, group}) {
    const [value, setValue] = useState([dayjs('2019/10/01', dateFormat), dayjs('2020/07/01', dateFormat)]);
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
                    setData(json.filter(x => x.timestamp > start && x.timestamp < end))
                })
                .catch((error) => {
                    console.log('fetch data failed', error);
                });
        };
        asyncFetch();
    }, [url, range]);

    const config = {
        data,
        xField: 'year',
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
