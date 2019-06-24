import React, { useState, useEffect } from "react";

export default () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([{ src: {} }]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://cors-anywhere.herokuapp.com/https://openwhyd.org/styles_of_omega?format=json`
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    /* <div>
      {items.map(item => (
        <p key={item.id}>
          <li>{item.name}</li>
        </p>
      ))} */
    <div>
      {items.map(item => (
        <p key={item.length}>
          <li>{item.name}</li>
          <img src={item.img} alt="" width="50" height="50" />
          <iframe width="420" height="315" src={item.src.id} />
        </p>
      ))}
    </div>
  );
};
