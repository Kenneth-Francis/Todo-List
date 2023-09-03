import {useState} from 'react';
import TodoForm from './components/TodoForm'
import TodoDisplay from './components/TodoDisplay'

function App() {

  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  const deleteTodo = (targetIdx) => {
    setTodoList(todoList.filter( (eachTodo, idx) => idx !== targetIdx) )
  }

  const updateTodo = (targetIdx, targetBool) => {
    setTodoList(todoList.map( (eachTodo, idx) => idx === targetIdx ? {...eachTodo, completed: targetBool} : eachTodo))
  }

  return (
    <fieldset>
      <legend>App.js</legend>

      <div className='App container col m-auto w-25'>
        <div className="row border border-3 rounded border-primary-subtle mb-4">
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="row border border-3 rounded border-warning-subtle">
          <TodoDisplay todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </div>
      </div>
    </fieldset>
  );
}

export default App;