import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
function App() {
  const todos: Todo[] = [
    { id: "t1", title: "Learn React" },
    { id: "t2", title: "Learn Typescript" },
  ];
  return (
    <>
      <Todos items={todos} />
      <NewTodo />
    </>
  );
}

export default App;
