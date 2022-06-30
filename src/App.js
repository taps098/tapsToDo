import React, {useState} from 'react';
import UserInput from './components/userInput';
import ToDoItems from './components/todoItems';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [allToDo, setAllToDo] = useState([]);
  const [ duplicate, setDuplicate] = useState(false);
  const [alertToAdd, setAlertTodAdd] = useState(false);
  const changeHandler = (e) => {
    const userToDo = e.target.value;
    setTodo(userToDo);
  }
  const clickHandler = (e) => {
    e.preventDefault();
    // check if todo is already present then set the warning
    const duplicate = allToDo.filter((item) => item === todo);
    // check if nothing is entered then set the warning 
    if(todo === ''){
      setAlertTodAdd(true);
    } else if(duplicate.length !== 0){
      setDuplicate(true);
    } else if(todo != undefined && todo != ''){
      const newSetOfTodo = [...allToDo, todo];
      setAllToDo(newSetOfTodo);
      setTodo('');
      setDuplicate(false);
      setAlertTodAdd(false)
    }
  }
  const ListItemClickHandler = (item, e) => {
    e.preventDefault();
    if(e.target.checked === true){
      const refreshedToDos = allToDo.filter((i) => i !== item)
      setAllToDo(refreshedToDos);
    }
    // else{
    //   console.log('list item is un clicked', e.target.value);
    // }
  }
  return (
    <div className="App">
      <UserInput todo={todo} changeHandler={changeHandler} clickHandler={clickHandler}/>
      {alertToAdd ? <div className='addwarningStyle'>Please add a todo</div> : undefined}
      {duplicate? 
        <div className='duplicatewarningStyle'>
            duplicate value
        </div> 
        : undefined
      }
      <ToDoItems allToDo={allToDo} ListItemClickHandler={ListItemClickHandler}/>
    </div>
  );
}

export default App;
