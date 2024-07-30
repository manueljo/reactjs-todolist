import TodoCard from './TodoCard'

const TodoList = ({todos, handleDeleteTodos, handleEditTodos}) => {

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} handleDeleteTodos={handleDeleteTodos} index={todoIndex} handleEditTodos={handleEditTodos}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}

export default TodoList