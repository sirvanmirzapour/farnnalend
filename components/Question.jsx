import Image from "next/image";
import faq from "@/assets/images/faq.webp";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const Question = () => {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto p-20 sm:flex-row">
      <Image
        src={faq}
        alt="Logo"
        className="w-80 ml-10 md:mt-5 hover:-translate-y-2 ease-in-out duration-300 "
      />
      <div className="text-purple-950 p-8 rounded-lg  ">
        <h3 className="text-purple-950 text-3xl font-bold py-4">
          سوالات پر تکرار
        </h3>
        <Accordion className="border-none m-4">
          <AccordionPanel className="border-none m-4">
            <AccordionTitle className="p-4 bg-purple-100 border-none rounded-t-xl hover:bg-purple-100">
              {" "}
              به چه شیوه میتوان از فرنالند وام دریافت کرد؟
            </AccordionTitle>
            <AccordionContent>
              <p className="p-4 bg-purple-100 border-none rounded-b-xl text-sm">
                شما برای دریافت وام از فرنالند دو روش پیش رو دارید. در روش اول
                می‌توانید با پرداخت حق عضویت باشگاه مشتریان، عضو آن شوید. با
                عضویت در این باشگاه هم می‌توانید وام خود را در قالب یک بن کارت
                برای خرید انواع کالا و خدمات از فروشگاه‌ آنلاین استفاده کنید و
                هم از دیگر مزایای این باشگاه بهره‌مند شوید. روش دوم دریافت وام
                فرنالند، وام خرید اعتباری است. در این روش، شما می‌توانید با وام
                خود فقط از فروشگاه‌ فرنا کالای مد نظر خود را خریداری کنید.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel className="border-none m-4">
            <AccordionTitle className="p-4 bg-purple-100 border-none rounded-t-xl hover:bg-purple-100">
              {" "}
              به چه شیوه میتوان از فرنالند وام دریافت کرد؟
            </AccordionTitle>
            <AccordionContent>
              <p className="p-4 bg-purple-100 border-none rounded-b-xl text-sm">
                شما برای دریافت وام از فرنالند دو روش پیش رو دارید. در روش اول
                می‌توانید با پرداخت حق عضویت باشگاه مشتریان، عضو آن شوید. با
                عضویت در این باشگاه هم می‌توانید وام خود را در قالب یک بن کارت
                برای خرید انواع کالا و خدمات از فروشگاه‌ آنلاین استفاده کنید و
                هم از دیگر مزایای این باشگاه بهره‌مند شوید. روش دوم دریافت وام
                فرنالند، وام خرید اعتباری است. در این روش، شما می‌توانید با وام
                خود فقط از فروشگاه‌ فرنا کالای مد نظر خود را خریداری کنید.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel className="border-none m-4">
            <AccordionTitle className="p-4 bg-purple-100 border-none rounded-t-xl hover:bg-purple-100">
              {" "}
              به چه شیوه میتوان از فرنالند وام دریافت کرد؟
            </AccordionTitle>
            <AccordionContent>
              <p className="p-4 bg-purple-100 border-none rounded-b-xl text-sm">
                شما برای دریافت وام از فرنالند دو روش پیش رو دارید. در روش اول
                می‌توانید با پرداخت حق عضویت باشگاه مشتریان، عضو آن شوید. با
                عضویت در این باشگاه هم می‌توانید وام خود را در قالب یک بن کارت
                برای خرید انواع کالا و خدمات از فروشگاه‌ آنلاین استفاده کنید و
                هم از دیگر مزایای این باشگاه بهره‌مند شوید. روش دوم دریافت وام
                فرنالند، وام خرید اعتباری است. در این روش، شما می‌توانید با وام
                خود فقط از فروشگاه‌ فرنا کالای مد نظر خود را خریداری کنید.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel className="border-none m-4">
            <AccordionTitle className="p-4 bg-purple-100 border-none rounded-t-xl hover:bg-purple-100">
              {" "}
              به چه شیوه میتوان از فرنالند وام دریافت کرد؟
            </AccordionTitle>
            <AccordionContent>
              <p className="p-4 bg-purple-100 border-none rounded-b-xl text-sm">
                شما برای دریافت وام از فرنالند دو روش پیش رو دارید. در روش اول
                می‌توانید با پرداخت حق عضویت باشگاه مشتریان، عضو آن شوید. با
                عضویت در این باشگاه هم می‌توانید وام خود را در قالب یک بن کارت
                برای خرید انواع کالا و خدمات از فروشگاه‌ آنلاین استفاده کنید و
                هم از دیگر مزایای این باشگاه بهره‌مند شوید. روش دوم دریافت وام
                فرنالند، وام خرید اعتباری است. در این روش، شما می‌توانید با وام
                خود فقط از فروشگاه‌ فرنا کالای مد نظر خود را خریداری کنید.
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  );
};

export default Question;
