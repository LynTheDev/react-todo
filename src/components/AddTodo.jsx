import {useEffect, useState} from "react";

import "../styles/SaveCard.scss"
import "../styles/tooltips.scss"

const AddTodo = ({todos, setTodos}) => {
    const [todo, setTodo] = useState("");
    const [disabled, setDisabled] = useState(false);

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

        setDisabled(true);

        setTimeout(() => {
            setDisabled(false);
        }, 2190)
    }

    return (
        <article>
            <section>
                <div className='tooltip'>
                    <span className='absolute tooltip-text'><p className='small-text'>Save Todos</p></span>
                    <button className={
                        disabled ? 'animate delay-long absolute save-btn-disabled' : 'animate delay-long absolute save-btn'
                    } disabled={disabled} onClick={saveItems}>
                        <p className='text'>
                            {disabled ? <p className='save-anim'>...</p> : 'Save'}
                        </p>
                    </button>
                </div>
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