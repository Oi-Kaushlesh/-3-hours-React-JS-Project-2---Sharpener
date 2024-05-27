import React, { useContext } from "react";
import "./AddNoteBox.css";
import AuthContext from "./auth-context";

const AddNoteBox = () => {
  const ctx = useContext(AuthContext)
  return (
    <div className="backdrop">
      <div className="modal">
        <h2>Add New Note</h2>
        <label htmlFor="noteTitle">Note Title:</label>
        <input
          id="noteTitle"
          type="text"
          value={ctx.title}
          onChange={(e) => ctx.handleTitleChange(e.target.value)}
        />
        <label htmlFor="noteDisc">Note Description:</label>
        <textarea
          id="noteDisc"
          type="text"
          value={ctx.description}
          onChange={(e) => ctx.handleDescriptionChange(e.target.value)}
        />
        <button onClick={ctx.addNoteToListHandler}>Add to book</button>
        <button onClick={ctx.closeNoteBoxHandler}>Close</button>
      </div>
    </div>
  );
};
export default AddNoteBox;
