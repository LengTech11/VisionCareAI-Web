export default function InputField({ icon, type, name, id, ...rest }) {
    return (
        <div className="py-4 px-2 mt-1 rounded-lg flex justify-between items-center border-2 border-grey">
            <span className="material-icons">{icon}</span>
            <input
                type={type}
                name={name}
                id={id}
                {...rest}
                className="w-full bg-transparent outline-none text-sm ml-2"
            />
        </div>
    )   
}