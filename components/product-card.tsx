import React from 'react'
import Image from 'next/image'

import { Separator } from './ui/separator'
import {
    Card,
    CardContent,
} from "@/components/ui/card"

import { ProductCardShowType } from '@/lib/enums/product-card-show'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

type Props = {
    id: number
    categoryId: number
    image: string
    title: string
    subTitle: string
    discription: string
    orginalPrice: number
    discountPrice: number
    likes: number
    addedtime: string
    showtype: ProductCardShowType
    tag?: string
    comments: number
    className?: string
}

function ProductCard({ id, categoryId, tag, image, title, discription, orginalPrice, discountPrice, likes, addedtime, showtype, subTitle, comments, className }: Props) {
    let width;
    let display;
    let isShort;
    let imageWidth;
    let imageHeight;
    switch (showtype) {
        case ProductCardShowType.mini:
            imageWidth = 200;
            imageHeight = 200;
            width = 'w-[22rem]';
            display = 'flex';
            isShort = 'hidden';
            break;
        case ProductCardShowType.short:
            imageWidth = 200;
            imageHeight = 200;
            width = 'w-[17rem]';
            display = 'block';
            isShort = 'block';
            break;
        case ProductCardShowType.long:
            imageWidth = 200;
            imageHeight = 200;
            width = 'w-full';
            display = 'flex';
            isShort = 'hidden';
            break;
        case ProductCardShowType.large:
            imageWidth = 400;
            imageHeight = 400;
            width = 'w-full';
            display = 'flex';
            isShort = 'hidden';
            break;
        case ProductCardShowType.largeMobile:
            imageWidth = 400;
            imageHeight = 400;
            width = 'w-full';
            display = 'block';
            isShort = 'hidden';
            break;
        default:
            imageWidth = 200;
            imageHeight = 200;
            width = 'w-40'; // default width
            display = 'flex';
            isShort = 'hidden';
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

    const router = useRouter();

    return (
        <>
            <Card className={width + ' ' + className + ' group'}>
                <CardContent className='my-4 p-0'>
                    <div className={display + ' relative '}>
                        <div className=' flex justify-center'>
                            <button onClick={() => router.replace(`/category/${categoryId}/product/${id}`)}>
                                <Image src={image} alt={title} width={imageWidth} height={imageHeight} className={`${showtype === ProductCardShowType.large ? ' my-8 mr-20' : '  '}`} />
                                {
                                    tag && (
                                        <div className={bgColor + ' absolute top-0 right-2 text-white px-2 py-1 rounded-md flex ' + isShort}>
                                            <Image src={tagIcon} alt={tag} width={20} height={20} />
                                            <span className="hidden group-hover:inline">{tag}</span>
                                        </div>
                                    )
                                }
                            </button>

                        </div>
                        <Separator className={isShort + ' my-4  '} />
                        <div className={`${showtype === ProductCardShowType.large || showtype === ProductCardShowType.largeMobile ? '  px-4 w-full flex flex-col justify-between ' : 'px-4 w-full flex flex-col justify-between h-48  '}`}>
                            <div className={`${showtype === ProductCardShowType.large ? '  space-y-4 mt-4' : '  '}`}>
                                <div className=' text-blue-500'>{title}</div>
                                <div className={`${showtype === ProductCardShowType.large ? ' text-2xl mb-2 font-bold mt-2' : 'text-xl mb-2 '}`}> {showtype === ProductCardShowType.mini ? subTitle.slice(0, 30) + '...' : subTitle}</div>
                                <div className={`${showtype === ProductCardShowType.large ? ' block my-4' : ' hidden '}`}>{discription}</div>
                                <div className=' flex gap-24 items-center'>
                                    <div>
                                        <div style={{ textDecoration: 'line-through' }}>R$ {orginalPrice}</div>
                                        <div className=' text-green-600 text-2xl font-semibold'>R$ {discountPrice}</div>
                                    </div>
                                    <div className={`${showtype === ProductCardShowType.large ? ' flex space-x-4 text-white ' : ' hidden '}`} >
                                        <Button className=' rounded-full flex space-x-2 px-6'>
                                            <div>Ir para a loja</div>
                                            <Image src="/icons/arrow-out.svg" alt={title} width={20} height={20} />
                                        </Button>
                                        <Button className=' rounded-full p-0 border-none'>
                                            <Image src="/icons/heart-circled.svg" alt={title} width={40} height={40} />
                                        </Button>
                                        <Button className=' rounded-full p-0 border-none'>
                                            <Image src="/icons/share-circled.svg" alt={title} width={40} height={40} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={`${showtype === ProductCardShowType.large ? 'block ' : ' hidden '}`}>
                                    <Separator className=' my-8' />

                                    <div className='flex gap-4'>
                                        <div className='flex gap-3'>
                                            <Image src="/icons/tag/recent-black.svg" alt={title} width={20} height={20} />
                                            <div>
                                                há {addedtime}
                                            </div>
                                        </div>
                                        <div className='flex gap-3'>
                                            <Image src="/icons/heart.svg" alt={title} width={20} height={20} />
                                            <div>
                                                {likes} curtidas
                                            </div>
                                        </div>
                                        <div className='flex gap-3'>
                                            <Image src="/icons/tag/chat-circle.svg" alt={title} width={20} height={20} />
                                            <div>
                                                {comments} comentários
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex justify-between mt-2 items-center text-gray-400'>
                                {(showtype !== ProductCardShowType.mini && showtype !== ProductCardShowType.large && showtype !== ProductCardShowType.largeMobile) && (
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
                                {showtype === ProductCardShowType.largeMobile && (
                                    <div className=' w-full flex flex-col justify-center '>
                                        <Button className=' rounded-full flex space-x-2 px-6 py-4'>
                                            <div>Ir para a loja</div>
                                            <Image src="/icons/arrow-out.svg" alt={title} width={20} height={20} />
                                        </Button>
                                        <Separator className='my-4' />
                                        <div className='flex  justify-between items-center'>
                                            <div className='flex gap-3'>
                                                <Image src="/icons/tag/recent-black.svg" alt={title} width={20} height={20} />
                                                <div>
                                                    há {addedtime}
                                                </div>
                                            </div>
                                           <div className=' flex gap-4 items-center'>
                                           <div className='flex gap-3'>
                                                <Image src="/icons/tag/chat-circle.svg" alt={title} width={20} height={20} />
                                                <div>
                                                    {comments}
                                                </div>
                                            </div>
                                            <div className='flex gap-3'>
                                                <Image src="/icons/heart.svg" alt={title} width={20} height={20} />
                                                <div>
                                                    {likes}
                                                </div>
                                            </div>

                                            <Button className='flex gap-3' variant="outline" >
                                                <Image src="/icons/share-network.svg" alt={title} width={20} height={20} />
                                                <div>
                                                    Compartilhar
                                                </div>
                                            </Button>
                                           </div>

                                        </div>
                                    </div>

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

{/* <ProductCard tag="Destaques" subTitle="A1 Mini fones de ouvido sem fio Bluetooth" image="/images/product1.svg" title="Amazon" orginalPrice={92.44} discountPrice={76.13} likes={24} addedtime="2 min" showtype={ProductCardShowType.short} /> */ }
