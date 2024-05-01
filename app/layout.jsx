import "@/assets/styles/globals.css";
import "@/assets/styles/color.css";

import localFont from "next/font/local";
export const metadata = {
  title: "فرنالند",
  description: "انلاین وام بگیر",
};

const vazirMatn = localFont({
  src: "../assets/fonts/ModamFaNumWeb-Bold.woff2",
});

const MainLayout = ({ children }) => {
  return (
    <html dir="rtl" lang="fa">
      <body className={`${vazirMatn.className} bg-white`}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
