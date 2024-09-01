import classNames from "classnames";
import { ReactNode } from "react";
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";

export default function PageWrapper({children}: {children: ReactNode})
{
    const {toggleCollapse} = useSideBarToggle();

    const pageStyle = classNames("bg-background flex-grow text-foreground p-2 mt-16",
        {
            ["sm:pl-[5.6rem]"]:toggleCollapse,
            ["sm:pl-[15.4rem]"]:!toggleCollapse
        }
    )
    return(
        <div className={pageStyle}>
            {children}
        </div>
    )
}
