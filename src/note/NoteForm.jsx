import { useContext,useState } from "react";
import { NotesDispatchContext } from "./NoteContext.jsx";

export default function  NoteForm({ onAdd }) {
    const [text, setText] = useState("");
    const dispatch = useContext(NotesDispatchContext);

    function handleChange(e){
        setText(e.target.value);
    }

    function handleClick(e){
        dispatch({
            type:"ADD_NOTE",
            text:"text"
        });
        setText("");
    }

    return (
        <>

        <input placeholder="Add note" value={text} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>

        </>
    )
}