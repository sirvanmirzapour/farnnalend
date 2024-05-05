import Link from "next/link";
function CalculatorLanding() {
  return (
    <div
      dir="ltr"
      className="container flex justify-center items-center flex-col mx-auto bg-purple-50 rounded-2xl shadow-md"
    >
      <div className="flex justify-center pt-8 text-2xl text-purple-950">
        محاسبه‌گر اقساط
      </div>
      <div className="w-full flex items-center justify-center flex-col">
        <div dir="rtl" className="w-1/2 flex justify-between mt-4  pb-4">
          <span>20 میلیون تومان</span>
          <span>5 میلیون تومان</span>
        </div>
        <input
          id="myRange"
          type="range"
          min="0"
          max="210"
          step="70"
          className="w-1/2 -top-1 h-2 bg-transparent appearance-none rounded"
        />
      </div>

      <div className="w-1/2 flex justify-between mt-4 px-2 text-purple-900">
        <span>5</span>
        <span>10</span>
        <span>15</span>
        <span>20</span>
      </div>

      <div
        dir="rtl"
        className="w-1/4  rounded-2xl bg-purple-200 text-purple-900 shadow-2xl my-4 flex flex-col justify-center items-center px-1 py-4"
      >
        <div className="w-1/2 flex justify-center mt-4 px-1">
          <span id="demo"> 1800000 تومان</span>
        </div>
        <div className="w-1/2 flex justify-between mt-4 px-1">
          <span>تعداد اقساط</span>
          <span>10 ماه</span>
        </div>
        <div className="w-1/2 flex justify-between mt-4 px-1  text-sm">
          <span>هر قسط </span>
          <span>218 تومان</span>
        </div>
        <div className="w-1/2 flex justify-between mt-4 px-1  text-sm">
          <span>مجموع اقساط </span>
          <span>2180 تومان</span>
        </div>
        <div className="w-1/2 flex justify-between mt-4 px-1  text-sm">
          <span>کارمزد مصوب بانکی</span>
          <span>280 تومان</span>
        </div>
        <button
          type="button"
          id="mobile-dropdown-button"
          className="relative inline-flex items-center justify-center rounded-2xl p-2 text-purple-50 border-2 bg-purple-900 m-4 px-4 hover:-translate-y-1 ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <Link href="/login">
            <span> درخواست وام </span>
          </Link>
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
      <span className="text-sm text-purple-900 py-4">
        درنظر داشته باشید که نوع ضمانت (چک یا سفته) پس از اعتبارسنجی تعیین
        می‌شود{" "}
      </span>
    </div>
  );
}

export default CalculatorLanding;
