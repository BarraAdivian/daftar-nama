export default function Toolbar({onClick}){
    return(
        <div onClick={onClick}>
        <button onClick={onClick}>button1</button>
        <button onClick={onClick}>button2</button>
        </div>
    )
}