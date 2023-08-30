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
      <header>
        <div>
          <h1>{general.general ? general.general.name : "..."}</h1>
          <p>{general.general ? general.general.motto : ""}</p>
        </div>
      </header>
    </>
  );
}
