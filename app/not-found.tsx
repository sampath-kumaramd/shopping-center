"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'


export default function NotFound() {
  const router = useRouter()
  return (
    <div className=' h-[72vh] items-center text-center align-middle'>
      <div className=' flex justify-center'>
        <Image src="/images/not-found.jpg" alt="404" width={500} height={500} />
      </div>
      <Button variant="outline" color="primary" onClick={() => router.push('/')}>Return Home</Button>
    </div>
  )
}