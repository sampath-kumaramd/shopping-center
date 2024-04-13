import { Custombreadcrumb } from "@/components/bread-crumb";
import CategoryList from "@/components/categories-list";
import Filter from "@/components/filter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen mx-32 my-8">
      <div>Home page</div>
      {/* <div><CategoryList/></div> */}
      <div><Filter/></div>
    </div>
  );
}
