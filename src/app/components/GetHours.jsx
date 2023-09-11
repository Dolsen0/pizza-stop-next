import { useState, useEffect } from "react";

export default function GetHours() {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    fetch("https://pizza-stop-6b665c7cd62d.herokuapp.com/info")
      .then((res) => res.json())
      .then((data) => {
        setHours(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  return (
    <>
      <h2>Hours</h2>
      {daysOfWeek.map((day) => (
        <p key={day}>{`${day.charAt(0).toUpperCase() + day.slice(1)}: ${
          hours.hours && hours.hours[day]
        }`}</p>
      ))}
    </>
  );
}
