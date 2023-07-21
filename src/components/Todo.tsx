import { FcCheckmark } from 'react-icons/fc'
import { AiOutlineEdit, AiOutlineDelete, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { todoProps } from './TodoList';

export default function Todo({ props, onDeleteTodo, onEditTodo, onCheckTodo }: {
    props: todoProps,
    onCheckTodo: (id: number) => void,
    onEditTodo: (id: number, title: todoProps) => void,
    onDeleteTodo: (id: number) => void
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState(props.title);
    if (!isEditing) {
        return (
            <div className="flex justify-between">
                <span>{props.title}</span>
                <div className='flex text-xl '>
                    <button type="button" className='text-green-500 w-6 active:text-base' onClick={() => onCheckTodo(props.id)}><FcCheckmark /></button>
                    <button type="button" className='text-orange-500 w-6 active:text-base' onClick={() => setIsEditing(true)}><AiOutlineEdit /></button>
                    <button type="button" className='text-red-600 w-5 active:text-base' onClick={() => onDeleteTodo(props.id)}><AiOutlineDelete /></button>
                </div>
            </div>
        )  
    } 
    else {
        return (
            <div className="flex justify-between">
                <input className='text-black rounded-full p-0.5 pl-2 focus:border-black' type='text' value={input} onChange={e => {
                    setInput(e.target.value);
                }} />
                <div className='flex text-xl '>
                    <button type="button" className='text-green-500 w-6 active:text-base' onClick={() => {
                        (input.trim() !== '')?onEditTodo(props.id, {...props, title:input}):setInput(props.title);
                        setIsEditing(false);
                    }}><FcCheckmark /></button>
                    <button type="button" className='text-red-600 w-5 active:text-base' onClick={() => setIsEditing(false)}><AiOutlineClose /></button>
                </div>
            </div>
        )
    }
}
