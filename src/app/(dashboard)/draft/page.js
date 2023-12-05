'use client'
import {HouseConf} from "@/app/(dashboard)/draft/houseConf";
import {PlantConf} from "@/app/(dashboard)/draft/plantConf";
import {useAtom} from "jotai";
import {currentMenu} from "@/store/state";

export default function Page() {
    const [menu] = useAtom(currentMenu)
    return (
        <>
            {
                menu === '5' ? <HouseConf/> : <PlantConf/>
            }
        </>
    )
}
