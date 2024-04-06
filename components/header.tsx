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


function Header() {
    const form = useForm()
    return (
        <>
            <div className="bg-primary h-24 flex items-center">
                <div className=' mx-32 flex justify-between h-auto w-full'>
                    <div className=" flex gap-8">
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
                    <div>
                        <Input placeholder="O que está procurando? " className=" rounded-full w-96" />
                    </div>
                    <div className="flex gap-4">
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