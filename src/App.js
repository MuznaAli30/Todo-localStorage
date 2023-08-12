
import React, { useEffect, useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import Box from './Components/Box';
import Header from './Components/Header';

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);

  // Edit handler function to update a todo item
  const editHandler = (id, newItem) => {
    const updatedTodos = todos.map((todo, index) => {
      if (index === id) {
        return { ...todo, item: newItem };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeToDo = (id) => {
    const newTodos = todos.filter((d, index) => index !== id);
    setTodos(newTodos);
  }

  const addToDoHandler = (item) => {
    if (!todos.some(todo => todo.item === item)) {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]);
    }
  }

  return (
    <div className="bg-blue-800 h-screen p-3">
      <div className="mx-auto max-w-[80%] min-h-[90vh] shadow-2xl bg-white rounded-3xl shaddow-2xl">
        <div className='text-blue-700 text-center font-bold font-mono sm:text-sm text-xs xl:text-2xl 2xl:text-6xl p-5'>
          <Header/>
        </div>
        <InputField handler={addToDoHandler}/>
        <Box data={todos} removeHandler={removeToDo} editHandler={editHandler} />
      </div>
    </div>
  );
}

export default App;

