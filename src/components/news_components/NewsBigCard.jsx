import { motion } from "framer-motion"
import { motionButton } from "../../utils/variables"
import { useNavigate } from "react-router"

export default function NewsBigCard() {
    const navigate = useNavigate()

    return (
        <div className="container h-[300px] flex items-stretch">
            <div className="w-1/3 my-4 mr-2 ml-0 rounded-lg bg-grey tablet-xl:hidden"/>
            <div className="w-2/3 my-4 ml-2 mr-0 flex flex-col justify-between tablet-xl:w-full">
                <div>
                    <div className="text-sliver text-xs">
                        <p className="p-2 w-fit rounded-lg border-[1px] border-sliver">Phnom Penh - 23 February 2024</p> 
                        <p className="text-[10px] mt-1">3 minute ago</p>
                    </div>              
                    <div className="py-5">
                        <p className="text-2xl font-semibold">VisionCare AI app won Global Digital Startup</p>
                        <p className="mt-3">
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
                        onClick={() => navigate("/news/222", { replace: true })}
                    >
                        Read more
                    </motion.button>
                </div>
            </div>
        </div>
    )   
}