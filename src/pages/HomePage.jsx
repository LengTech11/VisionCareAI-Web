import Footer from "../components/footer_components/Footer"
import Navbar from "../components/navbar_components/Navbar"

export default function HomePage() {
  return (
    <>
      <Navbar isAuth={true}/>
      <div className="w-screen h-screen flex justify-center items-center text-xl">Home Page</div>
      <Footer/>
    </>
  )
}

