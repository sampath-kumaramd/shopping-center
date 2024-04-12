import { Custombreadcrumb } from '@/components/bread-crumb'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

function ContactUsPage() {
  return (
    <div className=' h-auto lg:mx-32 md:mx-16 mx-8 py-12'>

      <Custombreadcrumb title_1="Fale conosco" href_1="/contact-us" />
      <div className="sm:flex justify-between md:mr-24">
        <div className="mt-8 space-y-6">
          <div className="text font-medium">FALE CONOSCO</div>
          <div className=" text-3xl md:text-5xl font-semibold leading-snug">Como podemos te <br /> ajudar?</div>
          <div className=" text-lg font-medium">Se tem alguma dúvida, crítica, sugestão ou  <br /> parceria, entre em contato.</div>
          <div className="flex space-x-4 justify-center sm:justify-start">
            hi
          </div>
        </div>
        <div className="mt-8  sm:mt-0">
          <Image src="/images/contact-us.png" alt="About Us" width={500} height={500} />
        </div>
      </div>

      <Separator className='my-8' />

      <div className=' flex flex-col justify-center text-center space-y-4'>
        <div className=' font-semibold text-3xl'>
          Perguntas frequentes
        </div>
        <div className=' text-lg'>
          Principais perguntas que podem te ajudar a sanar sua dúvida <br/> sobre as promoções no Eu Amo Desconto
        </div>

      </div>
    </div>
  )
}

export default ContactUsPage