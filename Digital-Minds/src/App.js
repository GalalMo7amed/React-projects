import './App.css';
import Navebar from './components/Navebar/Navebar';
import AboutMe from './Pages/HomePage/AboutMe';
import CoursesTracks from './Pages/HomePage/CoursesTracks';
import HeroSection from './Pages/HomePage/HeroSection';
import Technologys from './Pages/HomePage/Technologys';
import WhyChooseMe from './Pages/HomePage/WhyChooseMe';

function App() {
  return (
    <>
      <Navebar />
      <HeroSection />
      <AboutMe />
      <Technologys />
      <WhyChooseMe />
      <CoursesTracks />

    </>
  );
}

export default App;
