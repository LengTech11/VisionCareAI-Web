import Footer from "../components/footer_components/Footer"
import SlideCard from "../components/home_components/SlideCard"
import Navbar from "../components/navbar_components/Navbar"
import { motionButton, ourTeamData, slideData } from "../utils/variables"
import { motion } from "framer-motion"

export default function AboutPage(){
    return (
    <>
        <Navbar isAuth={false}/>
        <div>
            {/* Unkown Section */}
            <div className="h-[500px] w-full bg-grey dark:bg-dark"/>
            {/* Info Section */}
            <div className="my-5">
            {slideData.map((item, index) => (
                <SlideCard 
                    image = {item.image}
                    title = {item.content.title}
                    description = {item.content.description}
                    className={`${index%2 !== 0 && 'flex-row-reverse'}`}
                />
            ))} 
            </div>
            {/* Ourteam Section */}
            <div className="flex flex-col items-center bg-grey dark:bg-dark">
                <div className="w-full grid grid-cols-3 place-items-center gap-5 tablet-lg:grid-cols-2 phone-lg:grid-cols-1">
                {ourTeamData.map((item, index) => (
                    <div className="size-[230px] rounded-full my-3 overflow-hidden shadow-lg bg-white dark:bg-dark tablet-md:size-[215px] phone-lg:size-[300px]">
                        <div className="w-full h-2/3 bg-primary"/>
                        <div className="w-full h-1/3 text-xs flex flex-col items-center justify-start pt-3 tablet-md:text-[10px] phone-lg:text-sm">
                            <p>{item.name}</p>
                            <p>{item.position}</p>
                        </div>
                    </div>
                ))}
                </div>
                <motion.button 
                    whileHover={motionButton.whileHover}
                    whileTap={motionButton.whileTap}
                    className="px-3 py-2 my-10 text-sm rounded-md text-white bg-primary"
                >
                    Contact Us
                </motion.button>
            </div>
        </div>
        <Footer/>
    </>
    )
}