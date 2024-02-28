import React from "react";

function Form({ setInputText } ) {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    return (
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button className="todo-button" type="submit">Add</button>
        </form>
    );
};

export default Form;