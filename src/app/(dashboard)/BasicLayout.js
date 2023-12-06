'use client';
import {useState} from "react";
import {useAtom} from "jotai";
import {Avatar, ConfigProvider, Flex, Layout, Menu, Switch, theme, Typography} from "antd";

import {currentMenu, items, menuMapping} from "@/store/state";
import {usePathname} from "next/navigation";
import {global} from "styled-jsx/css";

const {Text} = Typography;
const {defaultAlgorithm, darkAlgorithm} = theme;

export default function BasicLayout({children}) {
    const [menu, setMenu] = useAtom(currentMenu)
    const [l, setL] = useState(global?.window?.localStorage.getItem('theme'));
    const pathname = usePathname();

    const onChange = (checked) => {
        const light = checked ? 'light' : 'dark';
        global?.window?.localStorage.setItem('theme', light)
        setL(light)
    }

    const handleSelect = (e) => {
        setMenu(e.key)
    }

    const handleClick = () => {

    }

    const light = l === 'light';

    return (
        <ConfigProvider
            theme={{
                algorithm: light ? defaultAlgorithm : darkAlgorithm
            }}
        >
            <Layout style={{backgroundColor: light ? '#fff' : '#000'}}>
                <Flex>
                    {/* left bar */}
                    <Flex
                        vertical
                        justify="space-between"
                        style={{
                            width: 240,
                            backgroundColor: light ? '#fafafa' : '#000c17'
                        }}
                    >
                        <Flex
                            vertical
                            style={{
                                backgroundColor: light ? '#fbf6ef' : '#000C26',
                            }}
                        >
                            <Typography.Title level={2} style={{padding: '0.3em 0.5em', margin: 0}}>
                                Green House
                            </Typography.Title>
                            <Menu
                                defaultSelectedKeys={[menuMapping[pathname] ? menuMapping[pathname] : '5']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme={light ? 'light' : 'dark'}
                                items={items}
                                onSelect={handleSelect}
                                onClick={handleClick}
                            />
                        </Flex>

                        <Flex
                            align="center"
                            justify="space-between"
                            style={{
                                padding: '12px 8px',
                                backgroundColor: light ? '#fbf6ef' : '#000C26'
                            }}
                        >
                            <Flex align="center">
                                <Avatar size={40}>USER</Avatar>
                                {/* inline element, but padding required. */}
                                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 12}}>
                                    <Text>
                                        Admin
                                    </Text>
                                    <Text type="secondary">
                                        some lazy guy.
                                    </Text>
                                </div>
                            </Flex>
                            <Switch checked={light} onChange={onChange}/>
                        </Flex>
                    </Flex>

                    {/* body */}
                    <Flex flex={1} style={{height: '100vh', overflowY: 'auto'}}>
                        {children}
                    </Flex>
                </Flex>
            </Layout>
        </ConfigProvider>
    )
}
