import { useState } from "react";

function AddTodo(onNewItem){

const [todoName, setTodoName] = useState();
const [todoDate, setDueDate] = useState();

const handleNameChange = (event) => {
setTodoName(event.target.value);
};
const handelDateChange = (event) => {
  setDueDate(event.target.value);
};

const handleAddButtonClicked = ()=>{onNewItem("todoName","DueDate");
  setDueDate("");
  setTodoName("");

};

return (<div className="container text-center">
<div className="row kg-row">
  <div className="col-6">
    <input type="text" placeholder="Todo Here" 
    value={todoName}
    onChange={handleNameChange} />
  </div>
  <div className="col-4">
    <input type="date" onChange={handelDateChange} />
  </div>
  <div className="col-2">
    <button type="button" className="btn btn-success kg-button" onClick={(handleAddButtonClicked)} 
      >
      Add
    </button>
  </div>
</div>
</div>
);}
export default AddTodo;