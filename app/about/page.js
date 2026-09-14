import Image from "next/image";
import Navbar from "../components/navbar";

export default function Aboutpage() {
  return (
    <main className="relative min-h-screen w-full">
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

        <div className="headings w-full min-h-150 flex justify-center">
          <div className="content-aside lg:w-3/5 w-full mt-05 lg:mt-0 flex flex-col items-center">
            <div className="details font-poppins flex flex-col items-center">
              <h1 className="font-bold lg:text-6xl md:text-5xl text-3xl text-center ">Hassan Saleem</h1>
              <h3 className="text-center md:text-xs text-lg mt-3">
                Video Editor | Videographer | Social Media Manager | Content Creator
              </h3>

              <p className="lg:text-lg text-xs md:px-10 px-3 mt-3 text-[#aaaaaa] leading-6 tracking-wider">
                I began my career as a content creator, producing and
                self-editing video content across multiple platforms. As my
                skills developed, I expanded my presence across various
                social media channels, tailoring content strategies to each
                platform&apos;s audience while maintaining consistency in
                brand voice. My experience includes hosting live broadcasts
                on TikTok and livestreaming on YouTube, which gave me
                firsthand insight into audience engagement and market
                demand.
              </p>

              <p className="lg:text-lg text-xs md:px-10 px-3 mt-3 text-[#aaaaaa] leading-6 tracking-wider">
                Building on this foundation, I transitioned into a role at a
                real estate firm, where I manage a range of responsibilities
                including video production, editing, and social media
                account management. In this role, I have successfully:
              </p>

              <ul className="list-disc lg:text-lg text-xs md:px-14 px-6 mt-3 text-[#aaaaaa] leading-6 tracking-wider">
                <li>
                  Increased sales through targeted social media marketing
                  campaigns
                </li>
                <li>
                  Grown and optimized company social media accounts to
                  attract and convert potential clients
                </li>
                <li>
                  Produced and edited high-quality video content to support
                  brand visibility and engagement
                </li>
              </ul>

              <p className="lg:text-lg text-xs md:px-10 px-3 mt-3 text-[#aaaaaa] leading-6 tracking-wider">
                My diverse background in content creation, platform
                management, and digital marketing allows me to bridge
                creative execution with measurable business results.
              </p>
            </div>
          </div>

          <div className="w-1/2 lg:block hidden"></div>
        </div>
      </div>
    </main>
  );
}