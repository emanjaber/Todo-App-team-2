import React , {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';



function TodoList() {
    const [todos , setTodos] = useState([]);

    const addTodo = todo =>{
        if (!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo , ...todos];
        
        setTodos(newTodos);
        console.log(...todos);

    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map( item => (item.id === todoId ? newValue : item)));
    };

    
    const completeTodo = id =>{
        let updateTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo ;
        });
        setTodos(updateTodos);
    };

    return (
        <div>
          <h1>What’s your plan ?</h1> 
          <TodoForm onSubmit={addTodo} />
          <Todo todos={todos} completeTodo={completeTodo} updateTodo={updateTodo} />
          <Todo />
         
        </div>
    )
}

export default TodoList
