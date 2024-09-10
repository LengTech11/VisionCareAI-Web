export default function SlideCard({image, title, description, className}) {
    return (
        <div className={`h-[300px] min-w-full flex justify-between items-center tablet-md:flex-col tablet-md:h-fit ${className}`}>
            {/* Image Section */}
            <div className="h-full w-1/3 flex justify-center items-center bg-primary tablet-md:h-[300px] tablet-md:w-full">
                {image}
            </div>
            {/* Content Section */}
            <div className="h-full w-2/3 flex flex-col justify-center items-center tablet-md:w-full tablet-md:p-5">
                <p className="text-xl mb-5">{title}</p>
                <p className="text-sm text-center px-10">{description}</p>
            </div>
        </div>
    )
}

SlideCard.defaultProps = {
    className: ''
}