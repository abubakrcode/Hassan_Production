import Image from "next/image";
import Navbar from "../components/navbar";
import ScrollNavigator from "../components/ScrollNavigator";
export const metadata = {
  title: "Video Editing",
  description: "Professional video editing focusing on timing, pacing, audio synchronization, and visual story structure by Hassan Saleem.",
};
export default function EditingPage() {

  return (
    <ScrollNavigator prevRoute="/" nextRoute="/videography">
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
          <div className="aside w-full lg:w-1/2 flex flex-col my-2  mx-4">
           <div className="Details font-poppins flex flex-col items-center ">
            <h1 className="font-bold md:text-4xl text-3xl">Video Editing</h1>
            <h2 className="mt-3 text-center text-xs md:text-lg ">Unite all clips to pitch a story</h2>
            <div className="paragraphs lg:text-lg text-xs  lg:w-9/10 w-full mt-3 flex flex-col md:gap-3 gap-0 text-gray-400 leading-7 tracking-wider">
              <p className="para1">
              For me, video editing is where technology, design, and emotion come together. A strong edit happens when individual clips don’t just look refined, but combine to tell a story as one.</p>
               <p className="para2"> Before I import footage or make the first cut, I focus on the message I need to deliver and the atmosphere I want to build. From that foundation, I shape an editorial approach where timing, motion, sound, and rhythm all work in sync.</p>
                <p className="para3"> Sometimes the story calls for energy, sometimes for quiet, and sometimes it only needs one cut placed at the perfect moment. A dozen transitions, a few flash effects, and heavy overlays are rarely what make it work.</p>
                <p className="para4"> My goal is to unite all clips into professional edits that move people, and that still reveal something new even after the third viewing. </p>
            </div>
           </div>
            
          </div>
          <div className="aside lg:w-1/2 w-full flex justify-center flex-col items-center">
          
            <div className="relative w-full h-full rounded-3xl -z-20 hidden lg:flex">
              <Image
                src="/edittaba.png"
                alt="Video Editor Setup"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain bg-transparent w-full h-full scale-200 "
              />
            </div>
            <div className="font-poppins flex justify-center items-center z-50 ">
            <a href="https://www.tiktok.com/@viral.vloger/video/7682105987309784342" target="_blank" className="btn md:p-8 p-3 text-[14px] md:text-xl font-normal rounded-full bg-transparent backdrop-blur-md border border-white/20 shadow-2xl text-white hover:text-[#838383] transition-all ">
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
