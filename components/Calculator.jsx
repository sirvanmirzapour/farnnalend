import Link from "next/link";

function Calculator() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mb-10">
      <div className="container mx-auto flex justify-center text-xl my-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-purple-950"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
          />
        </svg>
        <h3 className="text-purple-950">محاسبه اقساط و ثبت درخواست وام</h3>
      </div>
      <div className="flex flex-col rounded-3xl shadow-2xl w-auto lg:w-1/2 xs:w-full">
        <div className="flex flex-col mx-auto w-full rounded-t-3xl p-4 justify-start bg-purple-900">
          <span className="text-white text-sm py-2">وام خرید اعتباری کالا</span>
          <span className="text-white text-sm">
            امکان خرید تا سقف 20 میلیون تومان از همه‌ی فروشگاه‌ها فقط با ضمانت
            سفته‌ی الکترونیکی
          </span>
        </div>

        <div className="flex items-center flex-col py-2 px-4">
          <div className="w-full m-2 p-4 flex flex-col border rounded-xl border-purple-950">
            <div className="w-full flex justify-between mt-4 py-4  p-2">
              <span>مبلغ درخواستی (تومان)</span>
              <span>20,000,000 تومان</span>
            </div>
            <input
              id="myRange"
              type="range"
              min="0"
              max="210"
              step="70"
              className="w-full -top-1 h-2 m-2 bg-transparent appearance-none rounded"
            />
            <div className="w-full flex justify-between mt-4 pb-4 text-[12px] text-purple-900">
              <span>20 میلیون تومان</span>
              <span>5 میلیون تومان</span>
            </div>
            <span className="text-sm">مدت بازپرداخت</span>
            <div className="w-full flex justify-start mt-5 mb-2 sm:flex-row">
              <button className="flex items-center text-[12px] mx-1 text-purple-900 border border-purple-950  rounded-md px-3 py-2 bg-purple-50 hover:bg-purple-100 ease-in-out duration-200  hover:text-purple-800 ">
                <span> 12 ماهه </span>
              </button>
              <button className="flex items-center text-[12px] mx-1 text-purple-900 border border-purple-950  rounded-md px-3 py-2 bg-purple-50 hover:bg-purple-100 ease-in-out duration-200  hover:text-purple-800 ">
                <span> 9 ماهه </span>
              </button>
              <button className="flex items-center text-[12px] mx-1 text-purple-900 border border-purple-950  rounded-md px-3 py-2 bg-purple-50 hover:bg-purple-100 ease-in-out duration-200  hover:text-purple-800 ">
                <span> 6 ماهه </span>
              </button>
              <button className="flex items-center text-[12px] mx-1 text-purple-900 border border-purple-950  rounded-md px-3 py-2 bg-purple-50 hover:bg-purple-100 ease-in-out duration-200  hover:text-purple-800 ">
                <span> 3 ماهه </span>
              </button>
            </div>
          </div>
          <div className="w-full m-2 p-4 flex flex-col border rounded-xl border-purple-950 ">
            <div className="w-full flex justify-between mt-1 p-2 text-[12px]">
              <span> قسط ماهیانه:</span>
              <span>1,882,000 تومان </span>
            </div>
            <div className="w-full flex justify-between mt-1  p-2 text-[12px]">
              <span> مجموع بازپرداخت اقساط:</span>
              <span>22,584,000 تومان</span>
            </div>
          </div>
          <div className="w-full m-2 flex flex-row justify-between items-center">
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span className="mx-2 cursor-pointer text-purple-800 hover:text-purple-600">
                {" "}
                اطلاعات بیشتر{" "}
              </span>
            </div>

            <button className="flex items-center my-2 text-purple-50 border border-purple-50  rounded-xl px-3 py-2 bg-purple-950 hover:bg-purple-700 ease-in-out duration-200  hover:text-purple-100 ">
              <Link href="/login">
                <span className="mx-5 text-[12px]"> درخواست وام </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
