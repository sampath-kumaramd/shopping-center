"use client";

import React from "react";
import { ElectronicItems, Item } from "@/bin/item";
import RangeSlider from "@/components/range-slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

function Filter() {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold">Filtros</div>

      {/* Item list */}
      {/* <div className="flex flex-col bg-[#FAFAFA] w-[22rem] rounded-lg px-8 py-6 my-4 gap-2">
        <div className="text-xl font-medium">Itens</div>
        <div>
          {ElectronicItems.map((category: Item) => {
            const ItemComponent = () => (
              <div key={category.id}>
                  <div className="text-base py-1 pl-3">{category.title}</div>
              </div>
            );
            ItemComponent.displayName = `ItemComponent${category.id}`;
            return <ItemComponent key={category.id} />;
          })}
        </div>
      </div> */}

      {/* store list */}
      <div className="flex flex-col bg-[#FAFAFA] w-[22rem] rounded-lg px-8 py-6 my-4 gap-2">
        <div className="text-xl font-medium">Faixa de preço</div>

        {/* range slider component */}
        <RangeSlider />
        <Separator className="my-2" />
        <div className="flex flex-col gap-2">
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
  );
}

export default Filter;
