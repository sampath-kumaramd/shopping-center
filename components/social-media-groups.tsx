import React from "react";
import Image from "next/image";
import Link from "next/link";

function SocialMediaGroups() {
  return (
    <div className="flex flex-col bg-[#FAFAFA] w-full rounded-lg px-8 py-6 my-4 gap-3 justify-center items-center">
      <div className="text-xl font-medium">Fique por dentro</div>
      <div className="text-lg font-normal text-[#514D4D] text-center mb-3">
        Entre nos grupos e saiba das promoções em tempo real.
      </div>
      <Link href="" className="flex gap-3 border-2 border-[#68AD2B] rounded-full w-full justify-center items-center py-2">     
          <Image
            src="/icons/whatsapp-green.svg"
            alt="telegram"
            width={35}
            height={35}
          />
        <div className="text-[#68AD2B] font-bold text-2xl py-1">Whatsapp</div>
      </Link>
      <Link href="" className="flex gap-3 border-2 border-[#307AC4] rounded-full w-full justify-center items-center py-2">     
          <Image
            src="/icons/telegram-blue.svg"
            alt="telegram"
            width={35}
            height={35}
          />
        <div className="text-[#307AC4] font-bold text-2xl py-1">Telegram</div>
      </Link>
    </div>
  );
}

export default SocialMediaGroups;
