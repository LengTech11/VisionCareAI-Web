import { navbarData } from "../../utils/variables"
import { motion } from "framer-motion"

export default function Drawer() {
    return (
        <div className="drawer drawer-end ml-5 hidden tablet-xl:block">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page Content Section */}
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-sm border-2 border-blue-500 text-blue-500 bg-white material-icons">menu</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="relative menu bg-base-200 text-base-content min-h-full w-80 p-2">
            {/* Sidebar Content Section */}
            {navbarData.map((item, index) => (
                <li key={index} className="mb-1 p-4 cursor-pointer hover:bg-gray-200">{item.label}</li>
            ))}
            <motion.label  
              htmlFor="my-drawer-4" 
              aria-label="close sidebar" 
              className="absolute top-2 right-2 p-2 h-10 w-10 rounded-full bg-blue-500 text-white cursor-pointer drawer-overlay material-icons"
              whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              whileTap={{ scale: 0.9 }}
            >
              close
            </motion.label>
          </ul>
        </div>
      </div>
    )
}