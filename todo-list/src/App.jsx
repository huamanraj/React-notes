import React, { useEffect } from 'react'

import Footer from './components/Footer'
import Todos from './components/Todos'
import Header from './components/Header'
import About from './components/About'
import { useState } from 'react'
import AddTodo from './components/AddTodo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }


  const addTodo = (title, desc) => {
    console.log("todo add btn", title, desc);
    let sno;

    if (todos.length == 0) {
      sno = 0;

    } else {
      sno = todos[todos.length - 1].sno + 1;

    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo])

    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

  }


  const onDelete = (todo) => {
    console.log("delete clicked on", todo);
    setTodos(todos.filter((e) => {
      return e != todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);




  return (
    <>
      <Header title="todo list" searchBar={true} />

      <Router>
        <Routes>
        <Route path="/" render={() => {
          return (
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          )
        }}>
        </Route>
        <Route path="/about" element={<About/>} >
        </Route>

        </Routes>
        
      </Router>

      <Footer />


    </>
  )
}

export default App
