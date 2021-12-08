import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

class Task {
  private _id: string
  private _title: string

  constructor(private _text: string) {
    this._id = uuidv4()
    this._title = this.makeTitle(_text)
  }

  private makeTitle(text: string) {
    let title = text.split(' ').slice(0, 3)
    if (title[title.length - 1].length < 3) {
      title = title.slice(0, 2)
    }
    return title.join(' ').replaceAll(/[^А-ЯЁа-яёA-Za-z0-9\s]/g, '')
  }

  public get id() {
    return this._id
  }

  public get title() {
    return this._title
  }

  public get text() {
    return this._text
  }
}

class List extends Array<Task> {
  private _id: string
  public static defaultHeaderColor = '#e5ebf5'

  constructor(private _title: string, private _color: string, ...items: Task[]) {
    super(...items)
    this._id = uuidv4()
  }

  public static randomHeaderColor() {
    const colors = [
      '#caedd2',
      'rgb(237 207 202)',
      'rgb(255, 236, 170)',
      'rgb(202 231 237)',
      'rgb(204 202 237)',
      'rgb(237 202 234)',
      'rgb(237 202 202)',
    ]
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
  }

  public get color() {
    return this._color
  }

  public get id() {
    return this._id
  }

  public get title() {
    return this._title
  }

  public set title(title: string) {
    this.title = title
  }
}

export type Desk = List[]

export type UseDeskReturnType = {
  desk: Desk
  addList: () => void
  removeList: (id: string) => void
  addTask: (text: string) => void
  performTask: (id: string) => void
  moveTask: (srcListId: string, destListId: string, srcTaskIndex: number, destTaskIndex: number) => void
}

const useDesk = (): UseDeskReturnType => {
  const [desk, setDesk] = useState<Desk>([])

  useEffect(() => {
    setDesk([
      new List(
        'Нераспределённые',
        List.defaultHeaderColor,
        ...[new Task('Сделать канбан доску быстро бесплатно и без смс'), new Task('Сделать лабораторки по WEB'), new Task('Тут фантазия кончилась, к сожалению')]
      ),
    ])
  }, [])

  const addList = () => {
    setDesk((prev) => [...prev, new List('Новый список', List.randomHeaderColor())])
  }

  const removeList = (id: string) => {
    setDesk((prev) => [...prev.filter((list) => list.id !== id)])
  }

  const moveTask = (srcListId: string, destListId: string, srcTaskIndex: number, destTaskIndex: number) => {
    setDesk((prev) => {
      const newDesk: Desk = []
      const srcList = desk.find((list) => list.id === srcListId)!
      const destList = desk.find((list) => list.id === destListId)!

      const task = srcList.splice(srcTaskIndex, 1)[0]

      destList.splice(destTaskIndex, 0, task)

      prev.forEach((list) => {
        if (list.id === srcListId) {
          newDesk.push(srcList)
          return
        }

        if (list.id === destListId) {
          newDesk.push(destList)
          return
        }

        newDesk.push(list)
      })

      return newDesk
    })
  }

  const addTask = (text: string) => {
    setDesk((prev) => {
      const firstList = prev[0]
      return [new List(firstList.title, firstList.color, ...firstList.concat(new Task(text))), ...prev.slice(1)]
    })
  }

  const performTask = (id: string) => {
    setDesk((prev) => [...prev.map((list) => new List(list.title, list.color, ...list.filter((task) => task.id !== id)))])
  }

  return {
    desk,
    addList,
    removeList,
    addTask,
    performTask,
    moveTask,
  }
}

export { useDesk, Task, List }
