"use client"
import { Categories, Category } from '@/bin/categories';
import { CategoriesExtraDetails } from '@/bin/categories-extra-details';
import { ButtonLabels } from '@/bin/filter-button-labels';
import { Products } from '@/bin/products';
import { Store, Stores } from '@/bin/stores';
import { Custombreadcrumb } from '@/components/bread-crumb';
import ProductCard from '@/components/product-card';
import RangeSlider from '@/components/range-slider';
import SocialMediaGroups from '@/components/social-media-groups';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { ProductCardShowType } from '@/lib/enums/product-card-show';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


interface CategoryPageProps {
  params: { categoryId: string, productId: string };
}
export default function CategoryPage({ params }: CategoryPageProps) {
  let categoryId = Number(params.categoryId);
  let productId = params.productId;

  let product = Products[0];
  let category = Categories.find(c => c.id === categoryId);

  const router = useRouter();

  return (
    <div className=' h-auto lg:mx-32 md:mx-16 mx-8 py-12'>
      <Custombreadcrumb title_1='Categorias' title_2={category?.title} title_3={product.title} href_2={`/category/${category?.id}`} href_1={`/category/${category?.id}`} href_3={`/category/${category?.id}/${product?.id}`} />

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
        showtype={ProductCardShowType.large}
        className=' my-8'
      />
      <div className=' w-full  justify-between grid grid-cols-12 mt-16'>
        <div className='hidden sm:block col-span-8 xl:col-span-9'>

          <Card>
            <CardContent className=' p-4'>
              <Tabs defaultValue="A promoção" className="w-full">
                <TabsList>
                  <TabsTrigger value="A promoção">A promoção</TabsTrigger>
                  <TabsTrigger value="Informação do Produto">Informação do Produto</TabsTrigger>
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

          <div className=' font-bold text-2xl'>
            Produtos semelhantes pra você
          </div>
          <div className=' flex space-x-4'>
            {Products
              .slice(0, 3)
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
                  showtype={ProductCardShowType.mini}
                />
              ))}
          </div>
        </div>

        <div className='hidden sm:block col-span-4 xl:col-span-3 space-y-8'>
          <Card>
            <CardContent className="border-dashed  border-2 items-center flex justify-center h-52 p-0">
              ADS
            </CardContent>
          </Card>
          <div className="flex flex-col">
            <div className="text-2xl font-bold">Categorias</div>
            <div className="flex flex-col bg-[#FAFAFA] rounded-lg p-8 my-4 gap-5">
              {Categories.map((category: Category) => {
                const CategoryComponent = () => (
                  <button key={category.id} className="flex gap-3" onClick={() => router.push(`category/${category.id}`)}>
                    <div className="w-9 h-9 bg-[#E7E7E7] rounded-full flex items-center justify-center">
                      <Image
                        src={category.src}
                        alt="About Us"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium py-1">{category.title}</h2>
                    </div>
                  </button>
                );
                CategoryComponent.displayName = `CategoryComponent${category.id}`;
                return <CategoryComponent key={category.id} />;
              })}
            </div>
          </div>
          <SocialMediaGroups />
        </div>

      </div>





    </div >
  )
}
