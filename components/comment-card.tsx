import React from 'react'
import Image from 'next/image'

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type Props = {
    className?: string
    userName: string
    userImage: string
    comment: string
}

function CommentCard({
    className,
    userName,
    userImage,
    comment
}: Props) {
    return (
        <div className={className + ' '}>
            <div className=' flex space-x-4'>
                <Avatar>
                    <AvatarImage src={userImage} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Card className={className + ' ' + ' bg-gray-50 w-full border-none'}>
                    <CardContent className=' p-4 space-y-2'>
                        <div className=' font-bold'> {userName}</div>
                        <p className=''>{comment}</p>
                    </CardContent>
                </Card>
            </div>
            <div className='flex space-x-6 ml-16 mt-6'>
                <div className=' flex space-x-2'>
                    <Image src="/icons/like-comment.svg" alt='ds' width={20} height={20} />
                    <div className='text-lg'>Curtir </div>
                </div>
                <div className=' flex space-x-2'>
                    <Image src="/icons/reply-comment.svg" alt='ds' width={20} height={20} />
                    <div className='text-lg'>Responder </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard


