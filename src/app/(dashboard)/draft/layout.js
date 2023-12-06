import {RightArea} from "@/app/(dashboard)/draft/rightArea";
import {Flex} from "antd";

export default function Layout({children}) {
    return (
        <Flex flex={1}>
            {/*todo: change menu items in store.*/}
            {children}
            <RightArea/>
        </Flex>
    )
}
