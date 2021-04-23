import React , { useState } from 'react';
import ListPart from './ListPart';
const App = () => {

const [inputtodo, setInputTodo] = useState("");
const [items, setitems] = useState([]);

const handleChange = (event) => {
  setInputTodo(event.target.value);
};


const ListOfItems = () => {
setitems((oldItems) => {
  return [...oldItems, inputtodo];
});
setInputTodo("");
};



const delItem = (id) => {
setitems((oldItems) => {
  return oldItems.filter((arrElem, index) => {
return index !== id;
  })
})
};



  return (
  
<>
<div className="main">
<h1>
  Todo List App
</h1>

<input type="text" value={inputtodo} name="todo" placeholder="Enter Add Todo"
 onChange={handleChange}/>
<button id="addTodo" onClick={ListOfItems}>Add Todo</button>



<ol>
{items.map( (itemval , index) => {
  return <ListPart
   key={index} 
   id={index}
    text={itemval}
    onSelect={delItem}/>
})}
</ol>
</div>




</>
  );
};

export default App;
