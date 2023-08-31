import { useState, useEffect } from "react";

export default function GetMenu() {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pizza-stop-6b665c7cd62d.herokuapp.com/menu')
        .then(res => res.json())
        .then(data => {
            setMenu(data);
            setLoading(false);  // set loading to false once data is fetched
            console.log(data);
        })
        .catch(err => {
            console.log(err);
            setLoading(false); // set loading to false even if there's an error
        });
    }, []);

  return (
    <>
    <section className="menu" >
        <h2>Menu</h2>
      {loading ? <p>Loading...</p> : (
          <div>
          {menu.map(item => (
              <div key={item.id}>
              <h2>{item.name}</h2>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
      </section>
    </>
  );
}
