import Image from "next/image";
import logo from "@/assets/images/farranlend-farsi.webp";
import Link from "next/link";

function page() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-purple-100">
      <div className="container m-auto max-w-lg py-24 ">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-3xl border m-4 md:m-0">
          <div className="flex justify-center m-4">
            <Image
              className="h-10 w-auto"
              src={logo}
              alt="PropertyPulse"
              priority
            />
          </div>
          <form>
            <div className="flex px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 m-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>

              <h2 className="text-lg text-purple-950 text-center font-semibold mb-6 mr-4">
                ورود کد تایید
              </h2>
            </div>

            <div className="mb-4">
              <div className=" border rounded-xl bg-purple-50 p-4 my-4">
                <div className="flex flex-row item-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mx-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                    />
                  </svg>

                  <span className="block text-purple-950 text-sm mb-2">
                    کد تایید ارسال‌شده به 09362264383 را وارد کنید.
                  </span>
                </div>

                <Link
                  className="text-sm text-purple-900 items-center my-10 mx-12"
                  href="/"
                >
                  تغییر شماره موبایل
                </Link>
              </div>

              <div className="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  className="bg-purple-50 border border-purple-300 text-purple-950 mb-5 text-sm rounded-full focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5 "
                  placeholder="کد تایید"
                  required
                />

                <Link
                  className="text-sm font-light text-purple-900 items-center  m-4"
                  href="/"
                >
                  دریافت مجدد کد تایید
                </Link>
              </div>
            </div>

            <div></div>
          </form>
          <button
            className="bg-purple-950 mb-4 hover:bg-purple-800 ease-in-out duration-200 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            <Link href="/login">ادامه</Link>
          </button>
          <span className="text-sm m-4 text-purple-950">
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 ease-in-out duration-200"
            >
              {" "}
              شرایط و قوانین{" "}
            </a>
            سایت فرنالند و حریم خصوصی را می‌پذیرم.
          </span>
        </div>
      </div>
    </section>
  );
}

export default page;
