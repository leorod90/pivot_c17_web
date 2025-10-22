const TODO_LIST = [
    { title: "Get Milk", dueDate: "10/31/25" },
    { title: "Get Wieners", dueDate: "13/31/25", done: true},
    { title: "Get Tape", dueDate: "14/31/25" },
    { title: "Get Donkey Shoes", dueDate: "11/30/25" },
]
console.log(TODO_LIST)
// one item
function TaskItem(props) {
    return (
        <div className="task">
            <h3 className={props.done == true ? "done" : ""
            }>{props.title}</h3>
            <p>Due:{props.dueDate}</p>
            <input type="checkbox" />
        </div>
    )
}
// list of items
function TaskList() {
    return (
    <h1>test</h1>
        <section>
            {
                TODO_LIST.map(
                   (props,index) => { }
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





