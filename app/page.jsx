"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import HeroFour from "@/components/HeroFour";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroTwo from "@/components/HeroTwo";
import InfoCards from "@/components/InfoCards";
import AccordionItem from "@/components/AccordionItem";
import Image from "next/image";
import faq from "@/assets/images/faq.webp";
import CalculatorLanding from "@/components/CalculatorLanding";
import Calculator from "@/components/Calculator";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const accordionData = [
    {
      title: "    به چه شیوه میتوان از فرنالند وام دریافت کرد؟",
      description:
        "شما برای دریافت وام از فرنالند دو روش پیش رو دارید، در روش اول می توانید با پرداخت حق عضویت باشگاه مشتریان، عضو آن شوید. با عضویت در این باشگاه هم میتوانید وام خود را دریافت نمایید",
    },
    {
      title: "    به چه شیوه میتوان از فرنالند وام دریافت کرد؟",
      description:
        "شما برای دریافت وام از فرنالند دو روش پیش رو دارید، در روش اول می توانید با پرداخت حق عضویت باشگاه مشتریان، عضو آن شوید. با عضویت در این باشگاه هم میتوانید وام خود را دریافت نمایید",
    },
    {
      title: "    به چه شیوه میتوان از فرنالند وام دریافت کرد؟",
      description:
        "شما برای دریافت وام از فرنالند دو روش پیش رو دارید، در روش اول می توانید با پرداخت حق عضویت باشگاه مشتریان، عضو آن شوید. با عضویت در این باشگاه هم میتوانید وام خود را دریافت نمایید",
    },
    {
      title: "    به چه شیوه میتوان از فرنالند وام دریافت کرد؟",
      description:
        "شما برای دریافت وام از فرنالند دو روش پیش رو دارید، در روش اول می توانید با پرداخت حق عضویت باشگاه مشتریان، عضو آن شوید. با عضویت در این باشگاه هم میتوانید وام خود را دریافت نمایید",
    },
    {
      title: "    به چه شیوه میتوان از فرنالند وام دریافت کرد؟",
      description:
        "شما برای دریافت وام از فرنالند دو روش پیش رو دارید، در روش اول می توانید با پرداخت حق عضویت باشگاه مشتریان، عضو آن شوید. با عضویت در این باشگاه هم میتوانید وام خود را دریافت نمایید",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <HeroTwo />

      <InfoCards />
      <Calculator />
      <HeroFour />

      <div className="flex flex-col justify-center items-center container mx-auto p-4 sm:flex-row">
        <Image
          src={faq}
          alt="Logo"
          className="w-80 ml-10 md:mt-5 hover:-translate-y-2 ease-in-out duration-300 "
        />

        <div className="text-purple-950 p-8 rounded-lg  ">
          <h3 className="text-purple-950 text-3xl font-bold py-4">
            سوالات پر تکرار
          </h3>
          {accordionData.map((data, index) => {
            return (
              <AccordionItem
                key={index}
                open={index === open}
                title={data.title}
                description={data.description}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default HomePage;
