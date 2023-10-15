 import { AiFillCheckCircle } from "react-icons/ai";

const Info = () => {
  return (
    <section className="mt-10" id="about">
      <div className="w-[89%] m-auto max-w-[1400px] flex flex-col
      lg:flex-row gap-8 xl:gap-[180px]">
        <div className="grid grid-cols-1 
        flex-1 gap-[30px] md:grid-cols-2 xl:gap-y-[70px]">
            <div>
                <h1 className="font-bold md:text-[45px] md:leading-[52px]
                text-[35px] leading-[42px] mb-1 text-primary">
                    1000+
                </h1>
                <p className=" text-slate-700 font-bold mb-3">
                    Satisfied Clients
                </p>
                <p className=" text-slate-600 ">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Labore totam dolor nihil
                </p>
            </div>
            <div>
                <h1 className="font-bold md:text-[45px] md:leading-[52px]
                text-[35px] leading-[42px] mb-1 text-primary">
                    86
                </h1>
                <p className=" text-slate-700 font-bold mb-3">
                    Skilled Employees
                </p>
                <p className=" text-slate-600 ">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Labore totam dolor nihil
                </p>
            </div>
            <div>
                <h1 className="font-bold md:text-[45px] md:leading-[52px]
                text-[35px] leading-[42px] mb-1 text-primary">
                    500+
                </h1>
                <p className=" text-slate-700 font-bold mb-3">
                    Projects Completed
                </p>
                <p className=" text-slate-600 ">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Labore totam dolor nihil
                </p>
            </div>
            <div>
                <h1 className="font-bold md:text-[45px] md:leading-[52px]
                text-[35px] leading-[42px] mb-1 text-primary">
                    10
                </h1>
                <p className=" text-slate-700 font-bold mb-3">
                    Locations Worldwide
                </p>
                <p className=" text-slate-600 ">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Labore totam dolor nihil
                </p>
            </div>
        </div>
        <div className="flex-1">
            <h1 className=" text-[35px] leading-[44px] sm:leading-[52px]
            sm:text-[46px] text-secondary font-extrabold mb-[30px] lg:mb-[53px] drop-shadow-sm">
                Subscribe to our newsletter and recieve special updates
            </h1>
            <div className="bg-white py-3 px-4 flex items-center justify-between border 
            border-gray-200 rounded-[10px] mb-[49px]">
                <input type="text" placeholder="Enter Your Email" 
                className="md:text-[14px] outline-none ml-5 w-1/2" />
                <div>
                    <button className="py-[17px] px-[26px] rounded-[8px] text-white duration-500
                    bg-primary whitespace-nowrap hover:bg-[#f88eb8] flex-1 w-fit">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>  
      </div>
     <div className="flex item-center gap-10 justify-center mt-3">
            <div className="flex items-center gap-[10px]">
                <div className="text-primary">
                    <AiFillCheckCircle/>
                </div>
                <span className="text-md text-gray-500">
                    Special Promotions
                </span>
            </div>
            <div className="flex items-center gap-[10px]">
                <div className="text-primary">
                    <AiFillCheckCircle/>
                </div>
                <span className="text-md text-gray-500">
                    Recieve Updates
                </span>
            </div>
        </div>
    </section>
  )
}

export default Info
