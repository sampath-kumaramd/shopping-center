"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Categories, Category } from '@/bin/categories';
import { Products } from '@/bin/products';
import { ProductCardShowType } from '@/lib/enums/product-card-show';

import { Custombreadcrumb } from '@/components/bread-crumb';
import ProductCard from '@/components/product-card';
import SocialMediaGroups from '@/components/social-media-groups';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from '@/components/ui/input';
import CommentCard from '@/components/comment-card';
interface CategoryPageProps {
  params: { categoryId: string, productId: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  let categoryId = Number(params.categoryId);
  let productId = params.productId;
  let product = Products[0];
  let category = Categories.find(c => c.id === categoryId);

  const [productCount, setProductCount] = useState<number>(0);
  const [productView, setProductView] = useState<ProductCardShowType>(ProductCardShowType.large);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setProductView(ProductCardShowType.largeMobile);
      setProductCount(1);
    } else if (window.innerWidth <= 900) {
      setProductCount(1);
      setProductView(ProductCardShowType.large);
    } else if (window.innerWidth <= 1300) {
      setProductCount(2);
      setProductView(ProductCardShowType.large);
    } else if (window.innerWidth <= 1700) {
      setProductCount(3);
      setProductView(ProductCardShowType.large);
    } else {
      setProductCount(4);
      setProductView(ProductCardShowType.large);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const router = useRouter();

  return (
    <div className=' h-auto 2xl:mx-32 xl:mx-20 lg:mx-16 mx-4 py-12'>
      <Custombreadcrumb title_1='Categorias' title_2={category?.title} title_3={product.subTitle} href_2={`/category/${category?.id}`} href_1={`/category/${category?.id}`} href_3={`/category/${category?.id}/${product?.id}`} />
      <ProductCard
        id={product.id}
        categoryId={product.categoryId}
        discription={product.discription}
        key={`${product.id}-${product.title}`}
        tag={product.tag}
        subTitle={product.subTitle}
        image={product.image}
        title={product.title}
        orginalPrice={product.originalPrice}
        discountPrice={product.discountPrice}
        likes={product.likes}
        addedtime={product.addedTime}
        comments={product.comment.length}
        showtype={productView}
        className=' my-8'
      />
      <div className=' w-full  justify-between sm:grid sm:grid-cols-12 mt-8 gap-16'>
        <div className='sm:col-span-8 xl:col-span-9 space-y-8'>
          <Card>
            <CardContent className=' p-4'>
              <Tabs defaultValue="A promoção" className="w-full">
                <TabsList className=' bg-white'>
                  <TabsTrigger value="A promoção" className=' bg-white'>A promoção</TabsTrigger>
                  <TabsTrigger value="Informação do Produto" className=' bg-white'>Informação do Produto</TabsTrigger>
                </TabsList>
                <TabsContent value="A promoção">
                  <ul style={{ listStyleType: 'disc' }} className=' ml-11 space-y-1'>
                    <li>A promoção é válida apenas para compras realizadas enquanto durarem os estoques.</li>
                    <li>O desconto de R$ 16,31 será aplicado automaticamente no momento da compra, sem a necessidade de inserir um código promocional.</li>
                    <li>Cada cliente pode comprar até um máximo de cinco unidades do TOZO A1 Mini com o desconto promocional.</li>
                    <li>A promoção é aplicável apenas para compras realizadas através do site oficial da loja ou de parceiros autorizados, não sendo válida para compras em lojas físicas.</li>
                    <li>Esta promoção não pode ser combinada com outras ofertas ou descontos.</li>
                    <li>O desconto promocional não afeta os custos de envio e manuseio, que serão aplicados conforme a política de entrega da loja.</li>
                  </ul>
                </TabsContent>
                <TabsContent value="Informação do Produto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Vel fringilla est ullamcorper eget. Posuere morbi leo urna molestie at elementum eu facilisis sed. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Ipsum consequat nisl vel pretium lectus quam id leo. Semper risus in hendrerit gravida rutrum. Quam adipiscing vitae proin sagittis. Tempor commodo ullamcorper a lacus vestibulum. Integer vitae justo eget magna. Ac turpis egestas maecenas pharetra convallis posuere morbi leo.
                  Egestas sed sed risus pretium quam vulputate. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Vulputate mi sit amet mauris commodo quis imperdiet. </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="rounded-xl p-5  space-y-6">
              <div className='flex space-x-4'>
                <Image src="/icons/tag/chat-circle.svg" alt='ds' width={20} height={20} /> <div className=' font-bold text-xl'>Comentários ({product.comment.length}) </div>
              </div>
              <div className=' flex space-x-4'>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex w-full items-center space-x-2">
                  <Input type="text" placeholder="Faça um comentário..." />
                  <Button variant="outline" type="submit" className=' border-primary border-2 rounded-full'>Comentar</Button>
                </div>
              </div>
              <Separator />
              <div>Todos os comentários</div>
              {product.comment.map((comment) => (
                <CommentCard
                  key={comment.id}
                  userName={comment.userName}
                  userImage={comment.userImage}
                  comment={comment.comment}
                />
              ))
              }
              <CommentCard
                userName='Carlos Nascimento'
                userImage='https://github.com/shadcn.png'
                comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              />
            </CardContent>
          </Card>
          <div className=' font-bold text-2xl'>
            Produtos semelhantes pra você
          </div>
          <div className=' flex space-x-4'>
            {Products
              .slice(0, productCount)
              .map((product) => (
                <ProductCard
                  id={product.id}
                  categoryId={product.categoryId}
                  discription={product.discription}
                  key={`${product.id}-${product.title}`}
                  tag={product.tag}
                  subTitle={product.subTitle}
                  image={product.image}
                  title={product.title}
                  orginalPrice={product.originalPrice}
                  discountPrice={product.discountPrice}
                  likes={product.likes}
                  addedtime={product.addedTime}
                  comments={product.comment.length}
                  showtype={ProductCardShowType.mini}
                />
              ))}
          </div>
        </div>
        <div className='mt-10 sm:mt-0 sm:block sm:col-span-4 xl:col-span-3 space-y-8'>
          <Card>
            <CardContent className="border-dashed  border-2 items-center flex justify-center h-52 p-0">
              ADS
            </CardContent>
          </Card>
          <div className="hidden sm:flex flex-col">
            <div className="text-2xl font-bold">Categorias</div>
            <div className="flex flex-col bg-[#FAFAFA] rounded-lg p-8 my-4 gap-5">
              {Categories.map((category: Category) => {
                const CategoryComponent = () => (
                  <button key={category.id} className="flex gap-3 group" onClick={() => router.push(`/category/${category.id}`)}>
                    <div className="w-9 h-9 bg-[#E7E7E7] group-hover:bg-red-500 rounded-full flex items-center justify-center">
                      <Image
                        src={category.src}
                        alt="About Us"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium py-1 group-hover:text-red-500">{category.title}</h2>
                    </div>
                  </button>
                );
                CategoryComponent.displayName = `CategoryComponent${category.id}`;
                return <CategoryComponent key={category.id} />;
              })}
            </div>
          </div>
          <SocialMediaGroups />
          <Card className=' hidden sm:block'>
            <CardContent className="items-center bg-primary rounded-xl  flex flex-col justify-center h-44 p-0 text-white space-y-4">
              <div>
                <div className=' text-gray-300 text-center'>R$ {product.originalPrice}</div>
                <div className=' text-white text-4xl font-semibold'>R$ {product.discountPrice}</div>
              </div>
              <div><Button className=' rounded-full flex space-x-2 px-16 bg-white hover:bg-white text-primary'>
                <div>Ir para a loja</div>
                <Image src="/icons/arrow-out-red.svg" alt='icon' width={20} height={20} />
              </Button></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div >
  )
}
