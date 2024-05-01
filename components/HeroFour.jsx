import Image from "next/image";
import card from "@/assets/images/home.webp";
function HeroFour() {
  return (
    <div className="container mx-auto rounded-3xl bg-purple-50 flex flex-col sm:flex-row sm:my-4 justify-between items-center px-10 shadow-md m-6">
      <div className="flex justify-center items-center flex-col flex-1 ">
        <h3 className="text-purple-900 text-2xl font-bold">
          برای وام چه مدارکی لازمه؟
        </h3>
        <button
          type="button"
          id="mobile-dropdown-button"
          className="relative inline-flex items-center justify-center rounded-2xl p-2 text-purple-50 border-2 bg-purple-900 m-4 px-4 hover:-translate-y-1 ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          مدارک مورد نیاز
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <Image
        src={card}
        alt="Logo"
        className="ml-10 md:mt-5 hover:-translate-y-1 ease-in-out duration-200"
      />
    </div>
  );
}

export default HeroFour;
