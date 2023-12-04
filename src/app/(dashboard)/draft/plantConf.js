'use client'
import {
    Card,
    DatePicker,
    Form,
    Input,
    Select,
} from "antd";

export function PlantConf() {
    return (
        <Card
            title="作物配置"
            style={{
                minWidth: 350,
                maxWidth: 400,
                height: '100vh',
                borderRadius: 0
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

                <Form.Item label="作物">
                    <Select>
                        <Select.Option value="demo">1000</Select.Option>
                        <Select.Option value="demo">2000</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="品种">
                    <Select>
                        <Select.Option value="demo">1000</Select.Option>
                        <Select.Option value="demo">2000</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="果实大小">
                    <Input
                        style={{
                            textAlign: 'center',
                        }}
                        prefix="功率"
                        suffix="g fruit -1"
                        placeholder="CO2 补充"
                    />
                </Form.Item>

                <Form.Item label="果实数量">
                    <Input
                        style={{
                            textAlign: 'center',
                        }}
                        prefix="功率"
                        suffix="g fruit -1"
                        placeholder="CO2 补充"
                    />
                </Form.Item>

                <Form.Item label="定植日期">
                    <DatePicker.RangePicker
                        style={{
                            width: '70%',
                        }}
                    />
                </Form.Item>

                <Form.Item label="起始密度">
                    <Select>
                        <Select.Option value="demo">1000</Select.Option>
                        <Select.Option value="demo">2000</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="加头日期">
                    <DatePicker.RangePicker
                        style={{
                            width: '70%',
                        }}
                    />
                </Form.Item>

                <Form.Item label="最终密度">
                    <Select>
                        <Select.Option value="demo">1000</Select.Option>
                        <Select.Option value="demo">2000</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Card>
    )
}
