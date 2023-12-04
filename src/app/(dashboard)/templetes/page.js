import {Card, Image} from "antd";
import Meta from "antd/es/card/Meta";

export default function Page() {
    return (
        <div style={{padding: '0.5em', columnCount: 5, columnWidth: 300}}>
                {
                    Array.from({length: 20}).map((item, index) => {
                        return (
                            <div key={index} style={{
                                margin: '0 auto 15px',
                                maxWidth: 400,
                                width: '100%'
                            }}>
                                <Card
                                    cover={
                                        <Image
                                            src={`https://source.unsplash.com/random/300×300?orientation=landscape&${index}`}
                                            alt="Picture of the author"
                                        />
                                    }
                                >
                                    <Meta title="some" description="some2"/>
                                </Card>
                            </div>
                        )
                    })
                }
        </div>
    )
}
// cover={<Image alt="example" src={`https://source.unsplash.com/random/300×300?orientation=landscape&${index}`} />}
