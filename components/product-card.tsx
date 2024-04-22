import React from 'react'
import Image from 'next/image'

import { Separator } from './ui/separator'
import {
    Card,
    CardContent,
} from "@/components/ui/card"

import { ProductCardShowType } from '@/lib/enums/product-card-show'

type Props = {
    image: string
    title: string
    description: string
    orginalPrice: number
    discountPrice: number
    likes: number
    addedtime: string
    showtype: ProductCardShowType
    tag?: string
    className?: string
}

function ProductCard({ tag, image, title, orginalPrice, discountPrice, likes, addedtime, showtype, description, className }: Props) {
    let width;
    let display;
    let isShort;
    let isMini;
    switch (showtype) {
        case ProductCardShowType.mini:
            width = 'w-[22rem]';
            display = 'flex';
            isShort = 'hidden';
            isMini = true;
            break;
        case ProductCardShowType.short:
            width = 'w-[17rem]';
            display = 'block';
            isShort = 'block';
            isMini = false;
            break;
        case ProductCardShowType.long:
            width = 'w-full';
            display = 'flex';
            isShort = 'hidden';
            isMini = false;
            break;
        default:
            width = 'w-40'; // default width
            display = 'flex';
            isShort = 'hidden';
            isMini = false;
    }

    let bgColor;
    let tagIcon;
    switch (tag) {
        case 'Recentes':
            bgColor = 'bg-red-400';
            tagIcon = '/icons/tag/recent.svg';
            break;
        case 'Destaques':
            bgColor = 'bg-yellow-400';
            tagIcon = '/icons/tag/fav.svg';
            break;
        case 'Desconto alto':
            bgColor = 'bg-green-400';
            tagIcon = '/icons/tag/tag.svg';
            break;
        case 'Mais curtidas':
            bgColor = 'bg-blue-400';
            tagIcon = '/icons/recent/heart.svg';
            break;
        default:
            bgColor = 'bg-gray-400';
            tagIcon = '/icons/heart.svg';
    }

    return (
        <>
            <Card className={width + ' ' + className + ' group'}>
                <CardContent className='my-4 p-0'>
                    <div className={display + ' relative '}>
                        <div className=' flex justify-center'>

                            <Image src={image} alt={title} width={200} height={200} />
                            {
                                tag && (
                                    <div className={bgColor + ' absolute top-0 right-2 text-white px-2 py-1 rounded-md flex ' + isShort}>
                                        <Image src={tagIcon} alt={tag} width={20} height={20} />
                                        <span className="hidden group-hover:inline">{tag}</span>
                                    </div>
                                )
                            }
                        </div>
                        <Separator className={isShort + ' my-4  '} />
                        <div className='px-4 w-full'>
                            <div className=' text-blue-500'>{title}</div>
                            <div className=' text-xl mb-2'> {isMini ? description.slice(0, 30) + '...' : description}</div>
                            <div style={{ textDecoration: 'line-through' }}>R$ {orginalPrice}</div>
                            <div className=' text-green-600 text-2xl font-semibold'>R$ {discountPrice}</div>
                            <div className=' flex justify-between mt-2 items-center text-gray-400'>
                                {!isMini && (
                                    <>
                                        <div>há {addedtime}</div>
                                        <div className='flex gap-3 '>
                                            <Image src="/icons/heart.svg" alt={title} width={20} height={20} />
                                            <div>
                                                {likes}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductCard


// sample card

{/* <ProductCard tag="Destaques" description="A1 Mini fones de ouvido sem fio Bluetooth" image="/images/product1.svg" title="Amazon" orginalPrice={92.44} discountPrice={76.13} likes={24} addedtime="2 min" showtype={ProductCardShowType.short} /> */ }
