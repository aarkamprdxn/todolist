import React from "react";

const List = props => {
  return (
    <div className="todo">
      <i
        class="fa fa-2x fa-times-circle"
        onClick={() => {
          props.onSelect(props.id);
        }}
      />
      <li> {props.data} </li>
    </div>
  );
};

export default List;
