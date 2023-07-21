import Header from "./components/Header"
import List, { todoProps } from "./components/TodoList"
import InputBar from "./components/InputBar"
import { useState } from "react";
import { data } from "./components/data";

export function App() {
  const [todos, setTodos] = useState(data);
  let nextId: number = todos.length;

  function handleEditClick(id: number, newTodo: todoProps): void {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, title: newTodo.title }
      } else return todo;
    }))
  }

  function handleDeleteClick(id: number): void {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function handleCheckClick(id: number): void {
    setTodos(todos.map(todo => {
      return (todo.id === id) ? { ...todo, ended: true } : todo
    }))
  }

  function handleAddTodo(title: string): void {
    setTodos([...todos, { id: nextId++, ended: false, title: title }])
    console.log(todos[todos.length - 1].id)
  }


  return (
    <article className="h-screen w-screen min-w-fit bg-zinc-800 flex flex-col items-center justify-center">
      <div className="h-1/2 w-1/3 max-xl:w-1/2 text-zinc-200">
        <InputBar
          onAddTodo={handleAddTodo}
        />
        <Header title="Lista de afazeres" />
        <div className="border flex flex-col h-full text-slate-100">

          <List
            todoList={todos}
            onEditTodo={handleEditClick}
            onDeleteTodo={handleDeleteClick}
            onCheckTodo={handleCheckClick}
          />

        </div>
      </div>
    </article>
  )
}