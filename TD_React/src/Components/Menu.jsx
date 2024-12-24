import React, { useState } from "react";
import "./Menu.css";
import NotesTable from "./NotesTable";
import StudentsTable from "./StudentsTable";
import MatiereTable from "./MatiereTable"
import TeachersTable from "./TeachersTable";

function Menu() {
  const [activeItem, setActiveItem] = useState("Notes");

  const menuItems = ["Notes", "Étudiants", "Matières","Teachers", "À propos"];

  const handleMenuClick = (item) => {
    setActiveItem(item);
  };

  const renderActiveComponent = () => {
    switch (activeItem) {
      case "Notes":
        return <NotesTable />;
      case "Étudiants":
        return <StudentsTable />;
      case "Matières":
        return <MatiereTable />
        case "Teachers":
          return <TeachersTable />
      case "À propos":
        return <h1>À propos de cette application</h1>;
      default:
        return <h1>Contenu introuvable</h1>;
    }
  };

  return (
    <div className="app">
      <header className="menu">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item}
              className={activeItem === item ? "active" : ""}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </header>
      <main>{renderActiveComponent()}</main>
    </div>
  );
}

export default Menu;
