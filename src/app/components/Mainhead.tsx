import Globeicon from "../assets/Icons/globe1.svg";

export const Mainhead = () => {
  return (
    <>
      <div className="bg-[#05060F] w-full  relative">
        <div className="container relative ">
          <div className="flex relative mt-0 max-w-auto ">
            <Globeicon  className="h-16 sm:h-24 sm:w-1/2 md:w-1/3 lg:w-1/4 ml-[72%] " />
          </div>
          <div className="absolute h-[2px] w-full bg-[#26293C]/60 opacity-60 mb-4"></div>
          <div className="flex relative ">
            <Globeicon className="lg:h-80 sm:h-40 sm:w-1/2 md:w-1/3 lg:w-1/4 " />
              <div className="absolute top-1/2 left-1/3 mt-16  ml-40 transform  -translate-x-1/2 -translate-y-1/2 flex items-center justify-center leading-none  w-full ">
             <h1
                   className="font-bold text-6xl md:text-8xl ml-24 leading-none text-center h-full w-full "
                   style={{
                   color: 'rgba(161, 191, 226, 1)',
                   wordSpacing: '0.2em',
                   letterSpacing: '0.05em',
                 }}
            >
               Transforming Ideas into Digital Realities
             </h1>
          </div>
          </div>

          <div className="h-[2px] w-full bg-[#26293C]/60 opacity-60 mb-4"></div>

          <div className="flex py-4 px-2 w-[40vw] text-center justify-center ml-96">
            <h1 className="text-white/30 text-lg md:text-xl">
              We deliver innovative global IT solutions to transform your business. Let's turn your digital vision into reality.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};