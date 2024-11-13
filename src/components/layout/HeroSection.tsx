
import RoleScroll from '../global/RoleScroll'

import { useRef, useEffect } from "react";

const HeroSection = () => {
    const imageRef = useRef<HTMLImageElement>(null);
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imageRef.current) {
        // Parallax effect: Image moves upwards as you scroll down
        imageRef.current.style.transform = `translateY(${0 - scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);
 
  return (
    <section className="grid grid-cols-2 gap-[5rem] h-[672px]  ">
          <div className="flex justify-center text-[14px] ">
            <div className="flex flex-col justify-center gap-[45px] mb-[120px] ml-[120px]">
              <div>
                Currently Available <br /> for freelance projects
              </div>
              <div>
                UI/UX designer and creative director <br />
                based in London, United Kingdom. With 10+ years of <br />
                experience working as an independent artist, I can <br />
                turn your ideas into reality
              </div>
            </div>
          </div>

          <div className="image md:absolute relative">
            <img
              ref={imageRef}
              src="/identityPhoto.jpeg"
              alt=""
              className="h-[675px] w-[540px] "
              style={{ position: 'relative', overflow: "hidden", left: "135%" }}
            />
          </div>

          <div className="absolute top-[200px] left-0 top-[39rem] w-full ">
            <RoleScroll/>
          </div>
        </section>
  )
}

export default HeroSection