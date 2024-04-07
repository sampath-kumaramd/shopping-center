import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { Separator } from './ui/separator';

function Footer() {
  return (
    <div className='bg-[#171211] text-white  h-80 '>
      <div className='px-32 py-6 flex justify-between'>
        <div className='space-y-4'>
          <Image src='/icons/logo.png' alt='logo' width={200} height={42} />
          <div >Economia a um clique.</div>
        </div>
        <div className=' space-y-4'>
          <div className=' text-xl font-semibold'>Institucional</div>
          <div>
            <Link href={'/about-us'}>Sobre nós</Link>
          </div>
          <div>
            <Link href={'/contact-us'}>Fale conosco</Link>
          </div> <div>
            <Link href={'/privacy-policy'}>Política de Privacidade</Link>
          </div> <div>
            <Link href={'/terms-of-use'}>Termos de uso</Link>
          </div>

        </div>
        <div className='mr-72 space-y-5'>
          <div className=' text-xl font-semibold'>Siga a gente</div>
          <div className='flex space-x-4'>

            <Image src='/icons/logo/telegram.svg' alt='telegram' width={35} height={35} />
            <Image src='/icons/logo/whatsapp.svg' alt='whatsapp' width={35} height={35} />
            <Image src='/icons/logo/facebook.svg' alt='facebook' width={35} height={35} />
            <Image src='/icons/logo/instagram.svg' alt='instagram' width={35} height={35} />
          </div>

          <Image src='/image/google-safe-browsing.svg' alt='qr-code' width={190} height={190} />
        </div>
      </div>
      <div className='flex justify-center px-32'>
        <Separator className='w-full  bg-gray-600' />
      </div>
      <div className=' text-center mt-6 text-gray-600'>
        © Todos os direitos reservados Eu Amo Descontos - 2024
      </div>
    </div>
  )
}

export default Footer