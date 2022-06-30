import React from 'react';

const ToDoItems = ({allToDo, ListItemClickHandler}) => {
    const showTodo = allToDo.map((item, index) => {
        return (
            <ul className='listStyleType'>
                {/* <button className= 'checkBoxButton' onClick={ListItemClickHandler}></button> */}
                <input type="checkbox" onClick={(e) =>ListItemClickHandler(item, e)}></input>
                <li key={index} style={{ margin: '5px'}}>{item}</li>
            </ul> 
        );
    })
    return(
        <div className="showToDo">{showTodo}</div>
    );
}

export default ToDoItems;