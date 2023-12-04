import { atom} from 'jotai'
import Link from "next/link";
import {ContainerOutlined, DesktopOutlined, MailOutlined} from "@ant-design/icons";

export const currentMenu = atom('5')
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export const menuMapping = {
    '/draft': 'sub1',
    '/templetes': 'sub2',
    '/mySolutions': 'sub3'
}

export const items = [
    // getItem(<Link href="/draft">新建</Link>, '1', <PieChartOutlined/>),
    getItem('新建方案', 'sub1', <MailOutlined/>, [
        getItem(<Link href="/draft">温室配置</Link>, '5'),
        getItem(<Link href="/draft">作物配置</Link>, '6'),
        // getItem('Option 7', '7'),
        // getItem('Option 8', '8'),
    ]),
    getItem(<Link href="/templetes">方案模板</Link>, 'sub2', <DesktopOutlined/>),
    getItem(<Link href="/mySolutions">我的方案</Link>, 'sub3', <ContainerOutlined/>),

    // getItem('我的方案', 'sub2', <AppstoreOutlined/>, [
    //     getItem('Option 9', '9'),
    // getItem('Option 10', '10'),
    // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    // ]),
];
