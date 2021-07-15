import React , {useState} from 'react'
import TodoForm from './TodoForm'


function TodoList() {
    const [todos , setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo , ...todos];
        
        setTodos(newTodos);
        console.log(...todos);

    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    return (
        <div>
          <h1>What’s your plan ?</h1> 
          <TodoForm onSubmit={addTodo} />
          <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
         
        </div>
    )
}

export default TodoList
