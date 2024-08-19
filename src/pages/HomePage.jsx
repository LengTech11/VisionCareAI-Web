import Footer from "../components/footer_components/Footer"
import Navbar from "../components/navbar_components/Navbar"
import { motion } from "framer-motion"
import { motionButton } from "../utils/variables"
import SlideCard from "../components/home_components/SlideCard"
import Slider from "../components/home_components/Slider"

export default function HomePage() {
  return (
    <>
      <Navbar isAuth={true}/>
      <div>
        {/* Introduction Section */} 
        <div className="p-10 flex flex-col items-center bg-gray-100">
          <div className="flex flex-col items-center mb-10">
            <p className="text-xl mb-2">Welcome to VisionCare AI</p>
            <p className="text-center text-sm">Welcome to VisionCare AI your AI Vision Care assistant that help you understand better about your sight and syndrome</p>
          </div>
          <motion.div 
            className="w-fit py-2 px-4 rounded-lg cursor-pointer text-sm text-white bg-blue-500" 
            whileHover={motionButton.whileHover}
            whileTap={motionButton.whileTap}
          >
            Scan now
          </motion.div>
        </div>
        {/* Slide Section */}
        <Slider/>
      </div>
      <Footer/>
    </>
  )
}

