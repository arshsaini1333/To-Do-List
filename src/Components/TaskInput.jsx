import { useState, useEffect } from "react";
import "../public/TaskInput.css";
import { v4 as uuidv4 } from "uuid";
export default function TaskInput({ setTasks, tasks }) {
  const [task, setTask] = useState("");

  // Handle input change
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  //Handle Submit button to add task
  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((prevToDos) => {
      return [...prevToDos, { task: task, id: uuidv4(), isDone: false }];
    });
    setTask("");
  };
  return (
    <>
      <div className="TaskInput">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Coding"
            aria-describedby="button-addon2"
            value={task}
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}
