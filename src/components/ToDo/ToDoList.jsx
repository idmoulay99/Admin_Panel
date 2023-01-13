import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoItem from './ToDoItem';
const TodoApp = ({Items}) => {
  const [todoItems, setTodoItems] = useState(Items);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoItems([...todoItems, {title :newTodo}]);
    setNewTodo("");
    console.log(Items)
  }

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  }
  const handleDelete = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  }

  return (
    <div className=' position-absolute w-100 h-100 '>
    <div className="container d-flex flex-column border shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-4 w-50 gap-4 bg-gradient">
      <h1 className="text-center ">Todo App</h1>
      <form onSubmit={handleSubmit} className="d-flex m-auto gap-2 w-100 ">
        <div className="form-group flex-fill">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new todo item"
            value={newTodo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
      <div className='w-100'>
      <ul className="list-group">
        {todoItems.map((item, index) =>
        <ToDoItem item={item} index={index}  delteItem={handleDelete} />
        )}
      </ul>
      </div>
    </div>
    </div>
  );
}

export default TodoApp;