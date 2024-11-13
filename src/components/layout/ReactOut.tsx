
import {motion} from "framer-motion"
import { useRef } from "react";
const ReactOut = () => {
    const element = useRef(null);
  return (
    <motion.section
    className="h-[574px]"
    ref={element}
    initial={{ opacity: 0, y: 50 }} // Start offscreen and transparent
    whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
    transition={{ duration: 1, delay: 0.3 }} // Smooth transition with delay for sequential effect
    viewport={{ once: true }} // Trigger animation only once
    >
        <div className="flex flex-col mt-[250px]">
        <div className="flex gap-[96px] ">
          <div className="text-[132px] font-special leading-none ">
            <div>
              Want to
            </div>
            <div>
              reach <span className="font-specialItalic">out?</span>
            </div>
          </div>


          <div className="flex flex-col justify-end pb-6">
            <div>
              Currently available for
              <br />
              freelance projects
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-end text-right text-[56px] mt-[96px]">
        <div className="flex items-center custom-underline-mail ">
          {/* Left Arrow - Visible by Default */}
          <img
            src="/Arrow.svg"
            alt=""
            className="h-[50px] w-[50px] mt-3 transition-all duration-300 transform arrow-left"
          />
          <span className="flex transition-all duration-300 email-text pt-[5px] pb-[5px] ">deepanjan@kriva.global</span>

          {/* Right Arrow - Hidden by Default */}
          <img
            src="/Arrow.svg"
            alt=""
            className="h-[50px] w-[50px] mt-6 transition-all duration-300 transform arrow-right"
          />

          <div className="absolute left-0 bottom-0 h-[3px] bg-black z-1 w-full transition-transform duration-300 origin-left underline"></div>
        </div>
      </div>
    </motion.section>
  )
}

export default ReactOut