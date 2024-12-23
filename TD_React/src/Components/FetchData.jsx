import data from "./../../../data.json"
import React, { useState } from "react";
import "./FetchData.css"

function FetchData(props){
    const [note, setNote] = useState(null);
    const getRandomNote = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setNote(data[randomIndex]);
      };

    return (
    <div className="app">
      <h1>Notes Aléatoires</h1>
      <button onClick={getRandomNote} className="random-button">
        Afficher une note
      </button>
      {note && (
        <div className="note-card">
            <p>Student nom : {note.student.firstname}</p>
            <p>Student prenom : {note.student.lastname}</p>
          <h2> course : {note.course}</h2>
          <h2> grade  : {note.grade}</h2>
        </div>
      )}
    </div>
  );

}

export default FetchData