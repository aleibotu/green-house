import {Card} from "antd";

export default function Page() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Card title="我收藏的" style={{borderRadius: 0}}>
                some
            </Card>
            <Card title="我创建的" style={{borderRadius: 0}}>
                some
            </Card>
        </div>
    )
}
