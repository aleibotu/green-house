import Logo from "@/app/logo";
import Link from "next/link";
import {Flex} from "antd";

export default function Home() {
    return (
        <main style={{height: '100vh', position: 'relative', color: "white"}}>
            <div style={{
                position: 'absolute',
                width: '100%',
                zIndex: 100,
            }}>
                <Flex>
                    <Logo/>
                    <Flex flex={1} justify="space-between">
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row-reverse',
                            gap: 16,
                            padding: '0.3em 0.8em',
                        }}>
                            <Link href="/draft" style={{color: 'white'}}>
                                控制台
                            </Link>
                            <Link href="/sign" style={{color: 'white'}}>
                                sign
                            </Link>
                            <Link href="/register" style={{color: 'white'}}>
                                register
                            </Link>
                        </div>
                    </Flex>
                </Flex>
            </div>
            <video autoPlay muted loop style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: "cover",
                zIndex: 1
            }}>
                <source src="https://mxzn-top.oss-cn-shanghai.aliyuncs.com/a.mp4" type="video/mp4"/>
            </video>
        </main>
    )
}
