'use client'
import {Button, Card, Flex, Input, Segmented, Space, Typography} from "antd";
import {useState} from "react";
import {MapView} from "@/app/(dashboard)/draft/mapView";
import {ModelView} from "@/app/(dashboard)/draft/modelView";
import {ChartView} from "@/app/(dashboard)/draft/chartView";
import {FullscreenOutlined} from "@ant-design/icons";

function Display({type = '地图'}) {
    if (type === '地图') {
        return (
            <>
                <MapView/>
            </>
        )
    }
    if (type === '3D') {
        return (
            <>
                <ModelView/>
            </>
        )
    }
    if (type === '结果分析') {
        return (
            <>
                <ChartView/>
            </>
        )
    }
}

export function RightArea() {
    const [value, setValue] = useState('地图')

    function onChange(v) {
        setValue(v)
    }

    return (
        <Flex flex={1} vertical>
            <Card style={{borderRadius: 0}} bodyStyle={{padding: 12,}}>
                <Flex justify="space-between">
                    <Space>
                        <Button icon={<FullscreenOutlined/>}></Button>
                        <Segmented options={['地图', '3D', '结果分析']} value={value} onChange={onChange}/>
                        <Space.Compact>
                            <Input placeholder="方案 1"/>
                            <Button disabled>保存为我的方案</Button>
                        </Space.Compact>
                    </Space>
                    {/*<Space>*/}
                    {/*    <Typography.Title level={3} style={{marginBottom: 0}}>$ 180,00000</Typography.Title>*/}
                    {/*</Space>*/}
                </Flex>
            </Card>
            <Display type={value}/>
        </Flex>
    )
}

