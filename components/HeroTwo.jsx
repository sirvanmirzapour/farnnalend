import Image from "next/image";
import card from "@/assets/images/card2.webp";
function HeroTwo() {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto p-20 sm:flex-row">
      <Image
        src={card}
        alt="Logo"
        className="w-80 ml-10 md:mt-5 hover:-translate-y-2 ease-in-out duration-300 "
      />
      <div className="text-purple-950 p-8 rounded-lg  ">
        <h3 className="text-purple-950 text-3xl font-bold py-4">
          فرنالند چیست؟
        </h3>
        <p className="text-purple-900 mt-2 mb-4 text-2xl">
          فرنالند زیر مجموعه فروشگاه اینترنتی فرنا است، از طریق فرنالند می
          توانید وام بدون ضامن بگیرید و از فرنا هر کالای که دوست داشته باشید
          خرید کنید
        </p>
      </div>
    </div>
  );
}

export default HeroTwo;
