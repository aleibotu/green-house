import {Button, Card, Checkbox, DatePicker, Divider, Space, Typography} from "antd";
import {Line} from "@ant-design/charts";

export function ModalView() {
    return (
        <div style={{display: 'flex', flexDirection: "column" ,gap: 8, overflowY: 'scroll', padding: '0.5em'}}>
            <Card>
                <div style={{display: 'flex'}}>
                    <div style={{width: 200}}>
                        <Typography.Title level={5}>环境信息</Typography.Title>
                        <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                            <Checkbox>光照</Checkbox>
                            <Checkbox>湿度</Checkbox>
                            <Checkbox>CO2</Checkbox>
                            <Checkbox>相对湿度</Checkbox>
                            <Checkbox>绝对湿度差</Checkbox>
                            <Checkbox>补光时间</Checkbox>
                            <Checkbox>开窗</Checkbox>
                        </div>
                    </div>
                    <div style={{flex: 1}}>
                        <div style={{display: "flex", flexDirection: 'column'}}>
                            <div style={{padding: '0 30px'}}>
                                <Space>
                                    <Space.Compact block>
                                        <DatePicker.RangePicker
                                            style={{
                                                width: '70%',
                                            }}
                                        />
                                        <Button type="primary">查询</Button>
                                    </Space.Compact>
                                    <Button>下载图表</Button>
                                    <Button>下载数据</Button>
                                </Space>
                                <Divider/>
                            </div>
                            <div style={{flex: 1}}>
                                <div style={{display: 'flex', justifyContent: "space-evenly"}}>
                                    <LineChart/>
                                    <LineChart/>
                                    <LineChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card>
                <div style={{display: 'flex'}}>
                    <div style={{width: 200}}>
                        <Typography.Title level={5}>作物信息</Typography.Title>
                        <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                            <Checkbox>产量</Checkbox>
                            <Checkbox>叶面积指数</Checkbox>
                            <Checkbox>开花</Checkbox>
                            <Checkbox>坐果</Checkbox>
                            <Checkbox>干物质分配到果实</Checkbox>
                            <Checkbox>干物质分配到叶片</Checkbox>
                            <Checkbox>总干物质</Checkbox>
                        </div>
                    </div>
                    <div style={{flex: 1}}>
                        <div style={{display: "flex", flexDirection: 'column'}}>
                            <div style={{padding: '0 30px'}}>
                                <Space>
                                    <Space.Compact block>
                                        <DatePicker.RangePicker
                                            style={{
                                                width: '70%',
                                            }}
                                        />
                                        <Button type="primary">查询</Button>
                                    </Space.Compact>
                                    <Button>下载图表</Button>
                                    <Button>下载数据</Button>
                                </Space>
                                <Divider/>
                            </div>
                            <div style={{flex: 1}}>
                                <div style={{display: 'flex', justifyContent: "space-evenly"}}>
                                    <LineChart/>
                                    <LineChart/>
                                    <LineChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card>
                <div style={{display: 'flex'}}>
                    <div style={{width: 200}}>
                        <Typography.Title level={5}>运营信息</Typography.Title>
                        <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                            <Checkbox>销售价格</Checkbox>
                            <Checkbox>营业额</Checkbox>
                            <Checkbox>天然气</Checkbox>
                            <Checkbox>劳工</Checkbox>
                            <Checkbox>植保</Checkbox>
                            <Checkbox>汇总表格</Checkbox>
                        </div>
                    </div>
                    <div style={{flex: 1}}>
                        <div style={{display: "flex", flexDirection: 'column', gap: 3}}>
                            <div style={{padding: '0 30px'}}>
                                <Space>
                                    <Space.Compact block>
                                        <DatePicker.RangePicker
                                            style={{
                                                width: '70%',
                                            }}
                                        />
                                        <Button type="primary">查询</Button>
                                    </Space.Compact>
                                    <Button>下载图表</Button>
                                    <Button>下载数据</Button>
                                </Space>
                                <Divider/>
                            </div>

                            <div style={{flex: 1}}>
                                <div style={{display: 'flex', justifyContent: "space-evenly"}}>
                                    <LineChart/>
                                    <LineChart/>
                                    <LineChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

function LineChart() {
    const data = [
        {
            year: '1991',
            value: 3,
        },
        {
            year: '1992',
            value: 4,
        },
        {
            year: '1993',
            value: 3.5,
        },
        {
            year: '1994',
            value: 5,
        },
        {
            year: '1995',
            value: 4.9,
        },
        {
            year: '1996',
            value: 6,
        },
        {
            year: '1997',
            value: 7,
        },
        {
            year: '1998',
            value: 9,
        },
    ];

    const config = {
        data,
        yField: 'value',
        xField: 'year',
        tooltip: {
            customContent: (title, items) => {
                return (
                    <>
                        <h5 style={{marginTop: 16}}>{title}</h5>
                        <ul style={{paddingLeft: 0}}>
                            {items?.map((item, index) => {
                                const {name, value, color} = item;
                                return (
                                    <li
                                        key={item.year}
                                        className="g2-tooltip-list-item"
                                        data-index={index}
                                        style={{marginBottom: 4, display: 'flex', alignItems: 'center'}}
                                    >
                                        <span className="g2-tooltip-marker" style={{backgroundColor: color}}></span>
                                        <span
                                            style={{display: 'inline-flex', flex: 1, justifyContent: 'space-between'}}
                                        >
                      <span style={{marginRight: 16}}>{name}:</span>
                      <span className="g2-tooltip-list-item-value">{value}</span>
                    </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                );
            },
        },
        width: 200,
        height: 150,
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#2593fc',
                lineWidth: 2,
            },
        },
    };

    return (
        <Line {...config} />
    )
}
