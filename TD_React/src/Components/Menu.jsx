import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [activeItem, setActiveItem] = useState("Notes");


  const menuItems = [
    { name: "Notes", content: "Contenu du menu Notes" },
    { name: "Étudiants", content: "Contenu du menu Étudiants" },
    { name: "Matières", content: "Contenu du menu Matières" },
    { name: "À propos", content: "Contenu du menu À propos" },
  ];

  const handleMenuClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="app">
      <header className="menu">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={activeItem === item.name ? "active" : ""}
              onClick={() => handleMenuClick(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </header>
      <main>
        {menuItems
          .filter((item) => item.name === activeItem)
          .map((item) => (
            <h1 key={item.name}>{item.content}</h1>
          ))}
      </main>
    </div>
  );
}

export default Menu;
