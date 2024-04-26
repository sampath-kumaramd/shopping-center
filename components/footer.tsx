"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link";

import { Separator } from './ui/separator';
import { Icons } from './icons';

function Footer() {
  const [isFooterVisible, setFooterVisible] = useState(true);
  const toggleFooter = () => {
    setFooterVisible(!isFooterVisible);
  };

  return (
    <div className='bg-[#171211] text-white  sm:h-80 h-auto'>
      <div className='lg:px-32 md:px-8 px-8 py-6 sm:flex justify-between'>
        <div className=' sm:hidden mb-8 flex justify-center gap-4'>
          <button className='flex' onClick={toggleFooter}>
            {isFooterVisible ? 'Esconder rodapé' : 'Mostrar rodapé'}
            {isFooterVisible ? <Icons.ChevronDown /> : <Icons.ChevronUp />}
          </button>
        </div>
        <div className={`space-y-4 ${isFooterVisible ? '' : 'hidden'}`}>
          <Image src='/icons/logo.png' alt='logo' width={200} height={42} />
          <div >Economia a um clique.</div>
        </div>
        <div className={`space-y-4 mt-10 sm:mt-0 ${isFooterVisible ? '' : 'hidden'}`}>
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
        <div className={`md:mr-4 lg:mr-72 mt-10 sm:mt-0 space-y-5 ${isFooterVisible ? '' : 'hidden'}`}>
          <div className='text-xl font-semibold'>Siga a gente</div>
          <div className='flex space-x-4'>
            <Image src='/icons/logo/telegram.svg' alt='telegram' width={35} height={35} />
            <Image src='/icons/logo/whatsapp.svg' alt='whatsapp' width={35} height={35} />
            <Image src='/icons/logo/facebook.svg' alt='facebook' width={35} height={35} />
            <Image src='/icons/logo/instagram.svg' alt='instagram' width={35} height={35} />
          </div>
          <Image src='/images/google-safe-browsing.svg' alt='qr-code' width={190} height={190} />
        </div>
      </div>
      <div className={`flex justify-center sm:px-32 px-4 ${isFooterVisible ? '' : 'hidden'}`}>
        <Separator className='w-full  bg-gray-600' />
      </div>
      <div className={`text-center text-sm sm:text-base mt-6 text-gray-600 pb-4 sm:pb-0 ${isFooterVisible ? '' : 'hidden'}`}>
        © Todos os direitos reservados Eu Amo Descontos - 2024
      </div>
    </div>
  )
}

export default Footer