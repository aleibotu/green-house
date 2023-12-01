import {Card, Image} from "antd";
import Meta from "antd/es/card/Meta";

export default function Page() {
    return (
        <div style={{display: 'flex', flexWrap: "wrap", gap: 16, padding: 8}}>
            {
                Array.from({length: 10}).map((item, index) => {
                    return (
                        <Card
                            key={index}
                            hoverable
                            style={{ width: 240 }}
                            cover={<Image alt="example" src={`https://picsum.photos/${index}`} />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    )
                })
            }

        </div>
    )
}
