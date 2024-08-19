export default function SlideCard() {
    return (
        <div className="h-[250px] flex justify-between items-center">
            {/* Image Section */}
            <div className="h-full w-1/3">
                IMG1
            </div>
            {/* Content Section */}
            <div className="h-full w-2/3 flex flex-col justify-center items-center">
                <p className="text-xl mb-5">Laboratory</p>
                <p className="text-sm text-center px-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatem sit. Quae asperiores ullam quaerat. 
                    Ipsum est iure culpa soluta? Enim ipsam reprehenderit ea voluptatibus, minima aliquam magnam vel vitae!.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, voluptatem sit. Quae asperiores ullam quaerat. 
                </p>
            </div>
        </div>
    )
}