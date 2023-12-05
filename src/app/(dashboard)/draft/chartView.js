import {Button, Card, DatePicker, Divider, Space} from "antd";
import {Line} from "@ant-design/charts";
import json from './../../../mock/weathers2.json'
import {useState} from "react";

const keys = [
    "comp1.Air.T(温度)",
    "comp1.Air.RH(相对湿度)",
    "comp1.Air.ppm(CO2浓度)",
    "common.Iglob.Value(光照强度)",
    "comp1.LAI.Value(叶面积指数)",
    "comp1.Harvest.CumFruitDW(干重果实)",
    "comp1.Harvest.CumFruitFW(干物质到叶片)",
    "comp1.Harvest.CumFruitCount(产量)",
    "common.ConBoiler.GasUse(加热天然气使用)",
    "GasUse(天然气使用)"
]

// const options = keys.map(i => ({label: i, value: i}))

export function ChartView() {
    // const [data, setData] = useState(json)

    // const handleChange = (arr) => {
    //     let difference = keys.filter(x => !arr.includes(x));
    //     setData(json.filter(i => !difference.includes(i.category)))
    // }
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
        <div style={{display: 'flex', flexDirection: "column", gap: 8, overflowY: 'scroll', padding: '0.5em'}}>
            <Card>
                <div style={{display: 'flex'}}>
                    {/*<div style={{width: 200}}>*/}
                    {/*    <Typography.Title level={5}>环境信息</Typography.Title>*/}
                    {/*    <div>*/}
                    {/*        <Checkbox.Group options={options} defaultValue={[...keys]} onChange={handleChange}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div style={{flex: 1}}>
                        <div style={{display: "flex", flexDirection: 'column'}}>
                            <div style={{padding: '0 30px'}}>
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
                                <Divider/>
                            </div>
                            <div style={{flex: 1}}>
                                <div style={{display: 'flex', justifyContent: "space-evenly"}}>
                                    <LineChart data={json}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

function LineChart({data}) {

    const config = {
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
        width: 800,
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
