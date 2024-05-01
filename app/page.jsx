import Hero from "@/components/Hero";
import HeroFour from "@/components/HeroFour";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroTwo from "@/components/HeroTwo";
import InfoCards from "@/components/InfoCards";
import Question from "@/components/question";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroTwo />
      <InfoCards />
      <HeroFour />
      <Question />
      <Footer />
    </>
  );
};
export default HomePage;
