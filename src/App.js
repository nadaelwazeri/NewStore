import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Home/Header";
import Content from "./Home/Content";
import Trend from "./Home/Trend";
import Category from "./Home/Category";

function App() { 
  
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Trend />
      <Category/>
      <Footer/>
    </div>
  );
}

export default App;
