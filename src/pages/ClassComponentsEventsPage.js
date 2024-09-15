import { Component } from "react";
import s from "./ClassComponentsEventsPage/ToDoList.module.css"


class ClassComponentsEventsPage extends Component {
    constructor(props) {
        super(props);
    }
    state = { tasks: [],
                taskName: ""
     }

     createTask = () =>{
        const newTask = {
            id: this.state.tasks.length,
            text: this.state.taskName || "Безназви"
        }
        this.setState({tasks: [...this.state.tasks, newTask]})
        this.setState({taskName: ""})
     }
     removeTask = (id) =>{
        let newTaskList = this.state.tasks.filter(task => task.id !== id)
        this.setState({tasks: newTaskList})
     }

     

    render() { 
        return ( 
        <div className={s.todolist}>
            <div className={s.inputBox}>
            <input type="text" className={s.inputTask} placeholder="Enter TaskName" value={this.state.taskName} onChange={e => {this.setState({taskName: e.target.value})}} />
                <button onClick={this.createTask} className={s.btnCreateTask}>Create</button>
            </div>
            <p style={{color: "white"}}>Task List:</p>
            <div className={s.tasks}>
                {
                    this.state.tasks.map((task) => {
                        return(
                            <div key={task.id} className={s.task}>
                                <p className={s.taskName}>{task.text}</p>
                                <button className={s.taskRemove} onClick={() => {this.removeTask(task.id)}}>Remove</button>
                            </div>
                        )
                })
            }
            </div>
        </div> );
    }
}
 
export default ClassComponentsEventsPage ;