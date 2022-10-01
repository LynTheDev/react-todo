import {useEffect, useState} from "react";

const AddTodo = ({todos, setTodos}) => {
    const [todo, setTodo] = useState("");

    const handleInput = (e) => {
        setTodo(e.target.value);
    }

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todoItem"));

        if(saved) {
            console.log(saved);
            setTodos(saved);
        }
    }, [setTodos])

    const handleSub = (e) => {
        e.preventDefault();

        localStorage.setItem("todoItem", JSON.stringify(todos));

        if(todo) {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    text: todo
                }
            ])
        }

        setTodo("");
    }

    const saveItems = () => {
        localStorage.setItem("todoItem", JSON.stringify(todos));
    }

    return (
        <article>
            <section>
                <button className='animate delay-long absolute save-btn' onClick={saveItems}>
                    <p className='text'>Save</p>
                </button>
            </section>
            <section className='flex-center animate'>
                <form onSubmit={handleSub}>
                    <input value={todo} onChange={handleInput} type='text' placeholder='Today I will...' className='input animate delay-short' id='get-input'/>
                    <button type='submit' className='btn animate delay-medium'>
                        <img src='/img/send-fill.svg' className='icon animate delay-slight' alt='sub'/>
                    </button>
                </form>
            </section>
        </article>
    )
}

export default AddTodo;