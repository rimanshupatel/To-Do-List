// import React from 'react'
import { v4 as uuidv4 } from "uuid";

import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function Todo() {
  const [todo, SetTodo] = useState("");
  const [todoList, SettodoList] = useState([]);

  useEffect(() => {
    let todo = JSON.parse(localStorage.getItem("todoList"));
    SettodoList(todo);
  }, []);

  //  save to local-storage
  const saveTodos = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };
  //  delete todo list items
  const handleDelete = (index) => {
    const updatedList = todoList.filter((elm, ind) => {
      return index !== ind;
    });
    SettodoList(updatedList);
    saveTodos();
  };
  // edit todo list items :-
  const handleEdit = (id, index) => {
    let todoItems = todoList.find((items) => items.id === id);
    SetTodo(todoItems.task);
    const updatedList = todoList.filter((elm, ind) => {
      return index !== ind;
    });
    SettodoList(updatedList);
  };
  // adding new items in todo list
  const handleAdd = () => {
    if (todo != "") {
      SettodoList([...todoList, { id: uuidv4(), task: todo }]);
      SetTodo("");
      saveTodos();
    }
  };
  const handleChange = (e) => {
    SetTodo(e.target.value);
  };

  return (
    <section className="my-24">
      {/* container-wrapper */}
      <div
        className="container flex flex-col items-center text-white mx-auto p-4 w-[24rem] sm:w-[37rem]  rounded"
        style={{ backgroundColor: "#1A1A40" }}
      >
        {/* header */}
        <h1 className="text-center text-4xl py-4 capitalize">
          react to do list
        </h1>
        <div className="my-4">
          <span className="text-xl">{`what's in your todo list ?`}</span>
          <form onSubmit={() => handleAdd()}>
            <div className="flex items-center">
              <input
                type="text"
                onChange={handleChange}
                value={todo}
                className="w-60 sm:w-80 h-10 my-2 px-4 bg-transparent text-white input-border outline-none"
              />
              <button
                type="button"
                onClick={() => handleAdd()}
                className=" primary-color mx-2 py-2 px-3 text-white rounded "
              >
                add task
              </button>
            </div>
          </form>
        </div>
        <ul className="w-[22rem] sm:w-[27rem]">
          {/* creating new todo items */}

          {todoList.map((items, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-2 px-3 my-3 primary-color rounded"
            >
              <p className="w-full">{items.task}</p>
              <div className="flex">
                <button className="text-2xl mx-2">
                  <BiSolidEdit onClick={() => handleEdit(items.id, index)} />
                </button>
                <button className="text-2xl">
                  <MdDelete onClick={() => handleDelete(index)} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
