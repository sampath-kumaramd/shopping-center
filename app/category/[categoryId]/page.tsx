"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Categories } from '@/bin/categories';
import { CategoriesExtraDetails } from '@/bin/categories-extra-details';
import { ButtonLabels } from '@/bin/filter-button-labels';
import { Products } from '@/bin/products';
import { ProductCardShowType } from '@/lib/enums/product-card-show';

import { Custombreadcrumb } from '@/components/bread-crumb';
import ProductCard from '@/components/product-card';
import RangeSlider from '@/components/range-slider';
import SocialMediaGroups from '@/components/social-media-groups';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

interface CategoryPageProps {
  params: { categoryId: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {

  const router = useRouter();

  let categoryId = params.categoryId;
  const category = Categories.find((category) => category.id === Number(categoryId));
  const [activeTag, setActiveTag] = useState<string>("Recentes");
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [productView, setProductView] = useState<ProductCardShowType>(ProductCardShowType.short);
  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    if (tag !== "Recentes") {
      setSelectedTag(tag);
    } else {
      setSelectedTag('');
    }
  }
  const handleProductView = (view: ProductCardShowType) => {
    setProductView(view);
  }
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setProductView(ProductCardShowType.long);
    } else {
      setProductView(ProductCardShowType.short);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className=' h-auto lg:mx-32 md:mx-16 mx-8 py-12'>
      <Custombreadcrumb title_1='Categorias' title_2={category?.title} href_2={`/category/${category?.id}`} href_1={`/category/1`} />
      <div className=" flex font-bold text-3xl my-8 gap-4">
        <div className="w-9 h-9 flex items-center justify-center">
          <Image
            src={category?.src || Categories[0].src}
            alt="About Us"
            width={40}
            height={40}
          />
        </div>
        <div>
          <h2 className="">{category?.title}</h2>
        </div>
      </div>
      <div>
        {category?.description}
      </div>
      <div className=' w-full  justify-between grid grid-cols-12 mt-16 gap-8'>
        <div className='hidden sm:block col-span-4 xl:col-span-3'>
          <div className=' -mt-8 text-2xl font-bold'>Filtros</div>
          <Card >
            <CardContent className='bg-[#FAFAFA]'>
              <div className=" font-bold text-xl pt-4">Itens</div>
              {ButtonLabels.map(label => (
                <div key={label.id} className=' my-2'>
                  <button onClick={() => router.push(`/category/${label.id}`)}>
                    {label.title}
                  </button>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className='mt-8'>
            <CardContent className='bg-[#FAFAFA]'>
              <div className="flex flex-col">
                <div className="flex flex-col   rounded-lg px-8 py-0 my-4 gap-2">
                  <div className="text-xl font-medium">Faixa de preço</div>
                  <RangeSlider />
                  <Separator className="my-2" />
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                      <div className="flex text-base pl-3">Amazon</div>
                    </div>
                    <div className="flex gap-3">
                      <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                      <div className="flex text-base pl-3"> Americanas </div>
                    </div>
                    <div className="flex gap-3">
                      <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                      <div className="flex text-base pl-3">Mercado Livre</div>
                    </div>
                    <div className="flex gap-3">
                      <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                      <div className="flex text-base pl-3">Casas Bahia</div>
                    </div>
                    <div className="flex gap-3">
                      <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                      <div className="flex text-base pl-3">Ponto</div>
                    </div>
                    <div className="flex gap-3">
                      <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                      <div className="flex text-base pl-3">Nike</div>
                    </div>
                    <div className="flex gap-3">
                      <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                      <div className="flex text-base pl-3">Adidas</div>
                    </div>
                    <div className="flex gap-3">
                      <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                      <div className="flex text-base pl-3">KaBuM!</div>
                    </div>
                    <div className="flex gap-3">
                      <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                      <div className="flex text-base pl-3">AliExpress</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <SocialMediaGroups />
        </div>
        <div className=" col-span-11 sm:col-span-8 xl:col-span-9">
          <Card className="mb-8">
            <CardContent className="pb-0 flex justify-between">
              <div className="flex space-x-4 items-center py-2 ">
                <Button onClick={() => handleTagClick("Recentes")} className={`group ${activeTag === "Recentes" ? "bg-red-500 hover:bg-red-600" : "bg-white hover:bg-red-600"} flex rounded-lg text-white items-center p-2`}>
                  <Image src={activeTag === "Recentes" ? "/icons/tag/recent.svg" : "/icons/tag/recent-black.svg"} alt="Tag Icon" width={25} height={25} />
                  <span className={`group ${activeTag === "Recentes" ? " text-white" : "text-black hover:text-white"} hidden group-hover:block  sm:block `}>
                    Recentes
                  </span>
                </Button>
                <Button onClick={() => handleTagClick("Destaques")} className={`group ${activeTag === "Destaques" ? "bg-yellow-500 hover:bg-yellow-600 text-white" : "bg-white hover:bg-yellow-600"} flex rounded-lg text-white items-center p-2`}>
                  <Image src={activeTag === "Destaques" ? "/icons/tag/fav.svg" : "/icons/tag/fav-black.svg"} alt="Tag Icon" width={25} height={25} />
                  <span className={`group ${activeTag === "Destaques" ? " text-white" : "text-black hover:text-white"} hidden group-hover:block  sm:block `}>
                    Destaques
                  </span>
                </Button>
                <Button onClick={() => handleTagClick("Desconto alto")} className={`group ${activeTag === "Desconto alto" ? "bg-green-500 hover:bg-green-600" : "bg-white hover:bg-green-600"} flex rounded-lg text-white items-center p-2`}>
                  <Image src={activeTag === "Desconto alto" ? "/icons/tag/tag.svg" : "/icons/tag/tag-black.svg"} alt="Tag Icon" width={25} height={25} />
                  <span className={`group ${activeTag === "Desconto alto" ? " text-white" : "text-black hover:text-white"} hidden group-hover:block  sm:block `}>
                    Desconto alto
                  </span>
                </Button>
                <Button onClick={() => handleTagClick("Mais curtidas")} className={`group ${activeTag === "Mais curtidas" ? "bg-blue-500 hover:bg-blue-600" : "bg-white hover:bg-blue-600"} flex rounded-lg text-white items-center p-2`}>
                  <Image src={activeTag === "Mais curtidas" ? "/icons/tag/heart.svg" : "/icons/tag/heart-black.svg"} alt="Tag Icon" width={25} height={25} />
                  <span className={`group ${activeTag === "Mais curtidas" ? " text-white" : "text-black hover:text-white"} hidden group-hover:block  sm:block `}>
                    Mais curtidas
                  </span>
                </Button>
              </div>
              <div className=" flex space-x-4 items-center">
                <Button onClick={() => handleProductView(ProductCardShowType.short)} className={productView === ProductCardShowType.short ? " p-2" : " bg-white p-2"}>
                  <Image src={productView === ProductCardShowType.short ? "/icons/grid-white.svg" : "/icons/grid.svg"} alt="grid Icon" width={25} height={25} />
                </Button>
                <Button onClick={() => handleProductView(ProductCardShowType.long)} className={productView === ProductCardShowType.long ? "p-2 " : " p-2 bg-white"}>
                  <Image src={productView === ProductCardShowType.long ? "/icons/list-white.svg" : "/icons/list.svg"} alt="list Icon" width={25} height={25} />
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className={productView === ProductCardShowType.long ? " space-y-2" : "grid 2xl:grid-cols-4 xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-y-8 justify-around  justify-items-center"}>
            {Products
              .filter(product => selectedTag === '' || product.tag === selectedTag)
              .slice(0, 8)
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
                  showtype={productView}
                />
              ))}
          </div>
          <Card className=" my-8">
            <CardContent className="border-dashed  border-2 items-center flex justify-center h-52 p-0">
              ADS
            </CardContent>
          </Card>
          <div className={productView === ProductCardShowType.long ? " space-y-2" : "grid 2xl:grid-cols-4 xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-y-8 justify-around  justify-items-center"}>
            {Products
              .filter(product => selectedTag === '' || product.tag === selectedTag)
              .slice(0, 8)
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
                  showtype={productView}
                />
              ))}
          </div>
          <Card className=" my-8 p-2">
            <CardContent className="p-2">
              <div>{category?.moreDetails}</div>
              <div>
                {CategoriesExtraDetails.map((details) => (
                  <div key={details.id} className="my-4">
                    <h2 className="text-2xl font-bold">{details.title}</h2>
                    <ol className="list-disc list-inside mx-4">
                      {details.content.map((detail, index) => (
                        <li key={index} className="my-2">{detail}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
              <div>Não perca nossas ofertas limitadas e aproveite para atualizar seus gadgets favoritos sem gastar uma fortuna. Compre agora e embarque na jornada da tecnologia com economia e estilo.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div >
  )
}
