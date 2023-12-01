'use client'
import {RightArea} from './rightArea'
import {HouseConf} from "@/app/draft/houseConf";
import {PlantConf} from "@/app/draft/plantConf";
import {useAtom} from "jotai";
import {currentMenu} from "@/store/state";

export default function Page() {
    const [menu] = useAtom(currentMenu)
    return (
        <div style={{display: 'flex', height: '100vh'}}>
            {/*todo: change menu items in store.*/}
            {
                menu === '5' ? <HouseConf /> : <PlantConf/>
            }
            <RightArea/>
        </div>
    )
}
