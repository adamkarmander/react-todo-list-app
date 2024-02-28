import React from "react";

function Form() {
    return (
        <form>
            <input type="text" className="todo-input" />
            <button className="todo-button" type="submit">Add</button>
        </form>
    );
};

export default Form;