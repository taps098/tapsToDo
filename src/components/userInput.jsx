import React from 'react';

const UserInput = ({todo, changeHandler, clickHandler}) => {
    return(
        <div className="userInputDiv">
            <form>
            <input className='inputStyle' type="text" value={todo} onChange={changeHandler}/>
            <button className= "buttonStyle" type='submit' onClick={clickHandler}>Add</button>
            </form>
        </div>
    );
}

export default UserInput;