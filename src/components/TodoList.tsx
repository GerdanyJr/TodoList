import Todo from "./Todo"

export interface todoProps {
    id: number,
    title: string,
    ended: boolean
}

export default function TodoList({ todoList, onEditTodo, onCheckTodo, onDeleteTodo }: {
    todoList: todoProps[],
    onEditTodo: (id: number, todo: todoProps) => void,
    onCheckTodo: (id: number) => void,
    onDeleteTodo: (id: number) => void
}) {
    return (
        <ol className="m-5 overflow-y-hidden">
            {todoList.filter(element => element.ended === false)
                .map(x => {
                    return <li className='mb-3' key={x.id}>
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
    )
}