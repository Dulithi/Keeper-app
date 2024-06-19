import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import InputNote from "./InputNote";
import { useState } from "react";


export default function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNotes => [...prevNotes, {
            title: note.title,
            content: note.content
        }]);
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
        console.log(notes);
    }

    function createNote(note, index) {
        return ( 
            <Note 
                key={index}
                id={index}
                title={note.title} 
                body={note.content}
                onDelete={deleteNote}
            />
        );
    }

    return (
        <div id="app">
            <Header />
            <InputNote onAdd={addNote}/>
            <div className="container content-wrap">
            {notes.map(createNote)}
            </div>
            <Footer />
        </div>
    );
}