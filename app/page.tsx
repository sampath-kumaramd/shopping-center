"use client";
import { Products } from "@/bin/products";
import CategoryList from "@/components/categories-list";
import Filter from "@/components/filter";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCardShowType } from "@/lib/enums/product-card-show";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [activeTag, setActiveTag] = useState<string>("Recentes");

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
  }

  return (
    <div className="h-auto mx-32 my-8">
      <div className=" flex justify-between items-center ">
        <div className=" font-bold text-3xl"> Mais quentes </div>
        <div className="flex space-x-1">
          <div className=" rounded-full bg-red-600 h-2 w-8"> </div>
          <div className=" rounded-full bg-gray-300 h-2 w-2"> </div>
          <div className=" rounded-full bg-gray-300 h-2 w-2"> </div>
        </div>
      </div>
      {/* <ProductCard tag="Destaques" description="A1 Mini fones de ouvido sem fio Bluetooth" image="/images/product1.svg" title="Amazon" orginalPrice={92.44} discountPrice={76.13} likes={24} addedtime="2 min" showtype={ProductCardShowType.short} /> */}

      <div className=" flex space-x-4 my-6">
        {Products.slice(0, 4).map((product) => (
          <ProductCard
            key={product.title}
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
        ))}
      </div>

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
              <div >
                his
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-4 gap-x-6 gap-y-8">
            {Products.map((product) => (
              <ProductCard
                key={product.title}
                tag={product.tag}
                description={product.description}
                image={product.image}
                title={product.title}
                orginalPrice={product.originalPrice}
                discountPrice={product.discountPrice}
                likes={product.likes}
                addedtime={product.addedTime}
                showtype={ProductCardShowType.short}
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
