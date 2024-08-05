"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Icon1 from "../assets/images/Googleicon.png";
import Icon2 from "../assets/images/Amazonicon.png";
import Icon3 from "../assets/images/Amdicon.png";
import Icon4 from "../assets/images/Intelicon.png";
import Icon5 from "../assets/images/Ciscoicon.png";
import Icon6 from "../assets/images/Microsofticon.png";

const images =[{src:Icon1 , alt:"Google" },{ src:Icon2 , alt: "Amazon"},{src:Icon3 , alt:"Amdicon"},  { src:Icon4 , alt:"Intel"},{src:Icon5 , alt:"Cisco"},{src:Icon6 , alt:"Micro"}];
export const Iconspage = ()=> {
return (
    <>
    <div className="bg-[#05060F] text-white py-4 ">
        <div className="container ">
            <h1 className="text-center text-xl text-white/30">Collaborate with DigiFrills for unparalleled innovation</h1>
               <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute 
                   before:h-full after:h-full before:w-5 after:w-5 relative before:right-0 after:right-0 before:top-0 
                   after:top-0 before:bg-[linear-gradient(to_right,#0000,rba(0,0,0,0))] after:bg-[linear-gradient(to_left,#0000,rba(0,0,0,0))]">
                   <motion.div 
                   transition={{
                    duration:8,
                    ease:"linear",
                    repeat: Infinity,
                   }}
                   initial={{translateX: 0}}
                   animate={{translateX: "-50%"}}

                   className="flex gap-16 flex-none pr-16">
                       { images.map(({src,alt})=>(
                           <Image key={alt} 
                           src={src} 
                           alt={alt}
                           width={150}
                           height={100}
                           className="flex-none"/>
                       ))}
                       { images.map(({src,alt})=>(
                           <Image key={alt} 
                           src={src} 
                           alt={alt}
                           width={150}
                           height={90} 
                           className="flex-none"/>
                       ))}
                           
                   </motion.div>   
                </div>
                
        </div>
    </div>
    <div className=" bg-[#05060F] text-white pt-20">

        <div className="container  ">
        <div className=" bg-[#45464f] w-full h-1 flex "></div>
          <div className="pt-10 ">
          <div className="flex items-center py-16 px-4 justify-center tracking-tighter text-7xl sm:4xl ">
                    <h1 className="text-opacity-30 "
                     style={{
                        color: 'rgba(161, 191, 226, 1)',
                        wordSpacing: '0.2em',
                        letterSpacing: '0.05em',
                      }}
                    >Pioneering Excellence </h1>
                </div >
                <div className="flex items-center justify-center">
                <h1 className=" py-10 px-[500px] text-xl leading-none text-center text-white/30"> Discover our diverse range of services designed to meet all your digital needs.</h1>

                </div>
          </div>
              
        </div>
        </div>
    </>
);
}
export default Iconspage
