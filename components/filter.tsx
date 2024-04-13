import React from "react";
import { Stores, Store } from "@/bin/stores";
import { ElectronicItems, Item } from "@/bin/item";

function Filter() {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl font-bold">Filtros</div>

      {/* Item list */}
      <div className="flex flex-col bg-[#dfdfdf] w-[22rem] rounded-lg p-8 my-4 gap-5">
        <div className="text-xl font-medium">Itens</div>
        <div>
          {ElectronicItems.map((category: Item) => {
            const ItemComponent = () => (
              <div key={category.id}>
                <div>
                  <h2 className="text-lg py-1 pl-3">{category.title}</h2>
                </div>
              </div>
            );
            ItemComponent.displayName = `ItemComponent${category.id}`;
            return <ItemComponent key={category.id} />;
          })}
        </div>
      </div>

      {/* store list */}
      <div className="flex flex-col bg-[#d3d3d3] w-[22rem] rounded-lg p-8 my-4 gap-5">
        world
      </div>
    </div>
  );
}

export default Filter;
