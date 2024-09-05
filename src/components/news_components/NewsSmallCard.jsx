import { motion } from "framer-motion"
import { motionButton } from "../../utils/variables"
import { useNavigate } from "react-router"

export default function NewsSmallCard() {
    const navigate = useNavigate()

    return (
        <div className="h-[250px] w-full flex items-stretch rounded-lg my-2 border-2 border-grey dark:border-darkgray"> 
           <div className="w-1/3 m-3 rounded-lg bg-grey tablet-xl:hidden"/>
           <div className="w-2/3 m-3 flex flex-col justify-between tablet-xl:w-full">
                <div>
                    <div className="text-sliver text-xs">
                        <p className="p-2 w-fit rounded-lg border-[1px] border-sliver">Phnom Penh - 23 February 2024</p> 
                        <p className="text-[10px] mt-1">3 minute ago</p>
                    </div>              
                    <div className="py-2">
                        <p className="text-lg font-semibold">VisionCare AI app won Global Digital Startup</p>
                        <p className="mt-2 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <motion.button 
                        className="bg-primary text-white text-sm rounded-md p-2"
                        whileHover={motionButton.whileHover}
                        whileTap={motionButton.whileTap}
                        onClick={() => navigate("/news/111", { replace: true })}
                    >   
                        Read more
                    </motion.button>
                </div>
           </div>
        </div>
    )   
}