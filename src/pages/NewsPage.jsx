import Footer from "../components/footer_components/Footer";
import Navbar from "../components/navbar_components/Navbar";

export default function NewsPage() {
    return (
        <>
            <Navbar isAuth={false}/>
            <div>News Page</div>
            <Footer/>
        </>
    )
}