import { useImmer } from "use-immer";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList";
import { useImmerReducer } from "use-immer";
import { NotesContext, NotesDispatchContext } from "./NoteContext.jsx";

let id = 0;
const initialNotes = [
    { id: id++, text: "Learn HTML", done: false },
    { id: id++, text: "Learn CSS", done: false },
    { id: id++, text: "Learn Javascript", done: false },
    { id: id++, text: "Learn React", done: false },
];

    function notesReducer(notes, action){
        if (action.type === 'ADD_NOTE') {
            notes.push({
                id:id++,
                text:action.text,
                done:false
            })
        }else if(action.type === 'CHANGE_NOTE') {
            const index = notes.findIndex(note => note.id === action.id)
            notes [index.text = action.text];
            notes [index.done = action.done];
        }else if(action.type === 'DELETE_NOTE') {
            const index = notes.findIndex(note => note.id === action.id)
            notes.splice(index, 1)
        }
    }

export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(notesReducer ,initialNotes);

    return (
        <div>
          <h1>Note App</h1>
            <NotesContext.Provider value={notes}>
              <NotesDispatchContext.Provider value={dispatch}>
                <NoteForm/>
                <NoteList/>
              </NotesDispatchContext.Provider>
            </NotesContext.Provider>
        </div>
    );
}