import React, { ChangeEvent, FormEvent, useState } from "react";
import { useTasks } from "../contexts/TaskProvider";

const NewTaskForm = () => {
  const [content, setContent] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(content);
    setContent("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setContent(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={handleChange} />
      <button>추가</button>
    </form>
  );
};

export default NewTaskForm;
