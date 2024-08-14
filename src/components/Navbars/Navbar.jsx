import { useState } from "react";
import { CambodiaFlag, EnglishFlag, logo, navbarList, titles } from "../../utils/variables";
import { motion } from "framer-motion";
import TitleTransition from "./TitleTransition";
import Drawer from "./Drawer";

export default function Navbar(props) {

    const [isEnglish, setIsEnglish] = useState(true) 

    const motionHover = {
        scale: 1.2, 
        transition: { duration: 1 }
    }
    const motionTap = {
        scale: 0.9 
    }

    return (
        <div className="flex justify-between items-center shadow-md px-4 bg-white">
            <div className="flex justify-center items-center p-2">
                <img src={logo} alt="VisionCareAI Logo" height={80} width={80} className="bg-blue-500"/>
                <div className="h-[50px] w-[2px] mr-2 ml-1 bg-blue-500"/>
                <TitleTransition titles={titles}/>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center mr-5 navbar-xl:hidden">
                    {navbarList.map((item, index) => (
                        <div className="mx-2 text-sm cursor-pointer uppercase" key={index}>{item.label}</div>
                    ))}
                </div>
                <div className="flex justify-center items-center [&>img]:cursor-pointer [&>img]:ml-5 [&>img]:h-[35px] [&>img]:w-[35px]">
                    {props.isAuth ? 
                    <div className="flex justify-center items-center cursor-pointer text-blue-500">
                        <span className="material-icons mr-1">account_circle</span>
                        <p>Username</p>
                    </div>
                    : <motion.div 
                        className="px-4 py-2 text-sm rounded-md cursor-pointer border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white" 
                        whileHover={motionHover}
                        whileTap={motionTap}
                      >
                        Login
                    </motion.div>}
                    {isEnglish ? 
                    <motion.img src={CambodiaFlag} alt="Cambodia Flag" onClick={()=>setIsEnglish(false)} whileHover={motionHover} whileTap={motionTap}/> 
                    : <motion.img src={EnglishFlag} alt="English Flag" onClick={()=>setIsEnglish(true)} whileHover={motionHover} whileTap={motionTap}/>}
                    <Drawer/>
                </div>
            </div>
        </div>
    )
}