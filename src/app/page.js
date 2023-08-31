"use client";

import Image from "next/image";
import styles from "./page.module.css";
import GetTitle from "./components/GetTitle";
import GetMenu from "./components/GetMenu";

export default function Home() {
  return (
    <>
      <div className="app">
        <section className="hero">
        <GetTitle />
        </section>
        <section>
          <GetMenu />
        </section>
      </div>
    </>
  );
}
