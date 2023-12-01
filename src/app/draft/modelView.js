import {Card} from "antd";
import {Model} from '@/components/models/GreenHouse'
import {Footer} from './components'


export function ModelView() {
    return (
        <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 1
    }}>
        <div style={{flex: 1, height: '100%'}}>
            <Card
                style={{
                    height: '100%',
                }}
                bodyStyle={{
                    padding: 0,
                    height: '100%'
                }}
            >
                <Model />
            </Card>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    )
}
