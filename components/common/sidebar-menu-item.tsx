'use client';

import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import { SideNavItem } from "@/type/types";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

export const SideBarMenuItem = ({item}: {item:SideNavItem}) => {
    
    const pathName = usePathname();
    const {toggleCollapse} = useSideBarToggle();
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    }

    const activeLink = classNames("active text-sidebar-muted-foreground bg-sidebar-muted");
    const navMenuDropdownItem = "text-red py-2 px-4 hover:text-sidebar-muted-foreground transition duration-200 rounded-md";
    const inactivelink = classNames("flex items-center min-h-[40px] h-full text-sidebar-foreground py-2 px-4 hover:text-sidebar-muted-foreground hover:bg-sidebar-muted rounded-md transition duration-200");
    const dropdownMenuHeaderLink = classNames(inactivelink, {["bg-sidebar-muted rounded-b-none"]: subMenuOpen});

    return(
        <>
            { item.submenu ? (
                <div className="min-w-[18px]">
                    <a className={`${dropdownMenuHeaderLink} ${pathName.includes(item.path) ? activeLink : ''}`} 
                        onClick={toggleSubMenu}>
                        {item.icon}
                        {!toggleCollapse && <>
                            <span className="ml-3 text-base leading-6 font-semibold">{item.title}</span>
                            <BsChevronRight className={`${subMenuOpen ? 'rotate-90' : ''} ml-auto stroke-2 text-xs`} />
                            </>
                        }
                    </a>
                    { subMenuOpen && !toggleCollapse && (
                        <div className="bg-sidebar-muted border-1-4">
                            <div className="grid gap-y-2 px-10 py-3 leading-5">
                                { item.subMenuItems?.map((subItem, indx)=>{
                                    return (
                                        <Link 
                                            key={indx} 
                                            href={subItem.path} 
                                            className={`${navMenuDropdownItem} ${subItem.path===pathName ? 'text-white': 'text-sidebar-foreground'}`}
                                        >
                                            <span>{subItem.title}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>)
                    }
                </div>
            ) : (
                <Link href={item.path} className={`${inactivelink} ${item.path===pathName ? activeLink : ''}`}>
                    {item.icon}
                    { !toggleCollapse && (<span className="ml-3 leading-6 font-semibold">{item.title}</span>)}
                </Link>
            )}
        </>
    )

    /**
     
    const activeLink = "rounded-md text-sidebar-muted-foreground bg-sidebar-muted light:text-black light:bg-[#efefef]";
    const linkStyle = "flex items-center min-h-[40px] h-full text-sidebar-foreground py-2 px-4 hover:text-sidebar-muted-foreground hover:bg-sidebar-muted rounded-md transition duration-200";
    const navMenuDropdownItem = "text-red py-2 px-4 hover:text-sidebar-muted-foreground transition duration-200 rounded-md";
    const dropdownMenuHeaderLink = linkStyle;

    return(
        <>
            {
                item.submenu?
                     (<div className="min-w-[18px]">
                        <a className={`${dropdownMenuHeaderLink} ${pathName.includes(item.path) ? activeLink : ''}`} 
                            onClick={toggleSubMenu}>
                            {item.icon}
                            {!toggleCollapse && <>
                                <span className="ml-3 text-base leading-6 font-semibold">{item.title}</span>
                                <BsChevronRight className={`${subMenuOpen ? 'rotate-90' : ''} ml-auto stroke-2 text-xs`} />
                                </>
                            }
                        </a>
                        { subMenuOpen && !toggleCollapse && (
                            <div className="bg-[#3a3f48] border-1-4">
                            <div className="grid gap-y-2 px-10 py-3 leading-5">
                                {
                                    item.subMenuItems.map((subItem, indx)=>{
                                        return(
                                            <Link key={indx} href={subItem.path} className={`${navMenuDropdownItem} ${subItem.path===pathName ? 'text-white': ''}`}>
                                                <span>{subItem.title}</span>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            </div>
                        )
                        }
                    </div>)
                    : (<Link href={item.path} className={`${inactivelink} ${item.path===pathName?activeLink:''}`}>
                        {item.icon}
                        { !toggleCollapse && <span className="ml-3 leading-6 font-semibold">{item.title}</span>}
                    </Link>)
            }
        </>
    )
    */

}