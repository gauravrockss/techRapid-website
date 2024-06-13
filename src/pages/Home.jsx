import React from "react";
import Howitwork from "../Component/Howitwork";
import Hero from "../Component/Hero";
import Useapp from "../Component/Useapp";
import Cards from "../Component/Card";
import Contact from "../Component/Contact";

function Home() {
  return (
    <>
      <Hero
        image="hero.svg"
        title="Online Payment Made  Easy For You."
        content=" Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Voluptas asperiores maxime
                in corporis nemo quia et consequuntur
                delectus sint omnis, deleniti, adipisci
                suscipit. Placeat inventore delectus saepe
                tenetur quas hic."
      />
      <Howitwork />
      <Useapp
        headtitle="-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY"
        head2title="How to use the App ?"
        image="use1.jpg"
      />
      <Useapp
        headtitle="-- SUPPORT IN ANY LANGUAGES"
        head2title="World class support is available 24/7"
        image="use2.jpg"
        reverse="true"
      />
      <Cards />
      <Contact />
    </>
  );
}
export default Home;
