import { useState } from "react";
import { CambodiaFlag, EnglishFlag, motionButton, navbarData, VisioncareLogo, titles } from "../../utils/variables";
import { motion } from "framer-motion";
import TitleTransition from "./TitleTransition";
import Drawer from "./Drawer";
import { NavLink, useLocation } from "react-router-dom";
import Theme from "./Theme";

export default function Navbar(props) {
    const [isEnglish, setIsEnglish] = useState(true) 
    const location = useLocation()

    return (
        <div className="flex justify-between items-center shadow-md px-4 phone-xl:flex-col phone-xl:py-4">
            <div className="flex justify-center items-center p-2 phone-xl:mb-4">
                <NavLink to="/">
                    <img src={VisioncareLogo} alt="VisionCareAI Logo" height={80} width={80}/>
                </NavLink>
                <div className="h-[50px] w-[2px] mr-2 ml-1 bg-primary"/>
                <TitleTransition titles={titles}/>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center mr-5 tablet-xl:hidden">
                    {navbarData.map((item, index) => (
                        <NavLink 
                            to={item.link} 
                            key={index}
                            className={({ isActive }) => `mx-2 text-sm cursor-pointer uppercase group ${isActive && "text-blue-500"}`}
                        >
                            <p className="group-hover:text-primary">{item.label}</p>
                            <div className={`h-[2px] w-0 group-hover:w-full duration-300 ${location.pathname === item.link ? "w-full" : "w-0 group-hover:w-full"} [&:not(:hover)]:duration-300 bg-primary`}/>
                        </NavLink>
                    ))}
                </div>
                <div className="flex justify-center items-center [&>img]:cursor-pointer [&>img]:ml-5 [&>img]:h-[35px] [&>img]:w-[35px]">
                    {props.isAuth ? 
                    <div className="flex justify-center items-center cursor-pointer text-primary phone-lg:hidden">
                        <span className="material-icons mr-1">account_circle</span>
                        <p>Username</p>
                    </div>
                    : <motion.button 
                        className="px-4 py-2 text-sm rounded-md cursor-pointer border-2 border-primary text-primary hover:bg-primary hover:text-white" 
                        whileHover={motionButton.whileHover}
                        whileTap={motionButton.whileTap}
                      >
                        Login
                    </motion.button>}
                    {isEnglish ? 
                    <motion.img src={CambodiaFlag} alt="Cambodia Flag" onClick={()=>setIsEnglish(false)} whileHover={motionButton.whileHover} whileTap={motionButton.whileTap}/> 
                    : <motion.img src={EnglishFlag} alt="English Flag" onClick={()=>setIsEnglish(true)} whileHover={motionButton.whileHover} whileTap={motionButton.whileTap}/>}
                    <Theme/>
                    <Drawer/>
                </div>
            </div>
        </div>
    )
}