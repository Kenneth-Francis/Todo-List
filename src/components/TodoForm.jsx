import react, { useState } from 'react';
    
const TodoForm = (props) => {
    const [task, setTask] = useState("");
    // const [completed, setCompleted] = useState(false)
    
    // Initiates upon form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Creates a new todo using the form's input values
        const newTodo = {task, completed: false};

        // Updates the todoList by calling App.js' 'addTodo' function and passing our newly created todo object
        props.addTodo(newTodo);
    };

    return (
        <div className="card shadow">

            <div className="card-header">
                <h3 className="text-primary-emphasis">TodoForm.jsx</h3>
            </div>

            <div className="card-body w-75 m-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fs-5">Task: </label>
                        <input className="form-control" name="task" type="text" value={task} onChange={ (e) => {setTask(e.target.value)} } />
                    </div>
                    <input className="form-control btn btn-info w-50 float-end" type="submit" value="Add Task" />
                </form>
            </div>
            
        </div>
    );
};

export default TodoForm;