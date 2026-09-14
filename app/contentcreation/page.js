import Image from "next/image";
import Navbar from "../components/navbar";
import ScrollNavigator from "../components/ScrollNavigator";
export const metadata = {
  title: "Content Creation",
  description:
    "Purposeful content creation documenting meaningful journeys and high-impact visual stories.",
};
export default function ContentCreationPage() {
  return (
    <ScrollNavigator prevRoute="/socialmedia" nextRoute="/contact">
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
            <div className="aside w-full lg:w-1/2 flex flex-col my-2 lg:mx-10 mx-4">
              <div className="Details font-poppins flex flex-col items-center ">
                <h1 className="font-bold text-3xl">Content Creation</h1>
                <h2 className="text-xl mt-3 text-center ">
                  Documenting the journey, not just the destination.
                </h2>
                <div className="paragraphs lg:w-2/3 w-full mt-3 flex flex-col gap-3 text-gray-400 leading-7 tracking-wider">
                  <p className="para1">
                    For me, content creation is where storytelling, visual
                    clarity, and purpose meet. A piece of content truly
                    resonates when it goes beyond looking polished and actually
                    solves a problem or sparks a real connection.
                  </p>
                  <p className="para2">
                    Before I write a single line of code, draft a script, or
                    arrange a layout, I step back to define the core value
                    behind it. From there, I structure a intentional narrative
                    where design, words, and pacing work seamlessly to deliver a
                    clear message.
                  </p>
                  <p className="para3">
                    Sometimes a topic demands a quick, high-impact breakdown;
                    other times, it requires deep, actionable insight that
                    stands the test of time. Flashy effects, clickbait hooks,
                    and endless output, on the other hand, rarely build
                    long-term trust.
                  </p>
                  <p className="para4">
                    My goal is to create thoughtful media that catches the eye,
                    respects the audience's time, and leaves a lasting impact
                    well after the screen turns off.
                  </p>
                </div>
              </div>
            </div>
            <div className="aside lg:w-1/2 w-full flex justify-center flex-col items-center">
              <div className="relative w-full h-full rounded-3xl -z-20 hidden lg:flex">
                <Image
                  src="/1.png"
                  alt="Video Editor Setup"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain bg-transparent w-full h-full scale-120 "
                />
              </div>
              <div className="font-poppins flex justify-center items-center z-50 h-0 mt-10 lg:mt-0 ">
                <a
                  href="https://www.tiktok.com/@viral.vloger"
                  target="_blank"
                  className="btn p-8   text-xl rounded-full bg-transparent backdrop-blur-md border border-white/20 shadow-2xl text-white hover:text-[#838383] transition-all "
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
