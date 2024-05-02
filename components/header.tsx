"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { ButtonLabels } from "@/bin/filter-button-labels"
import { Categories, Category } from "@/bin/categories"
import { Icons } from "./icons"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import RangeSlider from "./range-slider"
import { Separator } from "./ui/separator"
import { Checkbox } from "./ui/checkbox"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "./ui/card"
import { ElectronicItems, Item } from "@/bin/item"

function Header() {
    const router = useRouter();
    const [isSearchVisible, setSearchVisible] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(true);
    const [isSearchDialogOpen, setSearchDialogOpen] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, setSearchResults] = useState<Item[]>([]);
    const handleCategoryClick = (categoryId: number) => {
        setIsDialogOpen(false);
        router.push(`/category/${categoryId}`);
    };

    const toggleSearch = () => {
        setSearchDialogOpen(!isSearchDialogOpen)
        setSearchVisible(!isSearchVisible)
    }

    const toggleIsDialogOpen = () => {
        setIsDialogOpen(true);
    }

    const mostSearched = [
        { id: 1, title: 'Celulares' },
        { id: 2, title: 'Notebooks' },
        { id: 3, title: 'Geladeiras' },
    ]

    const handleSearchChange = (e: any) => {
        setSearchValue(e.target.value)
        let item = filterItems(e.target.value)
        setSearchResults(item)
        console.log(e.target.value)
        setIsSearching(true)
    }

    const sampleSearch = [
        { id: 1, title: 'AC' },
        { id: 2, title: 'TV' },
        { id: 3, title: 'Celular' },
        { id: 4, title: 'Notebook' },
    ]

    const filterItems = (searchValue: string) => {
        return ElectronicItems.filter((item) => item.title.toLowerCase().includes(searchValue))
    }

    const handleResize = () => {
        if (window.innerWidth > 640) { 
            setSearchDialogOpen(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="sticky top-0 z-50">
            <div className="bg-primary h-24 flex items-center">
                <div className=' 2xl:mx-32 xl:mx-20 lg:mx-16 md:mx-4  flex justify-between h-auto w-full'>
                    <div className="flex justify-between items-center w-80 sm:w-96 mx-6 gap-4">
                        <button onClick={() => router.push('/')}>

                            <Image src='/icons/logo.png' alt='logo' width={200} height={42} className={`sm:block block ${isSearchVisible ? 'hidden' : ''}`} />
                        </button>
                        <div className="flex space-x-4 w-96 md:w-80">
                            <button onClick={toggleSearch}>
                                <Search color="#ffffff" width={40} className={`sm:hidden  ${isSearchVisible ? 'hidden' : ''}`} />
                            </button>
                            {isSearchDialogOpen && (
                                <div tabIndex={-1} onBlur={() => setSearchDialogOpen(false)}>
                                    <Card className=" absolute z-10 top-20  w-80  h-auto"  >
                                        <CardContent>
                                            {!isSearching && (
                                                <>
                                                    <div className=" font-bold text-xl my-3 ">Mais buscados</div>
                                                    <div className="flex flex-col gap-2">
                                                        {mostSearched.map((item) => (
                                                            <button key={item.id} className="text-left" onClick={() => router.push(`/search/${item.title}`)}>{item.title}</button>
                                                        ))}
                                                    </div>
                                                </>)}
                                            {isSearching && (<>
                                                {searchResults.length > 0 && (
                                                    <div>
                                                        <div className="font-bold text-xl my-3  mt-4">Você está buscando...</div>
                                                        {searchResults.map((item) => (
                                                            <div key={item.id} >
                                                                <button className="text-left" onClick={() => router.push(`/search/${item.title}`)}>{item.title}</button>
                                                            </div>
                                                        ))}

                                                    </div>
                                                )}

                                                <div className=" font-bold text-xl my-3 ">Mais buscados</div>
                                                {sampleSearch.map((item) => (
                                                    <div key={item.id} >
                                                        <button className="text-left" onClick={() => router.push(`/search/${item.title}`)}>{item.title}</button>
                                                    </div>
                                                ))}
                                            </>)}
                                        </CardContent>
                                    </Card></div>
                            )}
                            <button onClick={toggleSearch}>
                                <Icons.chevronLeft color="#ffffff" width={40} className={`sm:hidden  ${isSearchVisible ? '' : 'hidden'}`} />
                            </button>
                            <Input placeholder="O que está procurando?" className={`w-full border-gray-200 rounded-full sm:hidden ${isSearchVisible ? '' : 'hidden'}`} onChange={handleSearchChange} />
                            <Dialog>
                                <DialogTrigger className={`sm:block block text-white focus:border-none ${isSearchVisible ? 'hidden' : ''}`} onClick={toggleIsDialogOpen}>
                                    <div className="flex gap-2">Categorias <Icons.ChevronDown /></div>
                                </DialogTrigger>
                                {isDialogOpen && (

                                    <DialogContent className="w-10/12 bg-[#f7ede9] sm:bg-white h-screen sm:h-auto  mt-20 sm:-mt-56 sm:-ml-96 sm:overflow-auto overflow-y-scroll">
                                        <DialogHeader>
                                            <DialogTitle className="mb-8">
                                                <div className=" hidden sm:block">Todas as categorias</div>
                                                <div className=" sm:hidden block">Filtrar por</div>
                                            </DialogTitle>
                                            <DialogDescription>
                                                <div className="hidden sm:flex justify-evenly">
                                                    <div>
                                                        {Categories.slice(0, 4).map((category: Category) => {
                                                            const CategoryComponent = () => (
                                                                <button key={category.id} className="flex items-center gap-4" onClick={() => handleCategoryClick(category.id)}>
                                                                    <div className="w-9 h-9  flex items-center justify-center">
                                                                        <Image
                                                                            src={category.src}
                                                                            alt="About Us"
                                                                            width={22}
                                                                            height={22}
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <h2 className="text-sm font-medium py-4 items-center">{category.title}</h2>
                                                                    </div>
                                                                </button>
                                                            );
                                                            CategoryComponent.displayName = `CategoryComponent${category.id}`;
                                                            return <CategoryComponent key={category.id} />;
                                                        })}
                                                    </div>
                                                    <div className="">
                                                        {Categories.slice(4, 8).map((category: Category) => {
                                                            const CategoryComponent = () => (
                                                                <button key={category.id} className="flex items-center gap-4" onClick={() => handleCategoryClick(category.id)}>
                                                                    <div className="w-9 h-9  flex items-center justify-center">
                                                                        <Image
                                                                            src={category.src}
                                                                            alt="About Us"
                                                                            width={22}
                                                                            height={22}
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <h2 className="text-sm font-medium py-4 items-center">{category.title}</h2>
                                                                    </div>
                                                                </button>
                                                            );
                                                            CategoryComponent.displayName = `CategoryComponent${category.id}`;
                                                            return <CategoryComponent key={category.id} />;
                                                        })}
                                                    </div>

                                                </div>
                                                <div className=" block sm:hidden space-y-4 text-left ">
                                                    <div className=" font-bold text-xl">Itens</div>
                                                    {ButtonLabels.map(label => (
                                                        <div key={label.id} onClick={() => handleCategoryClick(label.id)}>
                                                            <button>
                                                                {label.title}
                                                            </button>
                                                        </div>
                                                    ))}

                                                </div>
                                                <div className=" sm:hidden flex flex-col">
                                                    <div className="flex flex-col rounded-lg  my-4 gap-2">
                                                        <div className="text-xl font-medium text-left">Faixa de preço</div>
                                                        <RangeSlider />
                                                        <Separator className="my-2" />
                                                        <div className="flex flex-col gap-2 mb-16">
                                                            <div className="flex gap-3">
                                                                <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                                                                <div className="flex text-base pl-3">Amazon</div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                                                                <div className="flex text-base pl-3"> Americanas </div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                                                                <div className="flex text-base pl-3">Mercado Livre</div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                                                                <div className="flex text-base pl-3">Casas Bahia</div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                                                                <div className="flex text-base pl-3">Ponto</div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                                                                <div className="flex text-base pl-3">Nike</div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                                                                <div className="flex text-base pl-3">Adidas</div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                                                                <div className="flex text-base pl-3">KaBuM!</div>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                                                                <div className="flex text-base pl-3">AliExpress</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                )}
                            </Dialog>
                        </div>
                    </div>
                    <div className=" hidden sm:flex bg-white rounded-full w-5/12 md:w-3/12 p-1 items-center justify-between mx-2">
                        <Input placeholder="O que está procurando?" className="w-10/12 border-gray-200 rounded-full" />
                        <Search width={40} color="#514d4d" />
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
        </div>
    )
}

export default Header