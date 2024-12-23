
import "./Menu.css";

function menu() {
  
  const handleMenuClick = (item) => {
    alert(`Vous avez cliqué sur : ${item}`);
  };

  return (
    <div className="app">
      <header className="menu">
        <ul>
          <li onClick={() => handleMenuClick("Notes")}>Notes</li>
          <li onClick={() => handleMenuClick("Étudiants")}>Étudiants</li>
          <li onClick={() => handleMenuClick("Matières")}>Matières</li>
          <li onClick={() => handleMenuClick("À propos")}>À propos</li>
        </ul>
      </header>
      <main>
        <h1>Bienvenue dans votre application</h1>
        <p>Cliquez sur un élément du menu pour voir l'alerte correspondante.</p>
      </main>
    </div>
  );
}

export default menu;
