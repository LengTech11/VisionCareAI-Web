import { motion } from "framer-motion"

export default function DiseaseCard({ image, title, description, key }) {
    return (
        <motion.div 
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
            className="w-full rounded-xl overflow-hidden flex justify-center items-stretch shadow-lg cursor-pointer bg-grey dark:bg-dark"
            key={key}
        >
            <img src={image} alt={title} className="w-[40%]"/>
            <div className="w-[60%] py-2 px-4 flex flex-col items-center">
                <p className="font-medium">{title}</p>
                <p className="text-xs mt-2 leading-5">{description}</p>
            </div>
        </motion.div>
    )
}