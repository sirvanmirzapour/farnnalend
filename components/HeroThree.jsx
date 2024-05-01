import Image from "next/image";
import card from "@/assets/images/card2.webp";
function HeroThree() {
  return (
    <div className="flex flex-row justify-center items-center container mx-auto">
      <Image
        src={card}
        alt="Logo"
        className="w-80 ml-10 md:mt-5 hover:-translate-x-1 ease-in-out duration-200 "
      />
      <div className="text-purple-950 p-8 rounded-lg  ">
        <div className="py-4">
          <h3 className="text-purple-900 text-2xl font-bold">فرنالند چیست؟</h3>
        </div>
        <p className="text-purple-700 mt-2 mb-4">
          فرنالند زیر مجموعه فروشگاه اینترنتی فرنا است، از طریق فرنالند می
          توانید وام بدون ضامن بگیرید و از فرنا خرید هر کالای که دوست داشته
          باشید خرید کنید
        </p>
      </div>
    </div>
  );
}

export default HeroThree;
