import {RightArea} from "@/app/(dashboard)/draft/rightArea";

export default function Layout({children}) {
    return (
        <div style={{display: 'flex'}}>
            {/*todo: change menu items in store.*/}
            {children}
            <RightArea/>
        </div>
    )
}
