import {useState} from "react";

const AddTodo = ({todos, setTodos}) => {
    const [todo, setTodo] = useState("");


    const handleInput = (e) => {
        setTodo(e.target.value);
    }

    const handleSub = (e) => {
        e.preventDefault();

        if(todo) {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    text: todo
                }
            ])
        }
    }

    return (
        <article>
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