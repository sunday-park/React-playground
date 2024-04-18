import { useState, useEffect } from 'react';

function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => { setToDo(event.target.value) }
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return; //toDo가 비어있는 경우 작동안함
    }
    setToDos((prevTodos) => [toDo,...prevTodos])
    setToDo(""); //제출시 초기화
  };
  console.log(toDos);
  
  return (
    <div className="App">
      <h1>My To-Do({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <label htmlFor=''></label>
      <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do..." />
      <button>Add To Do</button>
      </form>
      <hr />
      <div>
        <ul>
          {toDos.map((item, index)=>{
            return (
              <li key={index}>{item}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App;
