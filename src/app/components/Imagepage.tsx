"use client";

import Image from "next/image";
import Globeimage from "../assets/images/Globelimg.png";
import Rainimg from "../assets/images/Rain.png";
import { motion } from 'framer-motion';
import SvgArrow2 from '../assets/Icons/Arrow2.svg';

export const Imagepage = () => {
  return (
    <>
      <div className="bg-[#05060F] flex h-full w-full flex-cols-1 flex-rows-1">
        <div className="container w-full flex flex-wrap">
          <div className="w-full md:w-1/3 flex">
            <Image src={Rainimg} alt="" className="w-full md:w-1/3 flex" />
            <Image src={Rainimg} alt="" className="w-full md:w-1/3 flex" />
          </div>
          <div className="w-full h-auto md:w-1/3 flex-grow relative">
            <Image src={Globeimage} alt="" />
            <motion.svg
              initial={{ y: 0 }}
              animate={{ y: [-30, 30, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: '45%',
                transform: 'translateX(-50%)'
              }}
            >
              <SvgArrow2 />
            </motion.svg>
          </div>
          <div className="w-full md:w-1/3 flex">
            <Image src={Rainimg} alt="" />
            <Image src={Rainimg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}