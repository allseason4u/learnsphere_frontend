
import Navbar from "../../Components/landing/Navbar/Navbar.jsx";
import Footer from "../../Components/landing/Footer/Footer.jsx";

function landingLayout({children}) {
  return <>
  <Navbar />
    {children}
  <Footer />
  </>
}

export default landingLayout;
