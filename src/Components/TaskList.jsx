import "../public/TaskList.css";

export default function TaskList({ tasks, setTasks }) {
  let styles = { textDecoration: "line-through" };

  //All Mark As Done
  const handleAllMarkDone = () => {
    setTasks((prevToDos) =>
      prevToDos.map((todo) => {
        return { ...todo, isDone: !todo.isDone };
      })
    );
  };
  //Deleting All

  const deleteAllTasks = () => {
    setTasks((prevToDos) => prevToDos.splice());
  };

  //Deleting One Task
  function deleteOne(id) {
    setTasks((prevToDos) => {
      return prevToDos.filter((todo) => todo.id != id);
    });
  }

  //Marking One

  function handleOneMark(id) {
    setTasks((prevToDos) =>
      prevToDos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return { ...todo };
        }
      })
    );
  }

  return (
    <>
      <div className="TaskList">
        {/* If there is any task then we display task otherwise we display a heading  */}
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((todo) => {
              return (
                // Maping individual task
                <li key={todo.id}>
                  <div>
                    {todo.isDone ? (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={() => handleOneMark(todo.id)}
                        checked
                      />
                    ) : (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={() => handleOneMark(todo.id)}
                      />
                    )}
                    {todo.isDone ? (
                      <span style={styles}>{todo.task}</span>
                    ) : (
                      <span>{todo.task}</span>
                    )}
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary Delete"
                      onClick={() => deleteOne(todo.id)}
                    >
                      Delete Task
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3 className="empty">Write Your Daily Tasks</h3>
        )}

        <div className="buttons">
          {/* Mark all as done */}
          <button
            type="button"
            className="btn btn-primary Done"
            onClick={handleAllMarkDone}
          >
            Mark All As Done
          </button>

          {/* Deleting alll Task */}

          <button
            type="button"
            className="btn btn-primary Delete"
            onClick={deleteAllTasks}
          >
            Delete All Tasks
          </button>
        </div>
      </div>
    </>
  );
}
