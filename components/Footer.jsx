import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import Social from "./Social";
import CopyRight from "./CopyRight";
const Footer = () => {
  return (
    <footer className=" mx-auto bg-primary pt-4 ">
      <Social />
      <CopyRight />

      <div></div>
    </footer>
  );
};

export default Footer;
