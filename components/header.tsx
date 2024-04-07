"use client"

import Image from "next/image"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "./icons"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Search } from "lucide-react"
import { useState } from "react"


function Header() {
    const [isSearchVisible, setSearchVisible] = useState(false)

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible)
    }

    const form = useForm()
    return (
        <>
            <div className="bg-primary h-24 flex items-center">
                <div className=' 2xl:mx-32 xl:mx-20 lg:mx-16 md:mx-4  flex justify-between h-auto w-full'>
                    <div className="flex justify-between items-center w-full sm:w-96 mx-6 gap-4">
                        <Image src='/icons/logo.png' alt='logo' width={200} height={42} className={`sm:block block ${isSearchVisible ? 'hidden' : ''}`}/>
                        <div className="flex space-x-4 w-96 md:w-80">
                            <button  onClick={toggleSearch}>
                                <Search color="#ffffff" width={40} className={`sm:hidden  ${isSearchVisible ? 'hidden' : ''}`} />
                            </button>
                            <button  onClick={toggleSearch}>
                                <Icons.chevronLeft color="#ffffff" width={40} className={`sm:hidden  ${isSearchVisible ? '' : 'hidden'}`} />
                            </button>
                            <Input placeholder="O que está procurando?" className={`w-full border-gray-200 rounded-full sm:hidden ${isSearchVisible ? '' : 'hidden'}`}/>
                            <DropdownMenu>
                                <DropdownMenuTrigger className={`sm:block block text-white focus:border-none ${isSearchVisible ? 'hidden' : ''}`}>
                                    <div className="flex gap-2">Categorias <Icons.ChevronDown /></div></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Categorias</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                    </div>
                    <div className=" hidden sm:flex bg-white rounded-full w-5/12 md:w-3/12 p-1 items-center justify-between mx-2">
                        <Input placeholder="O que está procurando?" className="w-10/12 border-gray-200 rounded-full" />
                        <Search width={40} color="#514d4d"/>
                    </div>
                    <div className=" gap-4 hidden md:flex">
                        <Button className="flex gap-2 bg-[#d26841] hover:bg-[#a5423b] rounded-3xl border-white border-2">
                            <Image src='/icons/telegram.png' alt='logo' width={30} height={30} />
                            <span className="text-white">Telegram</span>
                        </Button>
                        <Button className="flex gap-2 bg-[#d26841] hover:bg-[#a5423b] rounded-3xl border-white border-2">
                            <Image src='/icons/whatsapp.png' alt='logo' width={30} height={30} />
                            <span className="text-white">Whatsapp</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="h-1 bg-[#eacb3d]">
            </div>
        </>
    )
}

export default Header