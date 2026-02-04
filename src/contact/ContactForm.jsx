import { useImmer } from "use-immer";

export default function ContactForm(){
    const [contact, setContact] = useImmer({
        name: "",
        massage: ""
    })

    function handleNameChange(e) {
        setContact(draft =>{draft.name = e.target.value})
    }

    function handleMassageChange(e) {
        setContact(draft =>{draft.massage = e.target.value})
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange} />
                <br />
                <input type="text" placeholder="Massage" value={contact.massage} onChange={handleMassageChange} />
            </form>
            <h1>Contact Detail</h1>
            <p>Name : {contact.name}</p>
            <p>Massage : {contact.massage}</p>
        </div>
    )
}