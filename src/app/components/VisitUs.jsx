import GetHours from "./GetHours";
import GetLocation from "./GetLocation";

export default function VisitUs() {
  return (
    <>
      <div className="visit__container">
        <div className="visit__location">
          <GetLocation />
        </div>
        <div className="visit__hours">
          <GetHours />
        </div>
      </div>
    </>
  );
}
