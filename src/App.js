import React, { useContext } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import AddNoteBox from "./components/AddNoteBox";
import AuthContext from "./components/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <Homepage />
      {ctx.modalStatus && <AddNoteBox />}
    </>
  );
}

export default App;
