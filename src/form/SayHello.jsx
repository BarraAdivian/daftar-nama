export default function SayHello(){
    return (
        <div>
            <form>
                <input type="text" id="nama-input"/>
                <button onClick={(e)=>{e.preventDefault();
                    const name = document.getElementById("nama-input").value;
                    document.getElementById("hello").innerHTML = `Hello ${name}`
                    }}>Say Hello</button>
            </form>
            <h1 id="hello">Hello World</h1>
        </div>
    )
}