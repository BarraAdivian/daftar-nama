import { useState } from "react";
import { useImmer } from "use-immer";

export default function Tugas(){
    const [item, setItem] = useState  ("");
    const [items, setItems] = useImmer ([]);

    function handleChange(e){
        setItem(e.target.value);
    }

    function handleClick (e){
        e.preventDefault();
        setItems((items)=>{items.push(item);})
        setItem("");
    }

    return (
        <div>
            <h1>Nama Anda</h1>
            <form>
                <input value={item} onChange={handleChange} />
                <button onClick={handleClick}>Tambah Nama</button>
            </form>
            <h1>List Nama</h1>
            <table border="1">
                <tbody>
                    {items.map((item,index) => (
                    <tr key={index}>
                        <td>{item}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}