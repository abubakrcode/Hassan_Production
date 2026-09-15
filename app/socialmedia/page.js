import Image from "next/image";
import Navbar from "../components/navbar";
import ScrollNavigator from "../components/ScrollNavigator";
export const metadata = {
  title: "Social Media Management",
  description: "Strategic social media management driving real audience engagement and channel growth.",
};
export default function SocialMediaPage() {
  return (
    <ScrollNavigator prevRoute="/videography" nextRoute="/contentcreation">
      <main className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/editbg.jpg"
          alt="Background Photo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center -z-10"
        />

        <div className="relative z-20 flex flex-col items-center w-full font-poppins">
          <div className="w-full my-5 flex justify-center items-center z-50">
            <Navbar />
          </div>
          <div className="headings w-full h-full flex flex-col lg:flex-row justify-center">
            <div className="aside w-full lg:w-1/2 flex flex-col my-2 mx-4 ">
              <div className="Details font-poppins flex flex-col items-center ">
                <h1 className="font-bold md:text-4xl text-3xl text-center">Social Media Management</h1>
                <h2 className="mt-3 text-center text-xs md:text-lg">
                  Driving real engagement and measurable growth
                </h2>
                <div className="paragraphs lg:text-lg text-xs  lg:w-9/10 w-full mt-3 flex flex-col md:gap-3 gap-0 text-gray-400 leading-7 tracking-wider">
                  <p className="para1">
                    For me, social media management combines strategy, design,
                    and connection. A compelling brand presence is created when
                    posts not only look good, but also drive a meaningful
                    narrative together.
                  </p>
                  <p className="para2">
                    Before I even schedule a post or design a graphic, I think
                    intensively about what message I want to convey and what
                    kind of reaction I want to trigger. From this, I develop a
                    clear content framework in which visuals, copy, timing, and
                    engagement consciously work together.
                  </p>
                  <p className="para3">
                    Sometimes you need trend-driven energy, sometimes steady
                    value, and sometimes simply a message that lands at exactly
                    the right moment. Twelve trending audio clips, three flashy
                    stickers, and constant spamming, on the other hand, are
                    surprisingly rarely the solution.
                  </p>
                  <p className="para4">
                    My goal is to build digital channels that look professional,
                    foster genuine community, and still deliver real value even
                    after the scroll moves past.
                  </p>
                </div>
              </div>
            </div>
            <div className="aside lg:w-1/2 w-full flex justify-center flex-col items-center">
              <div className="relative w-full h-full rounded-3xl -z-20 hidden lg:flex">
                <Image
                  src="/social_media.png"
                  alt="Video Editor Setup"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain bg-transparent w-full h-full scale-150"
                />
              </div>
              <div className="font-poppins flex justify-center items-center z-50 h-0 mt-10 lg:mt-0">
                <a
                  href="https://www.instagram.com/minivlogs3811/"
                  target="_blank"
                  className="btn md:p-8 p-3 text-[14px] md:text-xl font-normal rounded-full bg-transparent backdrop-blur-md border border-white/20 shadow-2xl text-white hover:text-[#838383] transition-all "
                >
                  Explore more
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ScrollNavigator>
  );
}
