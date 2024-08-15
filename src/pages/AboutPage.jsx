import Footer from "../components/footer_components/Footer"
import Navbar from "../components/navbar_components/Navbar"

export default function AboutPage(){
    return (
    <>
        <Navbar isAuth={false}/>
        <div>
            About Page
        </div>
        <Footer/>
    </>
    )
}