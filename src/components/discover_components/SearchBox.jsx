export default function SearchBox({ className }) {
    return (
        <div className={`w-1/4 flex justify-between items-center p-3 rounded-xl shadow-lg bg-white tablet-xl:w-2/3 ${className}`}>
            <input type="text" name="discover" id="discover" placeholder="Search..." className="w-full outline-none bg-transparent"/>
            <span className="material-icons text-gray-400 cursor-pointer">search</span>
        </div>
    )
}