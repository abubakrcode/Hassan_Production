import Image from "next/image";
import Navbar from "../components/navbar";
import ScrollNavigator from "../components/ScrollNavigator";
export const metadata = {
  title: "Videography",
  description: "Cinematic videography and brand filmmaking focusing on visual composition, movement, and narrative atmosphere.",
};
export default function VideoGraphyPage() {
  return (
    <ScrollNavigator prevRoute="/videoediting" nextRoute="/socialmedia">
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
          <div className="aside w-full lg:w-1/2 flex flex-col my-2 mx-4">
           <div className="Details font-poppins flex flex-col items-center ">
            <h1 className="font-bold md:text-4xl text-3xl text-center">Videography</h1>
            <h2 className="mt-3 text-center text-xs md:text-lg">Bring your brand to life on camera</h2>
            <div className="paragraphs lg:text-lg text-xs  lg:w-9/10 w-full mt-3 flex flex-col md:gap-3 gap-0 text-gray-400 leading-7 tracking-wider">
              <p className="para1">
              For me, videography combines technology, design, and emotion. A compelling video is created when images not only look good, but also tell a story together.</p>
               <p className="para2"> Before I even set up a camera or start editing, I think intensively about what message I want to convey and what kind of atmosphere I want to create. From this, I develop a clear visual approach in which composition, movement, sound, and rhythm consciously work together.</p>
                <p className="para3"> Sometimes you need dynamism, sometimes stillness, and sometimes simply a cut that lands at exactly the right moment. Twelve transitions, three flashes of light, and dramatic fog, on the other hand, are surprisingly rarely the solution.</p>
                <p className="para4"> My goal is to create moving images that look professional, evoke emotions, and still have something to say even after the third viewing. </p>
            </div>
           </div>
            
          </div>
          <div className="aside lg:w-1/2 w-full flex justify-center flex-col items-center">
            <div className="relative w-full h-full rounded-3xl -z-20 hidden lg:flex">
              <Image
                src="/graphy.png"
                alt="Video Editor Setup"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain bg-transparent w-full h-full scale-135"
              />
            </div>
            <div className="font-poppins flex justify-center items-center z-50 ">
            <a href="https://www.youtube.com/@MiniVlogs3331/videos" target="_blank" className="btn md:p-8 p-3 text-[14px] md:text-xl font-normal rounded-full bg-transparent backdrop-blur-md border border-white/20 shadow-2xl text-white hover:text-[#838383] transition-all ">
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
