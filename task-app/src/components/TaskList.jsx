import { useState } from "react"


const TODO_LIST = [
    { title: "Get Milk", dueDate: "10/31/25" },
    { title: "Get Wieners", dueDate: "13/31/25", },
    { title: "Get Tape", dueDate: "14/31/25" },
    { title: "Get Donkey Shoes", dueDate: "11/30/25" },
]
console.log(TODO_LIST)
// one item
function TaskItem(props) {

    const [isDone, setIsDone] = useState(true);


    function toggleCheck() {
if(isDone == true){
    setIsDone(false);
} else {
    setIsDone(true);
}
       
    }

    return (
        <div className="task">
            <h3 className={
                isDone == true ? "done" : ""
            }>{props.title}</h3>
            <p className={
                isDone == true ? "done" : ""}
            >Due:{props.dueDate}</p>
            <input type="checkbox"
                onChange={toggleCheck}
                checked={isDone} />
        </div >
    )
}
// list of items
function TaskList() {
    return (

        <section>
            {
                TODO_LIST.map(
                    (props, index) => { }
                )
            }
            <TaskItem
                title="Get Milk"
                dueDate="10/31/25"
                done={true}
            />
            <TaskItem
                title="Get Wieners"
                dueDate="13/31/25" />
            <TaskItem
                title="Get Tape"
                dueDate="14/31/25" />

            <TaskItem
                title="Get Donkey Shoes"
                dueDate="11/30/25"
            />
            <TaskItem
                title="Get Curtains"
                dueDate="10/31/25" />
            <TaskItem
                title="Get Socks"
                dueDate="10/31/25" />
            <TaskItem
                title="Get Wipes"
                dueDate="10/31/25"
            />
            <TaskItem
                title="Get Lashes"
                dueDate="10/31/25" />
            <TaskItem
                title="Get A New Wig"
                dueDate="10/31/25" />
        </section>
    )
}
export default TaskList;





