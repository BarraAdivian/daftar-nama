import { useState } from "react";

export default function  NoteForm({ onAdd }) {
    const [text, setText] = useState("");

    function handleChange(e){
        setText(e.target.value);
    }

    function handleClick(e){
        setText("");
        onAdd(text);
    }

    return (
        <>

        <input placeholder="Add note" value={text} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>

        </>
    )
}