import { DownloadVisioncareAppImg, GetOnAppStoreImg, GetOnPlaystoreImg, slideData } from "../utils/variables"
import Slider from "../components/home_components/Slider"
import DiscoverCard from "../components/home_components/DiscoverCard"
import { NavLink } from "react-router-dom"
import NewsCard from "../components/home_components/NewsCard"

export default function HomePage() {
  return (
    <>
      <div>
        {/* Introduction Section */} 
        <div className="p-10 flex flex-col items-center bg-grey dark:bg-dark dark:text-darkgray">
          <div className="flex flex-col items-center mb-10">
            <p className="text-xl mb-2">Welcome to VisionCare AI</p>
            <p className="text-center text-sm mb-10">Welcome to VisionCare AI your AI Vision Care assistant that help you understand better about your sight and syndrome</p>
          </div>
          <NavLink
            className="w-fit py-2 px-4 rounded-lg cursor-pointer text-sm text-white bg-primary duration-200 hover:scale-105"  
            to="/scan"
          >
            Scan now
          </NavLink>
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
              <p className="text-md text-center font-bold mb-5">Download Visioncare AI App</p>
              <p className="text-sm text-center my-5 leading-7">
                The Visioncare AI App is a cutting-edge mobile application designed to help users detect eye diseases with the power of artificial intelligence. 
                This application also help users make appointment with expert doctor to discuss. It offers users an easy-to-use interface, enabling them to take 
                preventive measures by detecting eye conditions early. The app is available for download on both the App Store and Google Play, ensuring accessibility
                for a wide range of users.
              </p>
              <div className="flex items-center gap-2">
                <img src={GetOnAppStoreImg} alt="" height={50} width={100} className="cursor-pointer"/>
                <img src={GetOnPlaystoreImg} alt="" height={50} width={100} className="cursor-pointer"/>
              </div>
            </div>
            <img src={DownloadVisioncareAppImg} alt="download-visioncare-app" className="w-1/2 tablet-md:hidden"/>
        </div>
      </div>
    </>
  )
}

