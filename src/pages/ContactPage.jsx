import ContactCard from "../components/contact_components/ContactCard";
import InputField from "../components/contact_components/InputField";
import { contactPageData } from "../utils/variables";

export default function ContactPage() {
    return (
        <div className="relative w-full h-[850px]">
            <div className="w-full h-[30%] bg-cover bg-center bg-no-repeat bg-[url('https://www.eyedoctorportcharlotte.com/wp-content/uploads/2023/06/30908657_l-1200x480-1.jpg')]"/>
            <div className="w-full h-[70%]">
                <form className="container mt-24">
                    <p className="uppercase font-medium text-xl">Send Messages</p>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div>
                            <label htmlFor="name" className="text-sm">Name</label>
                            <InputField
                                icon="person"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Name..."
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="text-sm">Phone Number</label>
                            <InputField
                                icon="phone"
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter Phone Number..."
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="text-sm">Name</label>
                            <InputField
                                icon="email"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter Email..."
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="text-sm">Subject Message</label>
                            <InputField
                                icon="subject"
                                name="subject"
                                id="subject"
                                placeholder="Enter Subject Message..."
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-[20px]">
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea 
                            placeholder="Enter Message..."
                            className="h-40 outline-none rounded-lg text-sm mt-1 p-2 bg-transparent border-2 border-grey"
                        />
                    </div>
                </form>    
            </div>
            <div className="absolute left-0 right-0 top-[20%] flex justify-center items-center gap-6">
            {contactPageData.map((item) => (
                <ContactCard
                    image={item.image}
                    label={item.label}
                    labelName={item.labelName}
                />
            ))}
            </div>                
        </div>
    )
}