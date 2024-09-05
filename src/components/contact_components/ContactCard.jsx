export default function ContactCard({ image, label, labelName }) {
    return (
        <div className="py-5 px-10 rounded-xl shadow-lg flex flex-col items-center cursor-pointer bg-white dark:bg-dark">
            <div className="flex flex-col items-center">
                <img src={image} alt={labelName} height={50} width={50}/>
                <p className="text-xs mt-2">{label}</p>
            </div>
            <p className="text-sm mt-2">{labelName}</p>
        </div>
    )   
}

