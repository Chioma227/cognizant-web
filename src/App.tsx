import './App.css';
import CaseStudiesPage from './components/case-studies/CaseStudies';
import HeroSection from './components/hero/Hero';
import Partners from './components/partners/Partners';
import PurposeSection from './components/porpose/PurposeSection';

const App = () => {
  return (
    <>
      <HeroSection />
      <PurposeSection/>
      <CaseStudiesPage/>
      <Partners/>
    </>
  )
};

export default App;
