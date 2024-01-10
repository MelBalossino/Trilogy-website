import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import CompaniesBanner from '../../components/CompaniesBanner/CompaniesBanner'
import AboutUsBanner from '../../components/AboutUsBanner/AboutUsBanner'
import Services from '../../components/Services/Services'
import GLPIBanner from '../../components/GLPIBanner/GLPIBanner'
import LandingPageBanner from '../../components/LandingPageBanner/LandingPageBanner'
import Footer from '../../components/Footer/Footer'
import logos from './logos'

function Home() {
    return (
        <>
            <Header />
            <Slider />
            <CompaniesBanner logos={logos} />
            <AboutUsBanner />
            <Services />
            <GLPIBanner />
            <LandingPageBanner />
            <Footer />
        </>
    )
}

export default Home
