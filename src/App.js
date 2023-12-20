import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

const App = () => {
  const [s, setS] = useState(false)
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: "This is my first Note!!",
    //   date: "11/08/2021",
    //   time:""
    // },
    // {
    //   id: nanoid(),
    //   text: "This is my second Note!!",
    //   date: "1/08/1998",
    //   time:""
    // },
    // {
    //   id: nanoid(),
    //   text: "This is my third Note!!",
    //   date: "12/11/2021",
    //   time:""
    // },
  ]);

  // to search text
  const [searchText, setsearchText] = useState("");

  // dark mode toggle
  const [darkMode, setdarkMode] = useState(false);

  // to save notes to local storage
  const setNotesStorage = (notes) => {
    setNotes(notes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  };


  // to retrive saved notes from local storage when our app is closed/on first load
  useEffect(() => {
    const savedNotes =
      JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  // update note
  const updatedNotes = () => {

  }
  // add note
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      time: date
    };
    console.log(newNote)

    // new note
    const newNotes = [...notes, newNote];
    console.log('new notes:',newNotes)
    setNotesStorage(newNotes);
  };

  // delete notes
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotesStorage(newNotes);
  };

  // sort by date
  const sortNotesByDate = () => {
    
    const sortedNotes = notes.toSorted(
      (a, b) => new Date(b.time) - new Date(a.time) 
    );
    setS(!s)

    // console.log(sortedNotes);
    setNotes(sortedNotes);
  };

  // console.log(notes)

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header
          handleToggleMode={setdarkMode}
          handleSortByDate={sortNotesByDate}
        />
        <Search handleSearchNote={setsearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
