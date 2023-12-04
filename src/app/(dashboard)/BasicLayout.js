'use client';
import {useState} from "react";
import {useAtom} from "jotai";
import {Avatar, ConfigProvider, Layout, Menu, Switch, theme, Typography} from "antd";

import {currentMenu, items, menuMapping} from "@/store/state";
import {usePathname} from "next/navigation";

const {Text} = Typography;
const {defaultAlgorithm, darkAlgorithm} = theme;

function getTheme() {
    return window.localStorage.getItem('theme')
}

// todo 好像一刷新，这个全局状态就又刷新了，很不爽.

export default function BasicLayout({children}) {
    const [menu, setMenu] = useAtom(currentMenu)
    const [l, setL] = useState(getTheme);
    const pathname = usePathname();
    console.log(pathname)

    const onChange = (checked) => {
        const light = checked ? 'light' : 'dark';
        window.localStorage.setItem('theme', light)
        setL(light)
    }

    const handleSelect = (e) => {
        setMenu(e.key)
    }

    const handleClick = (e) => {
        console.log(e)
    }

    const light = l === 'light';

    return (
        <ConfigProvider
            theme={{
                algorithm: light ? defaultAlgorithm : darkAlgorithm
            }}
        >
            <Layout style={{backgroundColor: light ? '#fff' : '#000'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', height: '100vh'}}>
                    {/* left bar */}
                    <div
                        style={{
                            width: 240,
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: light ? '#fafafa' : '#000c17'
                        }}
                    >
                        <div style={{flex: 1}}>
                            <div style={{
                                backgroundColor: light ? '#fbf6ef' : '#000C26',
                            }}>
                                <Typography.Title level={2} style={{padding: '0.3em 0.5em', margin: 0}}>
                                    Green House
                                </Typography.Title>
                            </div>
                            <Menu
                                defaultSelectedKeys={[menuMapping[pathname] ? menuMapping[pathname] : '5']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme={light ? 'light' : 'dark'}
                                items={items}
                                onSelect={handleSelect}
                                onClick={handleClick}
                            />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '12px 8px',
                                backgroundColor: light ? '#fbf6ef' : '#000C26'
                            }}
                        >
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Avatar size={40}>USER</Avatar>
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 12}}>
                                    <Text>
                                        Admin
                                    </Text>
                                    <Text type="secondary">
                                        some lazy guy.
                                    </Text>
                                </div>
                            </div>
                            <Switch checked={light} onChange={onChange}/>
                        </div>
                    </div>

                    {/* body */}
                    <div style={{flex: 1, overflowY: "auto"}}>
                        {children}
                    </div>
                </div>
            </Layout>
        </ConfigProvider>
    )
}
