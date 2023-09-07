"use client";

import GetTitle from "./components/GetTitle";
import GetMenu from "./components/GetMenu";
import GetLocation from "./components/GetLocation";
import AboutUs from "./components/AboutUs";

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
      </div>
    </>
  );
}


// add style to address section
// add image to page