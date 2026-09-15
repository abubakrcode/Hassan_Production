import Image from "next/image";
import Navbar from "./components/navbar";
import ScrollNavigator from "./components/ScrollNavigator";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Homepage() {
  return (
    <ScrollNavigator nextRoute="/videoediting">
      <main className="relative min-h-screen w-full  ">
        <Image
          src="/hassan.jpg"
          alt="Background Photo"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center -z-10 lg:block hidden"
        />
        <Image
          src="/homeBg.png"
          alt="Background Photo"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center -z-10 block lg:hidden"
        />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="navbar font-poppins w-full my-5 flex justify-center items-center">
            <Navbar />
          </div>
          <div className="headings w-full h-150 flex  justify-center">
            <div className="aside lg:w-2/3 w-full mt-80 lg:mt-0 flex flex-col justify-center items-center font-poppins ">
              <div className="heading">
                <h2 className="lg:text-2xl md:text-xl text-[16px] font-medium text-gray-300 hover:text-[#838383] ">
                  Hi! I'm
                </h2>
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold text-white hover:text-[#838383]  my-2 mb-4  ">
                  Hassan Saleem
                </h1>
              </div>
              <div className="carousel flex justify-between items-center font-bold">
                <p className="text-rotate lg:text-4xl md:text-3xl text-xl h-15 hover:text-[#838383]  duration-12000">
                  <span className=" justify-items-center">
                    <span>Video Editing</span>
                    <span>Videography</span>
                    <span>Social Media Management</span>
                    <span>Content Creation</span>
                  </span>
                </p>
              </div>
              <div className="aboutbtn">
                <Link href="/about">
                  <button className="lg:px-6 md:px-4 lg:py-3 md:py-2 px-2 py-1 md:font-extrabold font-normal text-xs tracking-wide flex justify-center items-center gap-1 rounded-full bg-transparent backdrop-blur-md border border-white/20 shadow-2xl text-white hover:text-[#838383] transition-all md:text-lg">
                    About Me <FiArrowUpRight className="md:w-6 md:h-6 w-3 h-3 " />
                  </button>
                </Link>
              </div>
            </div>
            <div className="aside w-1/3 lg:block hidden "></div>
          </div>
        </div>
      </main>
    </ScrollNavigator>
  );
}
