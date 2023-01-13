import TodoList from "./components/ToDo/ToDoList";


function App() {
 const Tasks = [{title :"Create react project",}]
  return (
    <div>
      <TodoList Items={Tasks}/>
    </div>
  );
}

export default App;
