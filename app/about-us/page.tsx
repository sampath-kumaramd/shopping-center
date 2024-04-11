import { Custombreadcrumb } from "@/components/bread-crumb"
import Image from "next/image"

function AboutUsPage() {
    const imageList = [
        {
            src: "/icons/telegram-black.png",
            alt: "telegram",
        },
        {
            src: "/icons/whatsapp-black.png",
            alt: "whatsapp",
        },
        {
            src: "/icons/facebook-black.png",
            alt: "facebook",
        },
        {
            src: "/icons/instagram-black.png",
            alt: "instagram",
        },
    ]
    return (
        <div className=' h-auto lg:mx-32 md:mx-16 mx-8 py-12'>

            <Custombreadcrumb title_1="Sobre nós" href_1="/about-us" />

            <div className="sm:flex justify-between md:mr-24">
                <div className="mt-8 space-y-6">
                    <div className="text font-medium">SOBRE NÓS</div>
                    <div className=" text-3xl md:text-5xl font-semibold leading-snug">Bem-vindo ao <br />
                        Eu Amo Desconto</div>
                    <div className=" text-lg font-medium">Seu parceiro confiável para economizar dinheiro <br />
                        enquanto faz compras online!</div>
                    <div className="flex space-x-4 justify-center sm:justify-start">
                        {imageList.map((image, index) => {
                            return (
                                <Image key={index} src={image.src} alt={image.alt} width={35} height={35} />
                            )
                        })}
                    </div>
                </div>
                <div className="mt-8  sm:mt-0">
                    <Image src="/images/about-us-hand-with-coin.png" alt="About Us" width={500} height={500} />
                </div>
            </div>
            <div className=" space-y-6 my-6">
                <div>
                    Criado com a missão de tornar o ato de economizar dinheiro mais acessível e gratificante, o Eu Amo Desconto é um destino abrangente para os consumidores que buscam <b>as melhores ofertas, cupons e descontos </b>  em uma variedade de produtos e serviços.
                </div>
                <div>
                    Nossa jornada começou com a paixão por encontrar oportunidades de economia e compartilhá-las com outras pessoas. Movidos por esse espírito, construímos uma comunidade vibrante de compradores inteligentes e amantes de descontos que buscam maximizar o valor de cada compra que fazem.
                </div>
                <div>

                    O Eu Amo Desconto oferece uma experiência de compra única, onde você pode explorar uma ampla gama de ofertas cuidadosamente selecionadas em categorias como eletrônicos, moda, casa e decoração, viagens, alimentos e muito mais. Nosso compromisso em fornecer ofertas verificadas e atualizadas regularmente garante que você sempre encontre oportunidades autênticas de economia ao navegar em nosso site.
                </div>
                <div>
                    Além disso, entendemos a importância da transparência e confiança em todas as interações com nossos usuários. É por isso que nos esforçamos para fornecer informações claras e imparciais sobre cada oferta, permitindo que você tome decisões informadas e seguras ao fazer suas compras online.
                </div>
                <div>

                    No Eu Amo Desconto, acreditamos que economizar dinheiro não se trata apenas de pagar menos, mas sim de maximizar o valor de cada compra e proporcionar uma experiência satisfatória ao consumidor. Junte-se a nós hoje e comece a desfrutar das vantagens de economizar dinheiro enquanto aproveita uma experiência de compras online mais inteligente e gratificante.
                </div>
            </div>

            <div className=" grid justify-center">
                <div className="text-center mt-8  space-y-4">
                    <div className=" font-semibold">O QUE ACREDITAMOS</div>
                    <div className=" text-4xl font-medium" >A economia pode estar <br /> a um clique</div>
                </div>

                <div className=" sm:flex space-x-4 my-10">
                    <div className="md:w-[25vw] lg:w-[17vw] flex flex-col items-center p-4 text-center ">
                        <div><Image src="/images/about-us-mountains.png" alt="About Us" width={80} height={80} /></div>
                        <div className="font-bold my-3">MISSÃO</div>
                        <div>Fornecer o produto desejado no preço mais baixo possível, direcionando você ao marketplace para que possa escolher como e quando fechar suas compras.</div>
                    </div>
                    <div className="md:w-[25vw] lg:w-[17vw] flex flex-col items-center p-4 text-center bg-[#e2521a]  rounded-lg text-white">
                        <div><Image src="/images/about-us-eye.png" alt="About Us" width={80} height={80} /></div>
                        <div className="font-bold my-3">VISÃO</div>
                        <div>Nos tornarmos um grande parceiro dos marketplaces, obtendo um canal direto para a divulgação de produtos com descontos e cupons exclusivos.</div>
                    </div>
                    <div className="md:w-[25vw] lg:w-[17vw] flex flex-col items-center p-4 text-center ">
                        <div><Image src="/images/about-us-sketch.png" alt="About Us" width={80} height={80} /></div>
                        <div className="font-bold my-3">VALORES</div>
                        <div>Valorizamos a transparência e a honestidade em todas as nossas interações com consumidores e parceiros.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUsPage