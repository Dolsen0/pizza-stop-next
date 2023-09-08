"use client";

import GetTitle from "./components/GetTitle";
import GetMenu from "./components/GetMenu";
import GetLocation from "./components/GetLocation";
import AboutUs from "./components/AboutUs";
import Frozen from "./components/Frozen";

export default function Home() {
  return (
    <>
      <div className="app">
        <section className="hero">
        <GetTitle />
        </section>
        <section className="about">
          <AboutUs />
        </section>
        <section>
          <GetMenu />
        </section>
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