import AddTodo from "./components/AddTodo";
import TODOS from "./data/todos.json";
import Card from '@mui/material/Card';

import {useState} from "react";

import "./styles/app.scss"
import "./styles/TodoCard.scss"

const App = () => {
    const [todos, setTodos] = useState(TODOS);

    const deleteTodo = (id) => {
        // shit piss -- get me everything that is not that id so basically if id 2 is removed, It'll look like 1, 3, 4
        const todoAfter = todos.filter(todo => todo.id !== id);

        setTodos(todoAfter);
    }

    return (
    <>
      <main>
          <article>
              <section>
                  <AddTodo todos={todos} setTodos={setTodos} />
                  <div>
                      {
                          todos.map((todo, index) => (
                              <div key={index} className='flex-center margin animate'>
                                  <Card style={{backgroundImage: "linear-gradient(45deg, #423F3E, #423F3E)"}} className='card' id='card'>
                                      <div className='flex-between'>
                                          <p className='id-text'>#{todo.id}</p>

                                          <button className='trash-btn' onClick={() => {
                                              deleteTodo(todo.id)
                                          }}>
                                              <img src='/img/trash.svg' className='ico' alt="delete" />
                                          </button>
                                      </div>
                                          <p className='todo-text'>{todo.text}</p>
                                  </Card>
                              </div>
                          ))
                      }
                  </div>
              </section>
          </article>

          <footer className='animate-light delay-slight'>
            <p className='id-text fixed bottom-left'>© Todo App <br />Under the CC0 1.0 Universal (CC0 1.0) Public Domain Dedication</p>
            <div className='fixed bottom-right icons animate-light'>
                <img src='/img/github.svg' className='margin-right icons animate-light delay-slight' alt="github" />
                <img src='/img/twitter.svg' className='icons animate-light delay-long' alt="twitter" />
            </div>
          </footer>
      </main>
    </>
  );
}

export default App;
