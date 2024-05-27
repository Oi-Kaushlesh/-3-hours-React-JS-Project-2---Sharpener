import React, {useContext} from "react";
import "./Homepage.css";
import AddNoteButton from "./AddNoteButton";
import NoteList from "./NoteList";
import AuthContext from "./auth-context"

const Homepage = () => {
  const handleChange = (event) => {
    ctx.searchNotesHandler(event.target.value);
  };
  const ctx = useContext(AuthContext);

  return (
    <>
      <div className="homepagediv">
        <h1>NoteBook</h1>
        <label htmlFor="searching">Search Notes:</label>
        <input id="searching" type="text" onChange={handleChange} value = {ctx.searchInput} />
        <p>Total Notes: {ctx.totalNotesHandler}</p>
        <p>Showing :{ctx.notesOnScreenVisibleHandler} </p>
        <AddNoteButton modalOpenHandler={ctx.modalOpenHandler} />
      </div>
      <div className="listofnote">
        <NoteList notes={ctx.notesVisible} deleteNote={ctx.deleteNoteHandler} />
      </div>
    </>
  );
};
export default Homepage;
