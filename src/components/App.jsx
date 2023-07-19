import React, { useState } from "react";
import Footer from "./Footer";
import Heading from "./Header";
import Note from "./Note";
// import notes from "../notes";
import CreateNote from "./CreateNote";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Heading />
      <CreateNote addNote={addNote} />
      {notes.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
