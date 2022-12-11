import React, { useEffect, useState } from "react";
import { produce } from "immer";
import "../App.css";

let COUNT = 4;

const Header = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "일어나기", completed: false },
    { id: 2, title: "공부하기", completed: true },
    { id: 3, title: "잠자기", completed: false },
  ]);

  const [curButton, setCurButton] = useState("all");
  const [inputText, setInputText] = useState("");
  const [isDark, setIsDart] = useState(false);

  const buttonChange = (event) => {
    setCurButton(event.target.name);
  };

  const checkHandler = ({ target }) => {
    setTodoList(
      produce((draft) => {
        const todo = draft.find((row) => row.id === +target.id);
        todo.completed = target.checked;
      })
    );
  };
  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  const addTodoList = (event) => {
    setTodoList(
      produce((draft) => {
        draft.push({
          id: COUNT++,
          title: inputText,
          completed: false,
        });
      })
    );
    setInputText("");
  };

  return (
    <>
      <div>
        <button>{isDark ? "Dark Mode" : "Light Mode"}</button>
      </div>

      <div style={{ display: "flex" }}>
        <button onClick={buttonChange} name="all">
          all
        </button>
        <button onClick={buttonChange} name="active">
          active
        </button>
        <button onClick={buttonChange} name="complate">
          complate
        </button>
      </div>

      <ul>
        {todoList.map((item) => {
          if (curButton === "active" && item.completed === true) return;
          if (curButton === "complate" && item.completed === false) return;
          return (
            <li key={item.id} className={item.completed ? "checked" : null}>
              <input
                type="checkbox"
                id={item.id}
                onChange={checkHandler}
                checked={item.completed}
              ></input>
              {item.title}
            </li>
          );
        })}
      </ul>

      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="add todo"
          value={inputText}
          onChange={inputHandler}
          onKeyUp={(e) => (e.key === "Enter" ? addTodoList() : null)}
        />
        <button onClick={addTodoList}>추가</button>
      </div>
    </>
  );
};

export default Header;
