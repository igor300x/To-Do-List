import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Div, ToDoList, Input, Button, ListItem, Approval, Trash } from './styles.js';

import { FcApproval, FcEmptyTrash } from "react-icons/fc";

function App() {

  const oi = ", create your tasks"

  const [list, setList] = useState([{ id: uuid(), task: 'Do the homework', finished: true }])

  const [inputTask, setInputTask] = useState('')

  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function finalizarTarefa(id) {

    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    )

    setList(newList)
  }

  function deletarItem(id) {

    const newList = list.filter((item) => item.id != id)

    setList(newList)
  }

  return (

    <Div>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="what to do ..." />
        <Button onClick={cliqueiNoBotao}> Add</Button>

        <h1>Hello{oi} </h1>

        <ul>
          {list.map((item) => (
            <ListItem isFinished={item.finished} key={item.id}>
              <Approval onClick={() => finalizarTarefa(item.id)} />

              <li> {item.task}</li>

              <Trash onClick={() => deletarItem(item.id)} />
            </ListItem>
          ))}
        </ul>

      </ToDoList>
    </Div>
  )
}


export default App
