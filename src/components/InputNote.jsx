import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Collapse from '@mui/material/Collapse';
import Zoom from '@mui/material/Zoom';
// import { teal } from '@mui/material/colors';


export default function InputNote(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    const [isClicked, setIsClicked] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;

        setNewNote((previousNote) => {
            return {
                ...previousNote,
                [name] : value
            }
        });
    }

    function addNote(event) {
        
        props.onAdd(newNote);
        event.preventDefault();
        setNewNote({
            title: "",
            content: ""
        });
        setIsClicked(false);
        console.log(isClicked);

    }

    function handleClick() {
        setIsClicked(true);
    }


    return (
        <div className="container" onClick={handleClick} value={isClicked}>
            <Collapse in={isClicked} collapsedSize={100}>
            <div className="card input-card mx-auto my-3 mb-5">
                <div className="card-body">
                <form>
                {
                    isClicked &&
                    <input className="form-control border-0" name="title" value={newNote.title} onChange={handleChange} placeholder="Title"/>
                }
                    
                    <textarea 
                        className="form-control border-0" 
                        name="content" 
                        value={newNote.content} 
                        onChange={handleChange}
                        placeholder="Take a note..."
                        autoFocus={true}
                        rows={isClicked? 3 : 1}
                    />
                    <Zoom in={isClicked}><Fab className="btn add-button float-end" onClick={addNote}><AddIcon /></Fab></Zoom>
                </form>
                
                </div>
            </div>
            </Collapse>
        </div>
    );
}