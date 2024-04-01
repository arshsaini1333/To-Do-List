import { useEffect, useState, useRef } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import "./public/TodoList.css";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const isMounted = useRef(false);

  const [tasks, setTasks] = useState([]);

  //Storing data to local storage
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("tasks"));
    if (storedList) {
      setTasks(storedList);
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      isMounted.current = true;
    }
  }, [tasks]);

  return (
    <>
      <div className="TodoList">
        <TaskInput setTasks={setTasks} tasks={tasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
