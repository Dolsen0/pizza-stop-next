import { useState, useEffect } from "react";

export default function GetMenu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pizza-stop-6b665c7cd62d.herokuapp.com/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="menu__background">
      <div className="menu__content">
        <h2>Menu</h2>
        <div className="menu__text">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="menu__list">
              {menu.map((item) => (
                <div className="menu__item" key={item.id}>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
