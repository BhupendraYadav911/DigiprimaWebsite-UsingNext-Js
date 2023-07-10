import Accelerate from "./components/AccelerateSection/Accelerate"
import HomeHeader from "./components/HomeHeader/HomeHeader"
import BillingPayment from "./components/BillingPayment/BillingPayment"
import OverviewAccordion from "./components/OverviewAccordion/OverviewAccordion"
import BuildStrategic from "./components/BuildStrategic/BuildStrategic"
import Serivces from "./components/Services /Services"
import NextGen from "./components/NextGen/NextGen"
import BoxAnim from "./components/box-animation/box-animation/box-animation"
import OpenAi from "./components/openAI/openAI"
import Three from "./components/Three/Three"
import Heathcare from "./components/healthcare/healthcare/healthcare"
import Fintech from "./components/Dynamic/Dynamic"
import Footer from "./components/footer/footer/footer"
import OurTrack from "./components/Our track/Our track /OurTrack"
import Idcare from "./components/Idcare/Idcare"
import FreeConsultation from "./components/FreeConsultation/FreeConsultation"
import Navbars from "./components/New Navbar/Navbars"
import Testimonial from "./components/clientSwiper/Testimonials"
import Navbhun from "./components/bhunNav/Navbhun"
// import Navbars from "./components/Navbar/Navbar"

const index = () => {
  return (
    <>
   
{/* <Navbars /> */}
    {/* <Navbars /> */}
    <Navbhun/>
    <HomeHeader />
    <Accelerate />
    <Serivces />
      <BillingPayment />
    <NextGen />
     <BoxAnim />
     <Heathcare />
    <OpenAi />
    <Fintech />
    <Three />
    <FreeConsultation />
    <OurTrack />
    <Idcare />
<Testimonial />
    <OverviewAccordion />
    <BuildStrategic />
    <Footer /> 
   
   
   
   
    </>
  )
}

export default index