import SlideCard from "./SlideCard";

export default function Slider() {
    return (
        <div className="container pb-4 my-5 relative">
            <span className="absolute top-1/2 left-3 -translate-y-1/4 p-1 cursor-pointer material-icons">arrow_back</span>
            <SlideCard/> 
            <span className="absolute top-1/2 right-3 -translate-y-1/4 p-1 cursor-pointer material-icons">arrow_forward</span>
            <div className="flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-1/4">
                {[1,2,3].map((item) => <div className="size-3 mx-1 rounded-full bg-blue-500"/>)}
            </div>
        </div>
    )   
}