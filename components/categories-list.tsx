import { Categories, Category } from "@/bin/categories";
import Image from "next/image";
import React from "react";

function CategoryList() {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold">Categorias</div>
      <div className="flex flex-col bg-[#FAFAFA] w-[22rem] rounded-lg p-8 my-4 gap-5">
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
  );
}

export default CategoryList;
