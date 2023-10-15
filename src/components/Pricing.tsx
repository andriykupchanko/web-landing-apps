import { AiFillCheckCircle } from "react-icons/ai";

const Pricing = () => {
  return (
    <div>
      <section className="bg-secondary py-20 mt-10" id="pricing">
        <h2 className="font-bold text-[35px] md:text-[46px] text-gray-800 text-center mb-5">
            Choose The Best Plan For You
        </h2>
        <div className="max-w-[1400px] w-[89%] m-auto grid 
        lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <div className=" rounded-2xl p-[35px] bg-white flex 
            flex-col justify-between border border-gray-400">
                <div>
                    <div className=" mb-[21px]">
                        <span className=" text-2xl text-primary font-bold ">35$</span>
                        <span className=" text-sm text-gray-400 font-bold ">/Month</span>
                    </div>
                    <h5 className="text-2xl font-bold mb-[9px]">
                        Dreamer
                    </h5>
                    <p className="text-gray-400 text-sm font-bold mb-[43px]">
                        Basic plan but has some really good perks
                    </p>
                    <hr className="w-full bg-gray-400 mb-[21px]"/>
                    <ul className=" mb-[21px]">
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">100 GB Storage</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">2 Users Available</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">1 Social Account</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">1 Email Account</span>
                        </li>
                    </ul>
                </div>
                <button className="py-[11px] px-[22px] rounded-md
                bg-primary text-white font-bold duration-500 hover:bg-[#f88eb7]">
                    Get Started
                </button>
            </div>
            <div className=" rounded-2xl p-[35px] bg-white flex 
            flex-col justify-between border border-gray-400">
                <div>
                    <div className=" mb-[21px]">
                        <span className=" text-2xl text-primary font-bold ">50$</span>
                        <span className=" text-sm text-gray-400 font-bold ">/Month</span>
                    </div>
                    <h5 className="text-2xl font-bold mb-[9px]">
                        Thinker
                    </h5>
                    <p className="text-gray-400 text-sm font-bold mb-[43px]">
                        Our Thinker plan is perfect if your'e looking for quick growth
                    </p>
                    <hr className="w-full bg-gray-400 mb-[21px]"/>
                    <ul className=" mb-[21px]">
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">300 GB Storage</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">5 Users Available</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">3 Social Account</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">3 Email Account</span>
                        </li>
                    </ul>
                </div>
                <button className="py-[11px] px-[22px] rounded-md
                bg-primary text-white font-bold duration-500 hover:bg-[#f88eb7]">
                    Get Started
                </button>
            </div>
            <div className=" rounded-2xl p-[35px] bg-primary flex 
            flex-col justify-between border border-gray-400 relative">  
                
                <div>
                    <div className="mb-[21px]">
                        <span className=" text-2xl text-white font-bold ">100$</span>
                        <span className=" text-sm text-black  font-bold ">/Month</span>
                    </div>
                    <h5 className="text-2xl font-bold mb-[9px] text-white">
                        Imaginative
                    </h5>
                    <p className="text-blacktext-sm font-bold mb-[43px]">
                        Basic plan but has some really good perks
                    </p>
                    <hr className="w-full bg-black mb-[21px]"/>
                    <ul className=" mb-[21px]">
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-secondary"/>
                            </div>
                            <span className="text-md text-white">500 GB Storage</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-secondary"/>
                            </div>
                            <span className="text-md text-white">10 Users Available</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-secondary"/>
                            </div>
                            <span className="text-md text-white">10 Social Account</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-secondary"/>
                            </div>
                            <span className="text-md text-white">10 Email Account</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-secondary"/>
                            </div>
                            <span className="text-md text-white">Custom Branding</span>
                        </li>
                    </ul>
                </div>
                <button className="py-[11px] px-[22px] rounded-md
                bg-secondary text-white font-bold duration-500 hover:bg-[#accce8]">
                    Get Started
                </button>
            </div>
            <div className=" rounded-2xl p-[35px] bg-white flex 
            flex-col justify-between border border-gray-400">
                <div>
                    <div className=" mb-[21px]">
                        <span className=" text-2xl text-primary font-bold ">300$</span>
                        <span className=" text-sm text-gray-400 font-bold ">/Month</span>
                    </div>
                    <h5 className="text-2xl font-bold mb-[9px]">
                        Enterprise
                    </h5>
                    <p className="text-gray-400 text-sm font-bold mb-[43px]">
                        Our enterprise plan is for large companies with 50+ employees
                    </p>
                    <hr className="w-full bg-gray-400 mb-[21px]"/>
                    <ul className=" mb-[21px]">
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">1 TB Storage</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">Unlimited Users Available</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">Unlimited Social Available</span>
                        </li>
                        <li className="flex items-center gap-[5px] mb-[17px]">
                            <div>
                                <AiFillCheckCircle className="text-[#FFAFCC]"/>
                            </div>
                            <span className="text-md text-gray-500">Unlimited Email Accounts</span>
                        </li>
                    </ul>
                </div>
                <button className="py-[11px] px-[22px] rounded-md
                bg-primary text-white font-bold duration-500 hover:bg-[#f88eb7]">
                    Get Started
                </button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
