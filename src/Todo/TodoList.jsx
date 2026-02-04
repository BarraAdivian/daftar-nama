import Todo from "./Todo";

export default function (){
    const data = [
    {
        id : 1,
        text : "learn react",
        isCompleted : true
    },
    {
        id : 2,
        text : "learn vue",
        isCompleted : true
    },
    {
        id : 3,
        text : "learn angular",
        isCompleted : false
    }
]

    return (
        <ul>
            {data.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    )
}