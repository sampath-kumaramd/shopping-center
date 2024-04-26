"use client";

import React from "react";

import RangeSlider from "@/components/range-slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

function Filter() {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold">Filtros</div>
      <div className="flex flex-col bg-[#FAFAFA] w-[22rem] rounded-lg px-8 py-6 my-4 gap-2">
        <div className="text-xl font-medium">Faixa de preço</div>
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
