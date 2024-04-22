"use client";
import { Products } from "@/bin/products";
import CategoryList from "@/components/categories-list";
import Filter from "@/components/filter";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCardShowType } from "@/lib/enums/product-card-show";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Categories, Category } from "@/bin/categories";
import RangeSlider from "@/components/range-slider";
import { Separator } from "@radix-ui/react-separator";
import { Store, Stores } from "@/bin/stores";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {

  const [activeTag, setActiveTag] = useState<string>("Recentes");
  const [productView, setProductView] = useState<ProductCardShowType>(ProductCardShowType.short);
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
      console.log(api.selectedScrollSnap(), ' count')
    })
  }, [api])

  const handleProductView = (view: ProductCardShowType) => {
    setProductView(view);
  }

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
  }
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setProductView(ProductCardShowType.mini);
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
    <div className="h-auto 2xl:mx-32 xl:mx-20 lg:mx-16 mx-4   my-8">
      <div className=" flex justify-between items-center ">
        <div className=" font-bold text-3xl mb-4"> Mais quentes </div>
        {
          api ? (
            <div className="flex space-x-1">
              <div className={`rounded-full h-2 w-2 ${api.selectedScrollSnap() < 4 ? 'bg-red-600 w-8' : 'bg-gray-300 w-2'}`}></div>
              <div className={`rounded-full h-2 w-2 ${api.selectedScrollSnap() >= 4 && api.selectedScrollSnap() < 8 ? 'bg-red-600 w-8' : 'bg-gray-300 w-2'}`}></div>
              <div className={`rounded-full h-2 w-2 ${api.selectedScrollSnap() >= 8 ? 'bg-red-600 w-8' : 'bg-gray-300 w-2'}`}></div>
            </div>
          ) : null
        }
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        setApi={setApi}
        className="w-[75vw] sm:w-[85vw] mx-4 md:w-[80vw]"
      >
        <CarouselContent>
          {Products.slice(0, 12).map((product, index) => (
            <CarouselItem key={`${product.id}-${product.title}`} className="lg:basis-1/2  2xl:basis-1/4 xl:basis-1/3 basis-full">
              <div className="p-1">
                <ProductCard
                  tag={product.tag}
                  description={product.description}
                  image={product.image}
                  title={product.title}
                  orginalPrice={product.originalPrice}
                  discountPrice={product.discountPrice}
                  likes={product.likes}
                  addedtime={product.addedTime}
                  showtype={ProductCardShowType.mini}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="mt-12 mb-6 text-3xl font-bold">Todas as ofertas</div>
      <div className=" grid grid-cols-12 space-x-12 sm:justify-between justify-center">
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
          <div className={productView === ProductCardShowType.long ? " space-y-2" : "grid 2xl:grid-cols-4 xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8"}>
            {Products.slice(0, 8).map((product) => (
              <ProductCard
                key={`${product.id}-${product.title}`}
                tag={product.tag}
                description={product.description}
                image={product.image}
                title={product.title}
                orginalPrice={product.originalPrice}
                discountPrice={product.discountPrice}
                likes={product.likes}
                addedtime={product.addedTime}
                showtype={productView}
              />
            ))}
          </div>
          <Card className=" my-8">
            <CardContent className="border-dashed  border-2 items-center flex justify-center h-52 p-0">
              ADS
            </CardContent>
          </Card>

          <div className={productView === ProductCardShowType.long ? " space-y-2" : "grid 2xl:grid-cols-4 xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8"}>
            {Products.slice(0, 8).map((product) => (
              <ProductCard
                key={`${product.id}-${product.title}`}
                tag={product.tag}
                description={product.description}
                image={product.image}
                title={product.title}
                orginalPrice={product.originalPrice}
                discountPrice={product.discountPrice}
                likes={product.likes}
                addedtime={product.addedTime}
                showtype={productView}
              />
            ))}
          </div>

        </div>
        <div className="hidden sm:block col-span-4 xl:col-span-3 space-y-8">
          <div className="flex flex-col">
            <div className="text-2xl font-bold">Categorias</div>
            <div className="flex flex-col bg-[#FAFAFA] rounded-lg p-8 my-4 gap-5">
              {Categories.map((category: Category) => {
                const CategoryComponent = () => (
                  <div key={category.id} className="flex gap-3">
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
                  </div>
                );
                CategoryComponent.displayName = `CategoryComponent${category.id}`;
                return <CategoryComponent key={category.id} />;
              })}
            </div>
          </div>
          <Card>
            <CardContent className=" border-dashed  border-2 items-center flex justify-center h-52 p-0">
              ADS
            </CardContent>
          </Card>
          <div className="flex flex-col">
            <div className="text-2xl font-bold">Filtros</div>
            <div className="flex flex-col bg-[#FAFAFA] w-[22vw] rounded-lg px-8 py-6 my-4 gap-2">
              <div className="text-xl font-medium">Faixa de preço</div>
              <RangeSlider />
              <Separator className="my-2" />
              <div className="flex flex-col gap-2">
                {Stores.map((category: Store, index: number) => {
                  const StoreComponent = () => (
                    <div key={`${category.id}-${index}`}>
                      <div className="flex gap-3">
                        <Checkbox className="border rounded-none border-black bg-white h-4 w-4 my-1" />
                        <div className="flex text-base pl-3">{category.title}</div>
                      </div>
                    </div>
                  );
                  StoreComponent.displayName = `StoreComponent${category.id}`;
                  return <StoreComponent key={`${category.id}-${index}`} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div><SocialMediaGroups /></div> */}
    </div>
  );
}
