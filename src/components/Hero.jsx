import hero from "../assets/hero.jpg";
import "../styles/Hero.css"

const Hero = () => {
    const text = "'t"
  return (
    <section className="hero-container">
      
      <div className="title">
        
        <h2>Learn Confidently with <span className="h-text">DeVab</span> </h2>
        <div className="line"></div>
        <p>Are you looking for amazing platform?
         Don{text} worry! We got it for you! </p>
      </div>
      
    

      <div className="img-container">
        <img src={hero} />
      </div>
    </section>
  );
};

export default Hero;
