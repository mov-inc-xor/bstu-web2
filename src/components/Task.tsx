import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Task as TaskModel, UseDeskReturnType } from '../hooks/useDesk'

type TaskType = {
  desk: UseDeskReturnType
  task: TaskModel
}

const Task = ({ desk, task }: TaskType) => {
  return (
    <div className="list__card">
      <header className="card__header">
        <span>{task.title}</span>
        <button onClick={() => desk.performTask(task.id)} className="btn btn_inline-green">
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
      </header>
      <main className="card__main">{task.text}</main>
    </div>
  )
}

export { Task }
