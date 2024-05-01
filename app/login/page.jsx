import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/farranlend-farsi.webp";
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
            <h2 className="text-lg text-purple-950 text-center font-semibold mb-6">
              ثبت نام / ورود به حساب کاربری
            </h2>

            <div className="mb-4">
              <label className="block text-purple-950 font-bold mb-2">
                شماره موبایل
              </label>

              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-purple-950">
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
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-purple-50 border border-purple-300 text-purple-950 text-sm rounded-full focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5 "
                  placeholder="..."
                  required
                />
              </div>
            </div>

            <div></div>
          </form>
          <button
            className="bg-purple-950 mb-4 hover:bg-purple-800 ease-in-out duration-200 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            <Link href="/login/confirmCode">ادامه</Link>
          </button>
          <span className="text-sm text-purple-950">
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
