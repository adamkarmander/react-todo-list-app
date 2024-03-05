import React from "react";
//Importing Components
import Todo from './Todo';

function TodoList() {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <Todo />
                <Todo />
                <Todo />
            </ul>
        </div>
    );
};

export default TodoList;