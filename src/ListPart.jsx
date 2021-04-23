import React from "react";

const ListPart = (props) => {





  return (
    <>
    <div className="listG">
      <li> {props.text} </li>
      <button id="delTodo" 
      onClick={()=> {
          props.onSelect(props.id)
      }}>
      X</button>
      </div>
    </>
  );
};

export default ListPart;
