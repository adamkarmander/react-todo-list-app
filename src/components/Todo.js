import React from "react";

function Todo( {text} ) {
    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <div className="todo-buttons">
                <button className="complete-btn">Complete</button>
                <button className="trash-btn">Delete</button>
            </div>
        </div>
    );
};

export default Todo;