import { ChangeEvent } from "react";
import { useTasks } from "../contexts/TaskProvider";

const TaskList = () => {
  const { tasks, updateTask, removeTask } = useTasks();

  const handleDelete = (id: string) => {
    removeTask(id);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    updateTask(id, e.target.checked);
  };

  return (
    <ul>
      {tasks.map(({ id, content, complete }) => (
        <li key={id}>
          <input
            type="checkbox"
            onChange={(e) => handleChange(e, id)}
            checked={complete}
          />
          <span style={{ textDecoration: complete ? "line-through" : "none" }}>
            {content}
          </span>
          <button onClick={() => handleDelete(id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
