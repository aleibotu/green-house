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
                    <Flex flex={1}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row-reverse',
                            gap: 16,
                            padding: '0.3em 0.8em',
                            height: '100%'
                        }}>
                            <Link href="/draft">
                                控制台
                            </Link>
                            <Link href="/sign">
                                sign
                            </Link>
                            <Link href="/register">
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
