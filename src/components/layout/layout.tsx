import { Outlet } from "react-router-dom"
import { SideBar } from "../side_bar/side_bar"
import s from './s.module.scss'
import ButtonAppBar from "../app_bar/app_bar"

export const LayOut =()=>{
    return <div className={s.root}>
        <ButtonAppBar />
        <div className={s.body}>
            <div className={s.sidebar}>
                <SideBar />
            </div>
            <div className={s.page}>
                <Outlet />
            </div>
        </div>
    </div>
}