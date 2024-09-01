'use client';

import Header from "@/components/common/header";
import PageWrapper from "@/components/common/pagewrapper";
import SideBar from "@/components/common/sidebar";

export default function UserLayout({children}:{children:React.ReactNode}){
    return(
        <>
            <SideBar />
            <div className="flex flex-col h-full w-full">
                <Header />
                <PageWrapper children={children}></PageWrapper>
            </div>
        </>
    );
}