import { useState } from "react"
import { AiOutlineSearch } from 'react-icons/ai'

export default function InputBar({onAddTodo} : {onAddTodo: (title:string) => void}) {
    const [text, setText] = useState('');

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setText(e.currentTarget.value);
    }

    return (
        <form className="flex flex-row mb-3 items-center w-2/3 max-md:w-4/5" onSubmit={(e) =>  e.preventDefault() }>
            <AiOutlineSearch className="text-2xl absolute ml-1.5 text-slate-500" />
            <input type="text" placeholder="Insira uma tarefa"
                name="input" className="text-slate-950 rounded-full w-full p-2 pl-8"
                value={text} onChange={handleChange} />
            <button type="submit" className="bg-sky-500 text-slate-100 bg-sky 
            hover:bg-sky-600 rounded-full ml-3 p-2" onClick={() => {if(text.trim() !== '')onAddTodo(text); setText('')}}>Adicionar</button>
        </form>
    )
}