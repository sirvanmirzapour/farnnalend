const CopyRight = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="text-sm font-light text-purple-950 bg-purple-50 border-t-2 border-purple-200 flex justify-center items-center py-2">
      کلیه حقوق این سایت متعلق به شرکت توسعه تجارت هوشمند فاخر (فرنا) است &copy;{" "}
      {currentYear}
    </p>
  );
};

export default CopyRight;
