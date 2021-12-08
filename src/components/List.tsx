import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import { List as ListModel, UseDeskReturnType } from '../hooks/useDesk'
import { Task } from './Task'
import { Draggable, Droppable } from 'react-beautiful-dnd'

type ListType = {
  desk: UseDeskReturnType
  list: ListModel
  editable?: boolean
}

const List = ({ desk, list, editable = true }: ListType) => {
  const titleRef = useRef<HTMLSpanElement>(null)

  const renameModeOn = () => {
    const current = titleRef.current!
    current.contentEditable = 'true'
    current.focus()
  }

  const renameModeOff = () => {
    const current = titleRef.current!
    current.contentEditable = 'false'
    current.blur()
  }

  return (
    <div className="desk__list">
      <header className="list__header">
        <span ref={titleRef} onBlur={() => renameModeOff()} className="header__title" style={{ backgroundColor: list.color }}>
          {list.title}
        </span>
        <div className="header__btn-container">
          {editable && (
            <>
              <button onClick={() => renameModeOn()} className="btn btn_inline-gray">
                <FontAwesomeIcon icon={faPen} />
              </button>

              <button onClick={() => desk.removeList(list.id)} className="btn btn_inline-red">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </>
          )}
        </div>
      </header>

      <Droppable droppableId={list.id}>
        {/* <main className="list__main"> */}

        {(provided, snapshot) => (
          <main
            className="list__main"
            {...provided.droppableProps}
            ref={provided.innerRef}
            // style={getListStyle(snapshot.isDraggingOver)}
          >
            {list.map((task, i) => (
              <Draggable key={task.id} draggableId={task.id} index={i}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    // style={getItemStyle(
                    //   snapshot.isDragging,
                    //   provided.draggableProps.style
                    // )}
                  >
                    <Task desk={desk} task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </main>
        )}

        {/* </main> */}
      </Droppable>
    </div>
  )
}

export { List }
