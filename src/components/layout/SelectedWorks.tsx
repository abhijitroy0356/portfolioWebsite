import { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const SelectedWorks = () => {
    const element = useRef(null);
    const characters = "Selected".split("");
    const characters2 = "Works".split("");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [img, setImg] = useState({
        src: "",
        alt: "",
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const projects = [
        {
            title: "Project Name 1",
            description: "Creative Direction/Visual/Storytelling",
            image: "/image1.png",
        },
        {
            title: "Project Name 2",
            description: "Creative Direction/Visual/Storytelling",
            image: "/image2.png",
        },
        {
            title: "Project Name 3",
            description: "Creative Direction/Visual/Storytelling",
            image: "/image3.png",
        },
        {
            title: "Project Name 4",
            description: "Creative Direction/Visual/Storytelling",
            image: "/image4.png",
        },
        {
            title: "Project Name 5",
            description: "Creative Direction/Visual/Storytelling",
            image: "/image5.png",
        },
    ];

    const springConfig = {
        stiffness: 150,
        damping: 50,
        mass: 0.1,
    };

    const imagePos = {
        x: useSpring(0, springConfig),
        y: useSpring(0, springConfig),
    };

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        imagePos.x.set(e.clientX);
        imagePos.y.set(e.clientY);
    };


    
    return (
        <section className="flex flex-col mt-[246px] gap-[96px]">
            <div className="flex justify-end font-special text-[96px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex text-[96px] font-special text-black text-end"
                    variants={containerVariants}
                >
                    {characters.map((char, index) => (
                        <motion.span key={index} variants={childVariants}>
                            {char}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex text-[96px] font-special text-black ml-10"
                    variants={containerVariants}
                >
                    {characters2.map((char, index) => (
                        <motion.span key={index} variants={childVariants}>
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="h-[640px]"
                ref={element}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                onMouseMove={handleMove} // Track mouse movement within this container
            >
                <div className="flex flex-col tool-container">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-[128px] items-center cursor-pointer transition-all duration-900 group project-info box-border relative tool-info"
                            onMouseEnter={() => {
                                setHoveredIndex(index);
                                setImg({
                                    src: project.image,
                                    alt: project.title,
                                });
                            }}
                            onMouseLeave={() => {
                                setHoveredIndex(null);
                                setImg({
                                    src: "",
                                    alt: "",
                                });
                            }}
                        >
                            {/* Render image at cursor position */}
                            {img.src && hoveredIndex === index && (
    <motion.img
        src={img.src}
        alt={img.alt}
        className="absolute pointer-events-none preview-img"
        style={{
            x: imagePos.x,
            y: imagePos.y,
            left: `${imagePos.x.get() - 900}px`, // Use .get() to access the value
            top: `${imagePos.y.get() - 450}px`,  // Use .get() to access the value
            opacity: 1,
        }}
        transition={{ duration: 0.3 }}
    />
)}



                            <div className="flex items-center w-full p-4 project-Info">
                                <div
                                    className={`absolute bottom-0 left-0 w-full transition-all duration-300 bg-black mb-5 ${
                                        hoveredIndex === index ? 'h-[4px]' : 'h-[2px]'
                                    }`}
                                ></div>
                                <h1
                                    className="text-[36px] transition-all duration-900 ease-in-out"
                                    style={{
                                        transform:
                                            hoveredIndex === index ? 'skewX(-15deg)' : 'skewX(0)',
                                    }}
                                >
                                    {project.title}
                                </h1>

                                <span className="text-[14px] ml-auto transition-all duration-900">
                                    {project.description}
                                </span>
                                <div className="flex items-center ml-auto transition-all duration-900 group-hover:ml-[290px]">
                                    <a href="" className="text-[14px] transition-all duration-900">
                                        Website
                                    </a>
                                    <img
                                        src="/Arrow.svg"
                                        alt=""
                                        className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-900 transform scale-0 group-hover:scale-100 group-hover:h-[40px] group-hover:w-[40px]"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default SelectedWorks;
