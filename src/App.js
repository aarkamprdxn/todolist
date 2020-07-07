import React, { useState } from "react";
import List from "./List";
import "./styles.css";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = event => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems(previtems => {
      return [...previtems, inputList];
    });
    setInputList("");
  };

  const deleteitems = id => {
    console.log("deleted");

    setItems(previtems => {
      return previtems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="head">
          <h1>ToDO List</h1>
        </div>
        <div className="card-body">
          <input
            type="text"
            placeholder="Add a items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  data={itemval}
                  onSelect={deleteitems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
