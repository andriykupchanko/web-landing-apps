import heroImage from "../assets/heroimage.png";
import { AiFillStar } from "react-icons/ai";
const Hero = () => {
  return (
    <section className=" bg-secondary w-full">
      <div className="max-w-[1400px] w-[89%] m-auto grid md:grid-cols-2 
      grid-cols-1 gap-10 items-center">
        <div className="mt-20 md:mt-0 text-center md:text-start">
            <h2 className="text-white text-2xl font-bold drop-shadow-lg">Welcom to</h2>
            <h1 className="text-white text-6xl font-bold drop-shadow-lg mb-3">Image Media</h1>
            <p className="text-gray-500">
              Discover limitless growth possibilities through 
              innovative social media strategies, driven
              by Imagine Media's expertise and passion for success.
            </p>
            <div className="flex gap-4 md:gap-1 mt-6 justify-center md:justify-start">
              <a href="/" className=" duration-500 hover:bg-[#f88eb7] py-2 px-6  
              rounded shadow-lg text-white drop-shadow bg-primary">
                Pricing
              </a>
               <a href="/" className=" duration-500 hover:bg-[#f88eb7] py-2 px-6  
              rounded shadow-lg text-white drop-shadow bg-primary">
                More Info
              </a>
            </div>
        </div>
        <div className=" relative w-full">
            <img src={heroImage} alt="imagin" 
            className="w-full lg:h-[550px] h-[450px] object-cover"/>
            <div className="bg-white rounded-lg shadow-md m-3 text-center 
            w-44 p-4 absolute right-0 bottom-2 md:bottom-10 lg:bottom-20 left-2 md:left-5">
              <span className="text-3xl font-bold mb-0 text-primary">5000+</span>
              <h6 className="text-sm mt-1 text-slate-400">Reviews</h6>
            </div>
            <div className="bg-white absolute right-0 top-5 md:top-10 md:right-0 lg:right-15 w-44 p-4
            rounded-lg shadow-md m-3 text-center ">
              <div className=" font-semibold text-primary flex justify-center text-[18px]">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>            
              </div>
              <h6 className="text-sm text-slate-400">Top Rated Service</h6>
            </div>
        </div>   
      </div>
    </section>
  )
}

export default Hero
