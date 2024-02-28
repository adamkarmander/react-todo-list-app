import React, { useState } from 'react';
import './App.css';

//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap')
      </style>
      <header>
        <h1>My Todo List {inputText}</h1>
        <Form setInputText={setInputText} />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
