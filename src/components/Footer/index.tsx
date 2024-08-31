import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#090E34] pt-20 lg:pt-[100px] w-full">
      <div className="flex flex-col items-center justify-center py-8 w-full">
        <Image
          src="/images/favicon.ico"
          alt="logo"
          width={200}  // Adjusted the width to be smaller
          height={150} // Adjusted the height to match the width
          className="mb-4"
        />
        <p className="text-center text-base text-gray-400 max-w-[600px] px-4">
          Effortlessly convert and summarize your audio with HearMe AI—your go-to tool for quick and accurate audio transcription.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
