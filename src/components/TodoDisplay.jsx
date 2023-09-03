import React from 'react';
    
const TodoDisplay = (props) => {

    const handleDelete = (targetIdx) => {
        props.deleteTodo(targetIdx)
    }

    const handleUpdate = (targetIdx, targetBool) => {
        props.updateTodo(targetIdx, targetBool)
    }

    return (
        <div className="card-body">
            <div className="card shadow">
                <div className="card-header">
                    <h3 className="text-warning-emphasis">TodoDisplay.jsx</h3>
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        
                        <thead>
                            <tr>
                                <th scope="col" className="fs-5">Task:</th>
                                <th scope="col" className="text-center fs-5">Completed?</th>
                                <th scope="col" className="text-center fs-5">Action:</th>
                            </tr>
                        </thead>

                        <tbody className="table-group-divider">
                            {
                                props.todoList.map(
                                    (eachTodo, idx) => {
                                        return (
                                            <tr key={idx}>
                                                <td style={eachTodo.completed ? {textDecorationLine: "line-through"} : null}>{eachTodo.task}</td>
                                                <td className="text-center">
                                                    <input type="checkbox" onClick={ (e) => handleUpdate(idx, e.target.checked) } />
                                                </td>
                                                <td className="text-center">
                                                    <button className="btn btn-danger" onClick={ () => handleDelete(idx) }>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoDisplay;