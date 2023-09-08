"use client";

import GetTitle from "./components/GetTitle";
import GetMenu from "./components/GetMenu";
import GetLocation from "./components/GetLocation";
import AboutUs from "./components/AboutUs";
import Frozen from "./components/Frozen";
import History from "./components/History";

export default function Home() {
  return (
    <>
      <div className="app">
        <section className="hero">
        <GetTitle />
        </section>
        <section className="about">
          <AboutUs/>
        </section>

        <section>
          <History />
        </section>

       
          <GetMenu />
  

        <section>
          <GetLocation />
        </section>
        <section className="frozen">
          <Frozen />
        </section>
      </div>
    </>
  );
}


// add style to address section
// add image to page