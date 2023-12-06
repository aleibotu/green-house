import {Card, Flex} from "antd";

export default function Page() {
    return (
        <Flex vertical flex={1} gap={8}>
            <Card title="我收藏的" style={{borderRadius: 0}}>
                some
            </Card>
            <Card title="我创建的" style={{borderRadius: 0}}>
                some
            </Card>
        </Flex>
    )
}
