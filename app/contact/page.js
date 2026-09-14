import Image from "next/image";
import Navbar from "../components/navbar";
import ScrollNavigator from "../components/ScrollNavigator";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
export const metadata = {
  title: "Contact",
  description: "Get in touch with Hassan Saleem for video editing projects, videography bookings, and social media management.",
};
export default function ContactPage() {
  return (
  <ScrollNavigator prevRoute="/contentcreation" >
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
        <div className="headings w-full h-full flex  justify-center">
          <div className="aside lg:w-1/2 w-full flex flex-col mt-2 lg:mx-10 mx-4 ">
           <div className="Details font-poppins flex flex-col items-center ">
            <h1 className="font-bold md:text-4xl text-3xl">Get in Touch</h1>
            <div className="paragraphs lg:w-2/3 w-full mt-3 flex flex-col gap-3   ">
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6 ">

            <input type="hidden" name="access_key" value="1d3de98c-c968-440e-bab2-61478c329395"/>
              <input type="text"  name="name" placeholder="Your Name" required className="px-2 py-4 bg-transparent backdrop-blur-xs border border-white/20 shadow-2xl text-white hover:text-[#838383] rounded-lg transition-all"/>
              <input type="text"  name="email" placeholder="Your E-mail" required className="px-2 py-4 bg-transparent backdrop-blur-xs border border-white/20 shadow-2xl text-white rounded-lg hover:text-[#838383] transition-all"/>
              <textarea name="message" id="message" placeholder="Your Message" required className="px-2 py-4 h-40 bg-transparent backdrop-blur-xs border border-white/20 shadow-2xl text-white rounded-lg hover:text-[#838383] transition-all" />
              
                <button type="submit" value="" className="px-2 py-4 active:border-white active:border-2 font-semibold bg-transparent backdrop-blur-md border border-white/20 shadow-2xl text-white rounded-lg hover:text-[#838383] transition-all
                " > Submit </button>

              
            </form>
            </div>
           </div>
            
          </div>
          <div className="aside w-1/2 hidden lg:flex ">
            <div className="relative w-full h-full rounded-3xl">
              <Image
                src="/contactme.png"
                alt="Video Editor Setup"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain bg-transparent w-full h-full scale-150 -z-5 "
              />
            </div>
            
          </div>
          
        </div>
        
      </div>
      <div className="lg:pt-20 pt-5 flex justify-center items-end lg:h-44 h-20 ">
      <div className="links flex  justify-evenly items-center lg:w-1/3 w-1/2 p-2 rounded-full bg-transparent backdrop-blur-xs border border-white/20 shadow-2xl text-white">
              <a href="https://www.tiktok.com/@viral.vloger" target="_blank" rel="noopener noreferrer"><IoLogoTiktok className="h-8 w-8 text-white hover:text-[#838383]" /></a>
              <a href="https://www.youtube.com/@MiniVlogs3331" target="_blank" rel="noopener noreferrer"><IoLogoYoutube className="h-8 w-8 text-white hover:text-[#838383]" /></a>
              <a href="https://www.instagram.com/minivlogs3811" target="_blank" rel="noopener noreferrer"><IoLogoInstagram className="h-8 w-8 text-white hover:text-[#838383]" /></a>
              <a href="https://wa.me/923137590173" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp className="h-8 w-8 text-white hover:text-[#838383]" /></a>
            </div></div>
    </main>
    </ScrollNavigator>
  );
}
