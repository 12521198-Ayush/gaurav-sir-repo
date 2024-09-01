'use client';

import classNames from "classnames";
import { BsList } from "react-icons/bs"
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import { UserNav } from "./usernav";
import { ThemeSwitcher } from "./theme-switcher";

export default function Header(){

    const {toggleCollapse, invokeToggleCollapse} = useSideBarToggle();

    const sideBarToggle=()=>{
        invokeToggleCollapse();
    }

    const headerStyle = classNames("bg-sidebar fixed w-full z-[99997] px-4 shadow-sm shadow-slate-500/40",
        {
            ["sm:pl-[5.6rem]"]:toggleCollapse,
            ["sm:pl-[15rem]"]:!toggleCollapse
        }
    );

    return(
        <header className={headerStyle}>
            <div className="flex items-center justify-between h-16">
                <button onClick={sideBarToggle} className="order-2 sm:order-1 shrink-btn float-right bg-sidebar-muted text-sidebar-muted-foreground hover:bg-foreground hover:text-background ml-3 rounded-md h-[30px] w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
                    <BsList />
                </button>

                <div className="flex items-center justify-between sm:order-2 order-1">
                    <div className="p-1">
                        <ThemeSwitcher />
                    </div>

                    <div className="h-10 w-10 rounded-full bg-sidebar-muted flex items-center justify-center text-center">
                        <UserNav />
                    </div>
                </div>
            </div>
        </header>
    )
}


