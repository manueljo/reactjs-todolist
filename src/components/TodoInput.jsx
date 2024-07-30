import { useState } from "react"

const TodoInput = ({handleAddTodos, todoValue, setTodoValue}) => {

  return (
    <div>
      <header>
        <input value={todoValue} onChange={(e) => {
          setTodoValue(e.target.value)
        }} placeholder='Enter todo...' />
        <button onClick={() => {
          handleAddTodos(todoValue)
          setTodoValue('')
        }}>Add</button>
      </header>
    </div>
  )
}

export default TodoInput