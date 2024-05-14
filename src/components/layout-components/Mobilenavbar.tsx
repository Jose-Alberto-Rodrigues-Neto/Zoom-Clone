import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger
  } from "@/components/ui/sheet"
import Link from "next/link"
import { IoMenu } from "react-icons/io5"
import Image from "next/image"
import { navItemData, SidebarItems } from "./Sidebar"
  

export default function Mobilenav() {
  return (
    <nav className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
            <IoMenu className="text-3xl cursor-pointer sm:hidden"/>
        </SheetTrigger>
            <SheetContent side="left" className="border-none bg-dark-1">
            <Link 
                href="/" 
                className="flex items-center gap-1"
            >
                <Image
                src="/icons/logo.svg"
                width={32}
                height={32}
                alt="Yoom Logo"
                className="max-sm:size-10">
                </Image>
                
                <p className="text-xl text-white font-semibold">Yoom</p>
            </Link>
            <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto">
                <SheetClose asChild>
                    <section className="flex h-full flex-col gap-2 pt-8 text-white">
                    {navItemData.map((key) => {
                        return (
                            <SheetClose asChild key={key.path}>
                                <SidebarItems
                                key={key.name}
                                name={key.name}
                                icon={key.icon}
                                path={key.path}
                                className="p-1"
                                />
                            </SheetClose>
                        );
                    })}
                    </section>
                </SheetClose>
            </div>
            </SheetContent>
        </Sheet>

    </nav>
  )
}