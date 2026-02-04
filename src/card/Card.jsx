import "./Card.css"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt="" />
            <h2>{props.tittle}</h2>
            <p>{props.desc}</p>
            <button>{props.btn}</button>
        </div>
    )
}