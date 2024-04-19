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
    <div className="h-auto mx-32 my-8">
      <div className=" flex justify-between items-center ">
        <div className=" font-bold text-3xl"> Mais quentes </div>
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
        className="w-full"
      >
        <CarouselContent>
          {Products.slice(0, 12).map((product, index) => (
            <CarouselItem key={`${product.id}-${product.title}`} className="md:basis-1/4 lg:basis-1/4 basis-1">
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
      <div className=" flex space-x-8 ">
        <div>
          <Card className="w-[75rem] my-8">
            <CardContent className="pb-0 flex justify-between">
              <div className="flex space-x-4 items-center py-2 ">
                <Button onClick={() => handleTagClick("Recentes")} className={activeTag === "Recentes" ? "bg-red-500 hover:bg-red-600 flex rounded-lg text-white items-center p-2" : " bg-white hover:bg-red-600 flex rounded-lg text-black items-center p-2"}>
                  <Image src={activeTag === "Recentes" ? "/icons/tag/recent.svg" : "/icons/tag/recent-black.svg"} alt="Tag Icon" width={25} height={25} />Recentes
                </Button>
                <Button onClick={() => handleTagClick("Destaques")} className={activeTag === "Destaques" ? "bg-yellow-500 hover:bg-yellow-600 flex rounded-lg text-white items-center p-2" : " bg-white hover:bg-yellow-600 flex rounded-lg text-black items-center p-2"}>
                  <Image src={activeTag === "Destaques" ? "/icons/tag/fav.svg" : "/icons/tag/fav-black.svg"} alt="Tag Icon" width={25} height={25} />Destaques
                </Button>
                <Button onClick={() => handleTagClick("Desconto alto")} className={activeTag === "Desconto alto" ? "bg-green-500 hover:bg-green-600 flex rounded-lg text-white items-center p-2" : " bg-white  hover:bg-green-600 flex rounded-lg text-black items-center p-2"}>
                  <Image src={activeTag === "Desconto alto" ? "/icons/tag/tag.svg" : "/icons/tag/tag-black.svg"} alt="Tag Icon" width={25} height={25} />Desconto alto
                </Button>
                <Button onClick={() => handleTagClick("Mais curtidas")} className={activeTag === "Mais curtidas" ? "bg-blue-500 hover:bg-blue-600 flex rounded-lg text-white items-center p-2" : " bg-white  hover:bg-blue-600 flex rounded-lg text-black items-center p-2"}>
                  <Image src={activeTag === "Mais curtidas" ? "/icons/tag/heart.svg" : "/icons/tag/heart-black.svg"} alt="Tag Icon" width={25} height={25} />Mais curtidas
                </Button>
              </div>
              <div className=" flex space-x-4 items-center">
                <Button onClick={() => handleProductView(ProductCardShowType.short)} className={productView === ProductCardShowType.short ? " " : " bg-white"}>
                  <Image src={productView === ProductCardShowType.short ? "/icons/grid-white.svg" : "/icons/grid.svg"} alt="grid Icon" width={25} height={25} />
                </Button>
                <Button onClick={() => handleProductView(ProductCardShowType.long)} className={productView === ProductCardShowType.long ? " " : " bg-white"}>
                  <Image src={productView === ProductCardShowType.long ? "/icons/list-white.svg" : "/icons/list.svg"} alt="list Icon" width={25} height={25} />
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className={productView === ProductCardShowType.long ? " space-y-4" : "grid grid-cols-4 gap-x-6 gap-y-8"}>
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

          <div className={productView === ProductCardShowType.long ? " space-y-4" : "grid grid-cols-4 gap-x-6 gap-y-8"}>
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
        <div className=" space-y-8">
          <CategoryList />
          <Card>
            <CardContent className=" border-dashed  border-2 items-center flex justify-center h-52 p-0">
              ADS
            </CardContent>
          </Card>
          <div><Filter /></div>
        </div>
      </div>


      {/* <div><SocialMediaGroups /></div> */}
    </div>
  );
}
