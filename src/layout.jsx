import { Outlet } from "react-router"
import Navbar from "./components/navbar_components/Navbar"
import Footer from "./components/footer_components/Footer"

export default function Layout() {
    return ( 
        <div>
            <Navbar isAuth={true}/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}