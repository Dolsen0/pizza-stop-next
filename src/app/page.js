"use client";

import GetTitle from "./components/GetTitle";
import GetMenu from "./components/GetMenu";
import GetLocation from "./components/GetLocation";
import AboutUs from "./components/AboutUs";
import Frozen from "./components/Frozen";
import History from "./components/History";
import GetHours from "./components/GetHours";
import VisitUs from "./components/VisitUs";

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

        <section className="menu">
          <GetMenu />
        </section>

        <section>
          <History />
        </section>
        <section className="visit">
          <VisitUs />
          </section>
        <section className="frozen">
          <Frozen />
        </section>
      </div>
    </>
  );
}
