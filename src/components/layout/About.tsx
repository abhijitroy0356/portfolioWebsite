import { motion } from "framer-motion";
import { useRef } from "react";
const About = () => {
    const element = useRef(null);
    const characters = "About".split(""); // Split "About" into individual characters

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8, // Duration for the entire animation to be visible
          },
        },
      };
    const childVariants = {
        hidden: { opacity: 0, x: -30 }, // Start off-screen to the right
        visible: { opacity: 1, x: 0, transition: { duration: 0.8} }, // Animate in
      };
    const fadeInVariant = {
        hidden: {
            opacity: 0,
            y: 100, // Start from the left, adjust this value to control the horizontal position
        },
        visible: {
            opacity: 1,
            y: 0, // Move to its original position
            transition: {
                duration: 0.5, // Duration of the fade-in effect
            },
        },
    };

    return (
        <section className="mt-[200px] ">
            {/* Isolated motion.div for the 'About' heading */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex text-[96px] font-special text-black"
                variants={containerVariants}
            >
                {characters.map((char, index) => (
                    <motion.span key={index} variants={childVariants}>
                        {char}
                    </motion.span>
                ))}
            </motion.div>



            {/* Separate content div to prevent inherited styles from motion.div */}
            <div >
                <motion.div
                    className="text-[55px] mt-[150px] cursor-pointer"
                    ref={element}
                    initial={{ opacity: 0, y: 50 }} // Start offscreen and transparent
                    whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
                    transition={{ duration: 1, delay: 0.3 }} // Smooth transition with delay for sequential effect
                    viewport={{ once: true }} // Trigger animation only once
                >
                    <div className="text-end">UI/UX designer and creative</div>
                    <div className="">director based in London, United Kingdom.</div>
                    <div>Wi<span className="text-[#B7B7B7] ">th 10+ years of experience working as</span></div> <span className="text-[#B7B7B7] ">an independent artist, I can turn your ideas into reality.</span>
                </motion.div>


                <motion.div
                    className="flex justify-between mt-[200px] h-[160px]"
                    ref={element}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.3, // Adjust the stagger timing as needed
                            },
                        },
                        hidden: {},
                    }}
                >
                    <motion.div className="text-[14px]" variants={fadeInVariant}>
                        core tools
                    </motion.div>

                    <div className="flex justify-between gap-[32px] tool-container">
                    
                        <motion.div
                            className="flex flex-col w-[264px] gap-[36px] tool-info cursor-pointer"
                            variants={fadeInVariant}
                        >
                            <div className="text-[32px]">figma</div>
                            {/* <img src="/figma.svg" alt="Figma" className="w-[80px] h-[80px] ml-[-16px]" /> */}
                            <p className="text-[14px]">
                                Having started as a graphic designer and transitioning into a creative
                                director gives me a unique perspective and understanding in merging
                                visual aesthetics.
                            </p>
                        </motion.div>
                        

                       
                        <motion.div
                            className="flex flex-col w-[264px] gap-[36px] tool-info cursor-pointer"
                            variants={fadeInVariant}
                        >
                            <div className="text-[32px]">Blender</div>
                            {/* <img src="/blender.svg" alt="Blender" className="w-[80px] h-[80px] mt-2" /> */}
                            <p className="text-[14px]">
                                Having started as a graphic designer and transitioning into a creative
                                director gives me a unique perspective and understanding in merging
                                visual aesthetics.
                            </p>
                        </motion.div>
                        

                        
                        <motion.div
                            className="flex flex-col w-[264px] gap-[36px] tool-info cursor-pointer"
                            variants={fadeInVariant}
                        >
                            <div className="text-[32px]">Adobe Illustrator</div>
                            {/* <img src="/adobe-illustrator.svg" alt="Adobe Illustrator" className="w-[120px] h-[120px] mt-[-8px] ml-[-33px]" /> */}
                            <p className="text-[14px]">
                                Having started as a graphic designer and transitioning into a creative
                                director gives me a unique perspective and understanding in merging
                                visual aesthetics.
                            </p>
                        </motion.div>
            
                    </div>


                </motion.div>

            </div>
        </section>

    )
}

export default About