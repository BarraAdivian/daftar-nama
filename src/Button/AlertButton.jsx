export default function AlertButton ({text,massage}) {
    function handelClick(e){
        console.info(e.target);
        alert(massage);
    }

    return (
        <button className="alert-btn" onClick={handelClick}>{text}</button>
    )
}