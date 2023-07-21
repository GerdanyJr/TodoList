import Header from "./Header"
import Todo from "./Todo"

export interface todoProps {
    id: number,
    title: string,
    ended: boolean
}

export default function TodoList({ todoList, onEditTodo, onCheckTodo, onDeleteTodo, title ,completed }: {
    todoList: todoProps[],
    onEditTodo: (id: number, todo: todoProps) => void,
    onCheckTodo: (id: number) => void,
    onDeleteTodo: (id: number) => void,
    completed: boolean,
    title: string
}) {
    return (
        <div className="flex flex-col w-full text-slate-100">
            <Header title={title} />
            <ol className="border p-4 h-5/6 rounded-b-lg overflow-auto">
                {todoList.filter(element => (completed) ? element.ended === true : element.ended === false)
                    .map(x => {
                        return <li className='mb-2' key={x.id}>
                            <Todo
                                onEditTodo={(id, title) => onEditTodo(id, title)}
                                onCheckTodo={(id) => onCheckTodo(id)}
                                onDeleteTodo={(id) => onDeleteTodo(id)}
                                props={{
                                    id: x.id,
                                    title: x.title,
                                    ended: false
                                }} />
                        </li>
                    })}
            </ol>
        </div>
    )
}