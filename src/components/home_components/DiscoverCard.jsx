import { motion } from "framer-motion"

export default function DiscoverCard({image, label}) {
    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            onHoverStart={e => {}}            
            onHoverEnd={e => {}}
            className="flex justify-between items-center px-4 py-2 rounded-lg shadow-md bg-grey dark:bg-dark dark:shadow-2xl cursor-pointer"
        >
            <div className="min-w-16 h-16 rounded-full bg-primary"/>
            <p className="ml-2 text-sm">{label}</p>
        </motion.div>
    )   
}