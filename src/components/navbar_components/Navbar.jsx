import { useState } from "react";
import { CambodiaFlag, EnglishFlag, motionButton, navbarData, navbarLogo, titles } from "../../utils/variables";
import { motion } from "framer-motion";
import TitleTransition from "./TitleTransition";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

export default function Navbar(props) {

    const [isEnglish, setIsEnglish] = useState(true) 

    return (
        <div className="flex justify-between items-center shadow-md px-4 bg-white phone-xl:flex-col phone-xl:py-4">
            <div className="flex justify-center items-center p-2 phone-xl:mb-4">
                <Link to="/">
                    <img src={navbarLogo} alt="VisionCareAI Logo" height={80} width={80} className="bg-blue-500"/>
                </Link>
                <div className="h-[50px] w-[2px] mr-2 ml-1 bg-blue-500"/>
                <TitleTransition titles={titles}/>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center mr-5 tablet-xl:hidden">
                    {navbarData.map((item, index) => (
                        <Link to={item.link} className="mx-2 text-sm cursor-pointer uppercase group" key={index}>
                            <p className="group-hover:text-blue-500">{item.label}</p>
                            <div className="h-1 w-0 group-hover:w-full duration-300 [&:not(:hover)]:duration-300 bg-blue-500"/>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center items-center [&>img]:cursor-pointer [&>img]:ml-5 [&>img]:h-[35px] [&>img]:w-[35px]">
                    {props.isAuth ? 
                    <div className="flex justify-center items-center cursor-pointer text-blue-500 phone-lg:hidden">
                        <span className="material-icons mr-1">account_circle</span>
                        <p>Username</p>
                    </div>
                    : <motion.div 
                        className="px-4 py-2 text-sm rounded-md cursor-pointer border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white" 
                        whileHover={motionButton.whileHover}
                        whileTap={motionButton.whileTap}
                      >
                        Login
                    </motion.div>}
                    {isEnglish ? 
                    <motion.img src={CambodiaFlag} alt="Cambodia Flag" onClick={()=>setIsEnglish(false)} whileHover={motionButton.whileHover} whileTap={motionButton.whileTap}/> 
                    : <motion.img src={EnglishFlag} alt="English Flag" onClick={()=>setIsEnglish(true)} whileHover={motionButton.whileHover} whileTap={motionButton.whileTap}/>}
                    <Drawer/>
                </div>
            </div>
        </div>
    )
}