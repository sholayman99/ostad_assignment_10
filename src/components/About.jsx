import { useState } from "react";
import "../styles/About.css";
const About = () => {
  const text = "'s";
  const [random, setRandom] = useState(null);
  const [number, setNumber] = useState(0);
  const [error, setError] = useState("");

  const getNum = (event) => {
    const num = event.target.value;
    setNumber(num);
  };

  const generateNumber = (event) => {
    event.preventDefault();
    console.log(number);
    if (number >= 10) {
      const random1 = Math.floor(Math.random() * 1000);
      setRandom(random1);
      
    } else if (number > 10 && number <= 30) {
      const random2 = Math.floor(Math.random() * 10000);
      setRandom(random2);
     
    } else {
      const err = "Put a Number between 10 to 30";
      setError(err);
      
    }
    
  };
  return (
    <div className="about-container">
    
      <h2>Let{text} do some Conditional Rendering__ </h2>
      {error ? <p className="error">{error} </p> : <p>{random} </p>}
      <input
        className="text-input"
        onBlur={getNum}
        type="number"
        name="number"
        placeholder="Put a number between 10-30"
      />{" "}
      <br />
      <input
        className="sub-btn"
        onClick={generateNumber}
        type="submit"
        value={"CLick"}
      />
    </div>
  );
};

export default About;
