import { useEffect } from "react";
import { useState } from "react";

export default function GetTitle() {
  const [general, setGeneral] = useState({});
  useEffect(() => {
    fetch("https://pizza-stop-6b665c7cd62d.herokuapp.com/info")
      .then((response) => response.json())
      .then((data) => {
        setGeneral(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <header className="title">
        <h1>"Pizza Stop"</h1>
        <p>"Stop and have a slice"</p>
      </header>
    </>
  );
}
