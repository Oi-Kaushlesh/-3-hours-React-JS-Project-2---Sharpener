import React, { useState } from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [notesVisible, setNotesVisible] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchInput, setSearchInput] = useState();

  const addNoteToListHandler = () => {
    const newNote = { id: Math.random(), title, description };
    setNotesVisible([...notesVisible, newNote]);
    setAllNotes([...allNotes, newNote]);
    setTitle("");
    setDescription("");
    setModalStatus(false);
  };
  const searchNotesHandler = (event) => {
    const filterNotes = allNotes.filter((note) => {
      return (
        note.title.toLowerCase().includes(event.toLowerCase()) ||
        note.description.toLowerCase().includes(event.toLowerCase())
      );
    });
    setNotesVisible(filterNotes);
  };

  const totalNotesHandler = allNotes.length;

  const notesOnScreenVisibleHandler = notesVisible.length;

  const modalOpenHandler = () => {
    setModalStatus(true);
    console.log("addnotebuttonclicked");
  };

  const closeNoteBoxHandler = () => {
    setModalStatus(false);
  };

  const handleTitleChange = (value) => {
    setTitle(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };
  const deleteNoteHandler = (id) => {
    const updatedNotes = allNotes.filter((note) => note.id !== id);
    setNotesVisible(updatedNotes);
    setAllNotes(updatedNotes);
    setSearchInput("");
  };
  return (
    <AuthContext.Provider
      value={{
        modalStatus,
        notesVisible,
        allNotes,
        title,
        description,
        searchInput,
        addNoteToListHandler,
        searchNotesHandler,
        totalNotesHandler,
        notesOnScreenVisibleHandler,
        modalOpenHandler,
        closeNoteBoxHandler,
        handleTitleChange,
        handleDescriptionChange,
        deleteNoteHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
