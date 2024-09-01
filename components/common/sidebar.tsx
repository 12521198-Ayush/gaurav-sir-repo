import Image from "next/image";
import classNames from "classnames";
import { SIDENAV_ITEMS } from "@/constants/SIDEBAR_CONSTANTS";
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import SideBarMenuGroup from "./sidebar-menu-group";


export default function SideBar(){

    const {toggleCollapse} = useSideBarToggle();
    const asideStyle = classNames("sidebar overflow-y-auto overflow-x-auto fixed bg-sidebar h-full shadow-sm shadow-slate-900/40 transition duration-300 ease-in-out z-[99999]",
        {
            ["w-[15rem]"]:!toggleCollapse,
            ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]:toggleCollapse,
        }
    );

    return(
        <aside className={asideStyle} >
            <div className="sidebar-top relative flex items-center py-5 px-3.5">

                <Image alt="" src={"/logo.png"} className="w-12 mx-3.5 min-h-fit" width={35} height={35}/>
                { !toggleCollapse && 
                    <h3 className="pl-2 font-bold text-2xl text-sidebar-foreground min-w-max">
                        SERVIZING
                    </h3>
                }
            </div>
            <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
                <div className="flex flex-col gap-2 px-4" >
                    {
                        SIDENAV_ITEMS.map((item, index)=> {
                            return <SideBarMenuGroup key={index} menuGroup={item} />
                        })
                    }
                </div>
            </nav>
            
        </aside>
    )
}
