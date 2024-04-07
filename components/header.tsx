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


function Header() {
    const form = useForm()
    return (
        <>
            <div className="bg-primary h-24 flex items-center">
                <div className=' 2xl:mx-32 xl:mx-20 lg:mx-16 md:mx-8  flex justify-between h-auto w-full'>
                    <div className="flex justify-between  w-96">
                        <Image src='/icons/logo.png' alt='logo' width={200} height={42} />
                        <DropdownMenu>
                            <DropdownMenuTrigger className=" text-white focus:border-none">
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
                    <div className=" hidden sm:flex bg-white rounded-full w-5/12 md:w-3/12 p-1 items-center justify-between mx-2">
                        <Input placeholder="O que está procurando?" className="w-10/12 border-gray-200 rounded-full" />
                        <Search width={40} />
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