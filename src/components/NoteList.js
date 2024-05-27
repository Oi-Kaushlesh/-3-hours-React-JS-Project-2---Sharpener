import React from "react";

const NoteList = (props) => {
  
  return (
    <div>
      {props.notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <button onClick={() => props.deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
