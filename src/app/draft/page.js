'use client'
import {useState} from "react";
import {
    Button,
    Card,
    Cascader, Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Space,
    Switch, Tooltip,
    TreeSelect
} from "antd";

import {AimOutlined, CloseOutlined} from "@ant-design/icons";
import {ModelView} from './modelView'
import {MapView} from './mapView'


export default function Page() {
    // const [componentSize, setComponentSize] = useState('small');
    //
    // const onFormLayoutChange = ({size}) => {
    //     setComponentSize(size);
    // };
    const [showMap, setShowMap] = useState(true);
    return (
        <div style={{display: 'flex'}}>
            <div>
                <Card
                    title="温室配置"
                    style={{
                        minWidth: 350,
                        maxWidth: 400,
                        height: '100vh'
                    }}
                    bodyStyle={{
                        overflowY: 'scroll',
                        height: 'calc(100vh - 60px)',
                    }}
                >
                    <Form
                        initialValues={{}}
                        // onValuesChange={onFormLayoutChange}
                    >

                        <Form.Item label="选择地区">
                            <div style={{display: 'flex', gap: 8}}>
                                <Cascader
                                    options={[
                                        {
                                            value: 'zhejiang',
                                            label: 'Zhejiang',
                                            children: [
                                                {
                                                    value: 'hangzhou',
                                                    label: 'Hangzhou',
                                                },
                                            ],
                                        },
                                    ]}
                                />
                                <Tooltip title="地图选点">
                                    {
                                        showMap ? (
                                            <Button onClick={() => setShowMap(false)} type="primary" shape="circle" icon={<CloseOutlined />} />
                                        ) : (
                                            <Button onClick={() => setShowMap(true)} type="primary" shape="circle" icon={<AimOutlined />} />
                                        )
                                    }

                                </Tooltip>
                            </div>
                        </Form.Item>

                        <Form.Item label="温室面积">
                            <Select>
                                <Select.Option value="demo">1000</Select.Option>
                                <Select.Option value="demo">2000</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="">
                            <div style={{display: 'flex'}}>
                                <div>
                                    <Checkbox style={{minWidth: 100}}>保温幕布</Checkbox>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                                    <Space direction="horizontal">
                                        <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                                            <Space.Compact>
                                                <Input
                                                    prefix="幕布1"
                                                    suffix="%"
                                                    defaultValue="100"
                                                />
                                            </Space.Compact>
                                            <Space.Compact>
                                                <Input
                                                    prefix="幕布2"
                                                    suffix="%"
                                                    defaultValue="100"
                                                />
                                            </Space.Compact>
                                        </div>
                                    </Space>
                                    <Button>+</Button>
                                </div>
                            </div>
                        </Form.Item>

                        <Form.Item label="">
                            <div style={{display: 'flex'}}>
                                <div>
                                    <Checkbox style={{minWidth: 100}}>遮阳幕布</Checkbox>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                                    <Space direction="horizontal">
                                        <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                                            <Space.Compact>
                                                <Input
                                                    prefix="幕布1"
                                                    suffix="%"
                                                    defaultValue="100"
                                                />
                                            </Space.Compact>
                                            <Space.Compact>
                                                <Input
                                                    prefix="幕布2"
                                                    suffix="%"
                                                    defaultValue="100"
                                                />
                                            </Space.Compact>
                                        </div>
                                    </Space>
                                    <Button>+</Button>
                                </div>
                            </div>
                        </Form.Item>

                        <Form.Item label="">
                            <div style={{display: 'flex'}}>
                                <div>
                                    <Checkbox style={{minWidth: 100}}>人工补光</Checkbox>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                                    <Space direction="horizontal">
                                        <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                                            <Space.Compact>
                                                <Input
                                                    style={{
                                                        textAlign: 'center',
                                                    }}
                                                    prefix="最大"
                                                    suffix="h"
                                                    placeholder="大"
                                                />
                                                <Input
                                                    style={{
                                                        width: 30,
                                                        borderLeft: 0,
                                                        borderRight: 0,
                                                        pointerEvents: 'none',
                                                    }}
                                                    placeholder="~"
                                                    disabled
                                                />
                                                <Input
                                                    style={{
                                                        textAlign: 'center',
                                                    }}
                                                    prefix="最小"
                                                    suffix="h"
                                                    placeholder="小"
                                                />
                                            </Space.Compact>
                                            <Space.Compact>
                                                <Input
                                                    prefix="强度"
                                                    suffix="J m-2 d-1"
                                                    defaultValue="100"
                                                />
                                            </Space.Compact>
                                        </div>
                                    </Space>
                                </div>
                            </div>
                        </Form.Item>

                        <Form.Item label="CO2 补充">
                            <Space.Compact>
                                <Input
                                    style={{
                                        textAlign: 'center',
                                    }}
                                    prefix="功率"
                                    suffix="kg ha-1 h-1"
                                    placeholder="CO2 补充"
                                />
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item>
                            <Checkbox style={{minWidth: 100}}>植株间加热</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Checkbox style={{minWidth: 100}}>轨道加热管道</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Checkbox style={{minWidth: 100}}>屋顶通风</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Checkbox style={{minWidth: 100}}>湿帘风机</Checkbox>
                        </Form.Item>

                        <Form.Item label="机械降温">
                            <Space.Compact>
                                <Input
                                    style={{
                                        textAlign: 'center',
                                    }}
                                    prefix="功率"
                                    suffix="W m-2"
                                    placeholder="机械降温"
                                />
                            </Space.Compact>
                        </Form.Item>

                        <Form.Item label="TreeSelect">
                            <TreeSelect
                                treeData={[
                                    {
                                        title: 'Light',
                                        value: 'light',
                                        children: [
                                            {
                                                title: 'Bamboo',
                                                value: 'bamboo',
                                            },
                                        ],
                                    },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item label="DatePicker">
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item label="InputNumber">
                            <InputNumber/>
                        </Form.Item>
                        <Form.Item label="Switch" valuePropName="checked">
                            <Switch/>
                        </Form.Item>
                        <Form.Item label="Button">
                            <Button>Button</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
            <div style={{flexGrow: 1}}>
                {showMap ? <MapView /> : <ModelView />}
            </div>
        </div>
    )
}
