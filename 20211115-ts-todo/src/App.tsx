import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1> Todo </h1>
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
