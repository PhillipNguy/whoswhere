import Task from './Task'

const TaskList = ({ data, taskDisplay }) => {
  return (
    <div
      className="task_list"
      style={{ display: taskDisplay ? "block" : "none" }}
    >
      {data && data.tasks.length > 0 ? (
        data.tasks.map((task, id) => {
          return <Task key={id} task={task.task} />;
        })
      ) : (
        <h4>No Tasks!</h4>
      )}
    </div>
  )
}

export default TaskList;