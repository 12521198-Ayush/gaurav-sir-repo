'use-client';

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut } from "../ui/dropdown-menu";
import { useFormState } from "react-dom";


import { Fragment, useCallback, useEffect } from "react"
import { signOut, useSession } from "next-auth/react"


export function UserNav()
{    
    const { data: session } = useSession()

    console.log("----------- CLI ---------------");
    console.log(session);
    //console.log(status);
    console.log(session?.user?.name);
    console.log(session?.user?.email);
    console.log("------------------------------");

    // you can directly call this method from your log out button somewhere in this component
    const logout = useCallback(() => {
        const accessToken = session?.user?.accessToken || undefined

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`, {
            method: "POST",
            body: JSON.stringify({ accessToken })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            /* send log to the Sentry if the endpoint fails
            if (!data.success)
                notifySentry("Could not log out!")
            */
        })
        .catch(error => {
            console.log(error)
            /* send log to the Sentry if an error occurs
            notifySentry(error)
             */
        })
        .finally(async () => {
            await signOut({ callbackUrl: `${window.location.origin}/login` })
        })
    }, [session])

    useEffect(() => {
        console.log('session: ', session)
        if (session?.error === "RefreshAccessTokenError") { // remember that error?
            // force the user to log out if the session has RefreshAccessTokenError
            logout()
        }
    }, [session, logout])

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-10 w-10 ">
                        <AvatarImage src="avatar.png" alt="" />
                        <AvatarFallback>GB</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 z-[999999]">
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{session?.user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">{session?.user.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Setting
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <form action={logout}>
                        <button>Logout</button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


/*

'use-client';

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut } from "../ui/dropdown-menu";
import { useFormState } from "react-dom";
import { logoff } from "@/lib/actions/auth";
import { useSession } from "next-auth/react";
import { useEffect } from "react";


export function UserNav()
{
    const [state, logoffAction] = useFormState(logoff, undefined);
    const {data: session, status} = useSession();
    //const {data: session, status, update} = useSession(); // { required: true }
    console.log("----------- CLI ---------------");
    console.log(session);
    console.log(status);
    console.log(session?.user?.name);
    console.log(session?.user?.email);
    console.log("------------------------------");

    useEffect(() => {}, [session]);
 
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-10 w-10 ">
                        <AvatarImage src="avatar.png" alt="" />
                        <AvatarFallback>GB</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 z-[999999]">
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{session?.user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">{session?.user.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Setting
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <form action={logoffAction}>
                        <button>Logout</button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


*/


/*
<button onClick={ () => {
                    update({...session, name: "Gaurav Bansal"});
                }}>
                    Update
                </button>
*/