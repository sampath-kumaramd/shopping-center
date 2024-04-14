import { Custombreadcrumb } from "@/components/bread-crumb";
import CategoryList from "@/components/categories-list";
import Filter from "@/components/filter";
import SocialMediaGroups from "@/components/social-media-groups";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-auto mx-32 my-8">
      <div>Home page</div>
      {/* <div><CategoryList/></div> */}
      {/* <div><Filter/></div> */}
      <div><SocialMediaGroups/></div>
    </div>
  );
}
