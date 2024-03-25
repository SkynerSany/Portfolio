import About from "../../components/about/about";
import './portfolioPage.scss';
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Greeting from "../../components/greeting/greeting";
import Header from '../../components/header/header';
import Portfolio from "../../components/portfolio/portfolio";

function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <Greeting />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default PortfolioPage;
