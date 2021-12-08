import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDesk } from '../hooks/useDesk'
import { useState } from 'react'
import { List } from '../components/List'
import { DropResult, DragDropContext } from 'react-beautiful-dnd'

const IndexPage = () => {
  const [newTaskText, setNewTaskText] = useState<string>('')
  const desk = useDesk()

  const addTask = () => {
    if (!newTaskText) {
      return
    }
    desk.addTask(newTaskText)
    setNewTaskText('')
  }

  const onDragEnd = (result: DropResult) => {
    console.log(result)
    if (!result.destination) {
      return
    }
    const srcListId = result.source.droppableId
    const destListId = result.destination.droppableId
    const srcTaskIndex = result.source.index
    const destTaskIndex = result.destination.index

    desk.moveTask(srcListId, destListId, srcTaskIndex, destTaskIndex)
  }

  return (
    <>
      <header className="header">
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
          <div className="header__logo">Канбан-доска</div>
          <div className="header__user">
            <span>Илья Артёменко</span>
            <Link to="/signin">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </div>
        </div>

        <div className="add-task-panel" style={{ margin: '20px' }}>
          <input type="text" placeholder="Что сделать?" className="input-text" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} />
          <button onClick={() => addTask()} className="btn btn_colored btn_active">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </header>
      <main className="main">
        <div className="desk">
          <DragDropContext onDragEnd={onDragEnd}>
            {desk.desk[0] && <List key={desk.desk[0].id} desk={desk} list={desk.desk[0]} removeable={false} />}

            {desk.desk.slice(1).map((list) => (
              <List key={list.id} desk={desk} list={list} />
            ))}
          </DragDropContext>

          <div className="add-list-container">
            <button onClick={() => desk.addList()} className="btn btn_colored btn_gray btn_fullwidth">
              <FontAwesomeIcon icon={faPlus} /> Новый список
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export { IndexPage }
