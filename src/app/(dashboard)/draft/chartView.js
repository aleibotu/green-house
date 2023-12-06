import {useEffect, useState} from "react"
import {Button, Card, DatePicker, Divider, Flex, Space, Typography} from "antd"
import {Line} from "@ant-design/charts"

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
            <SectionCard url="https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/weathers_cate1.json" title="环境信息"/>
            <SectionCard url="https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/weathers_cate2.json" title="作物信息"/>
            <SectionCard url="https://mxzn-top.oss-cn-shanghai.aliyuncs.com/data/weathers_cate3.json" title="运营信息"/>
        </div>
    )
}

function SectionCard({url, title}) {
    const [dates, setDates] = useState(null);
    const [value, setValue] = useState(null);
    const disabledDate = (current) => {
        if (!dates) {
            return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
        return !!tooEarly || !!tooLate;
    };

    const onOpenChange = (open) => {
        if (open) {
            setDates([null, null]);
        } else {
            setDates(null);
        }
    };

    return (
        <Card>
            <Flex vertical={true} flex={1}>
                <div>
                    <Flex justify="space-between">
                        <Typography>{title}</Typography>
                        <Space>
                            <Space.Compact block>
                                <DatePicker.RangePicker
                                    value={dates || value}
                                    disabledDate={disabledDate}
                                    onCalendarChange={(val) => {
                                        setDates(val);
                                    }}
                                    onChange={(val) => {
                                        setValue(val);
                                    }}
                                    onOpenChange={onOpenChange}
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
                    <LineChart url={url}/>
                </Flex>
            </Flex>
        </Card>
    )
}

function LineChart({url}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const asyncFetch = () => {
            fetch(url)
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => {
                    console.log('fetch data failed', error);
                });
        };
        asyncFetch();
    }, [url]);

    const config = {
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
        width: 960,
        height: 600,
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
        <Line {...config} />
    )
}
