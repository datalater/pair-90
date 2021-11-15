import {
  createContext,
  ReactChild,
  useContext,
  useState,
  ReactElement,
} from "react";
import { nanoid } from "nanoid";

/*
1. 컨텍스트를 만든다.
2. 만든 컨텍스트를 hooks로 분리.
3. TaskProvider 정의
    - tasks를 상태로 관리
    - addTask, updateTask, removeTask 필요
*/

interface Task {
  id: string;
  content: string;
  complete: boolean;
}

interface ITaskContext {
  tasks: Task[];
  addTask(content: string): void;
  updateTask(id: string, complete: boolean): void;
  removeTask(id: string): void;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const useTasks = () => useContext(TaskContext);

interface TaskProviderProps {
  children: ReactElement;
}

// Tasks, addTask, updateTask, removeTask
const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (content: string) => {
    setTasks([
      ...tasks,
      {
        id: nanoid(),
        content,
        complete: false,
      },
    ]);
  };

  const updateTask = (id: string, complete: boolean) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, complete } : task))
    );
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
