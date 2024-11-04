import './App.css';
import BannarDownlodApp from './components/bannar/BannarDownlodApp';
import Bannars from './components/bannar/Bannars';
import Footer from './components/Footer/Footer';
import Navebar from './components/Navebar/Navebar';
import CardsOffers from './pages/Cards/CardsOffers';
import SuggestedOffers from './pages/Cards/SuggestedOffers';
import CardTours from './pages/CardsTours/CardTours';
import HeroSection from './pages/herosection/HeroSection';
import Interestedsec from './pages/Interestedsection/Interestedsec';
import CardsOffersslider from './pages/offers/CardsOffersslider';
import Search from './pages/Search/Search';


function App() {
  return (
    <>
      <Navebar />
      <HeroSection />
      <Search />
      <Interestedsec />
      <CardsOffers />
      <SuggestedOffers />
      <Bannars />
      <CardTours />
      <CardsOffersslider />
      <BannarDownlodApp />
      <Footer />
    </>
  );
}

export default App;
