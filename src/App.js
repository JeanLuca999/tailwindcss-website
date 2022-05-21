import AboutProduct from "./components/AboutProduct";
import BannerSection from "./components/BannerSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutProduct></AboutProduct>
      <BannerSection></BannerSection>
      <Testimonials></Testimonials>
    </>
  );
}
