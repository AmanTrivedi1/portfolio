import React from "react";
import work1 from "../../src/img/project/pr1.png";
import work2 from "../../src/img/project/pr2.png";
import work3 from "../../src/img/project/pr3.png";
import work4 from "../../src/img/project/pr4.png";
import work5 from "../../src/img/project/pr5.png";
import work6 from "../../src/img/project/pr6.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const line1 = "Work";
const line2 = "// Checkout some of my recent work";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Portfolio = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div
        name="work"
        className="w-full h-full md:pt-0 pt-20 md:h-screen text-accent bg-primary"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
          <div className="pb-8 ">
            <motion.p
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-4xl font-semibold inline border-b-4 border-text text-accent "
            >
              {line1.split("").map((char, index) => {
                return (
                  <motion.span key={char + " " + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.p>
            <motion.p
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="py-6"
            >
              {line2.split("").map((char2, index) => {
                return (
                  <motion.span key={char2 + " " + index} variants={letter}>
                    {char2}
                  </motion.span>
                );
              })}
            </motion.p>
            <p className="py-6"></p>
          </div>

          <Carousel
            responsive={responsive}
            containerClass="-mx-[10px]"
            itemClass="px-[10px]"
          >
            <div>
              <img src={work1} alt="work" />
              <div>
                <a href="https://github.com/AmanTrivedi1/Tweet">
                  <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                    Source Code
                  </button>
                </a>
              </div>
            </div>

            <div>
              <img src={work2} alt="work" />
              <div>
                <a href="https://github.com/AmanTrivedi1/Tweet">
                  <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                    Source Code
                  </button>
                </a>
              </div>
            </div>

            <div>
              <img src={work3} alt="work" />
              <div>
                <a href="https://github.com/AmanTrivedi1/Tweet">
                  <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                    Source Code
                  </button>
                </a>
              </div>
            </div>

            <div>
              <img src={work4} alt="work" />
              <div>
                <a href="https://github.com/AmanTrivedi1/Tweet">
                  <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                    Source Code
                  </button>
                </a>
              </div>
            </div>

            <div>
              <img src={work5} alt="work" />
              <div>
                <a href="https://github.com/AmanTrivedi1/Tweet">
                  <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                    Source Code
                  </button>
                </a>
              </div>
            </div>

            <div>
              <img src={work6} alt="work" />
              <div>
                <a href="https://github.com/AmanTrivedi1/Tweet">
                  <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
