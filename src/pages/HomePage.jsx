import Footer from "../components/footer_components/Footer"
import Navbar from "../components/navbar_components/Navbar"
import { motion } from "framer-motion"
import { GetOnAppStoreImg, GetOnPlaystoreImg, motionButton, slideData } from "../utils/variables"
import Slider from "../components/home_components/Slider"
import DiscoverCard from "../components/home_components/DiscoverCard"
import NewsCard from "../components/home_components/NewsCard"

export default function HomePage() {
  return (
    <>
      <Navbar isAuth={true}/>
      <div>
        {/* Introduction Section */} 
        <div className="p-10 flex flex-col items-center bg-grey dark:bg-dark dark:text-darkgray">
          <div className="flex flex-col items-center mb-10">
            <p className="text-xl mb-2">Welcome to VisionCare AI</p>
            <p className="text-center text-sm">Welcome to VisionCare AI your AI Vision Care assistant that help you understand better about your sight and syndrome</p>
          </div>
          <motion.div 
            className="w-fit py-2 px-4 rounded-lg cursor-pointer text-sm text-white bg-primary" 
            whileHover={motionButton.whileHover}
            whileTap={motionButton.whileTap}
          >
            Scan now
          </motion.div>
        </div>
        {/* Slide Section */}
        <Slider slideData={slideData}/>
        {/* Discover Section */} 
        <div className="flex flex-col items-start m-10">
          <p className="mb-3 text-xl">Discover</p>
          <div className="flex jusify-between items-start gap-5 ml-3 tablet-lg:flex-col">
            <DiscoverCard 
              image="" 
              label="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <DiscoverCard 
              image="" 
              label="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
            <DiscoverCard 
              image="" 
              label="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
        {/* News Section */}
        <div className="flex flex-col items-start m-10">
          <p className="text-xl">News</p>
          <div className="w-full overflow-x-scroll scroll-smooth no-scrollbar flex justify-start"> 
            {[1,2,3,4,5,6,7,8].map((item, index) => (
              <NewsCard
                key={index}
                image=""
                title="Sit amet consectetur adipisicing elit"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil error odit eum impedit ipsum vitae consectetur?"
              />
            ))}
          </div>
        </div>
        {/* Download MobileApp Section */}
        <div className="flex items-stretch tablet-md:flex-col tablet-md:[&>div]:w-full">
            <div className="w-1/2 flex flex-col items-center justify-center p-20">
              <p className="text-md text-center font-bold">Download Visioncare AI App</p>
              <p className="text-sm text-center my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum eius suscipit vel veniam eveniet expedita similique blanditiis? Saepe, ullam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum eius suscipit vel veniam eveniet expedita similique blanditiis? Saepe, ullam.
              </p>
              <div className="flex items-center gap-2">
                <img src={GetOnAppStoreImg} alt="" height={50} width={100} className="cursor-pointer"/>
                <img src={GetOnPlaystoreImg} alt="" height={50} width={100} className="cursor-pointer"/>
              </div>
            </div>
            <div className="w-1/2 bg-primary tablet-md:hidden"/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

