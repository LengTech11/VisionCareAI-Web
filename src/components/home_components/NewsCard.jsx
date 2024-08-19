import { motion } from "framer-motion"

export default function NewsCard({image, title, description}) {
    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            onHoverStart={e => {}}            
            onHoverEnd={e => {}}
            className="h-[250px] min-w-[200px] m-3 relative rounded-lg shadow-md cursor-pointer bg-grey dark:bg-dark dark:shadow-2xl"
        >
            <div className="flex flex-col justify-start absolute left-0 bottom-0 p-3">
                <p className="text-sm font-bold">{title}</p>
                <p className="text-xs mt-2">{description}</p>
            </div>
        </motion.div>
    )  
}