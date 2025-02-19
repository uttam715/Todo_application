import { useEffect, useRef, useState } from "react";
import TodoBar from "./components/TodoBar.js";
import TodoCreateModal from "./components/TodoCreateModal";
import { generateUUID } from "./utils/commonMethod.js";
import TodoItem from "./components/TodoItem.js";
import "./App.css";
import DeleteModal from "./components/DeleteModal.js";
import EditModel from "./components/EditModel.js";

// export const todoContext= createContext("");

function App() {
  const [todoList, setTodoList] = useState([]);
  const [tab, setTab] = useState("All");
  const [updatedList, setUpdatedList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [item, setItem] = useState("");
  // const [noSearchResult, setNoSearchResult] = useState(false);

  useEffect(() => {
    setUpdatedList([...todoList]);
  }, [todoList]);

  useEffect(() => {
    searchTodo();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function searchTodo() {
    const filteredTodos = todoList.filter((todo) =>
      todo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // if (!filteredTodos.length) {
    //   setNoSearchResult(true);
    // } else {
      setUpdatedList(filteredTodos);
    // }
  }

  function handleAddClick() {
    document.getElementById("createTodoModal").style.display = "block";
  }

  function addTodo(todo) {
    if (!todo.name) return;
    const id = generateUUID();
    setTodoList([...todoList, { ...todo, id, status: false }]);
    setSearchTerm("");
  }

  function selectedTab(text) {
    const updatedTodoList = [...todoList];
    setTab(text);
    if (text === "Completed") {
      const updated = updatedTodoList.filter((item) => item.status === true);
      setUpdatedList(updated);
    } else if (text === "Pending") {
      const updated = updatedTodoList.filter((item) => item.status === false);
      setUpdatedList(updated);
    } else {
      setUpdatedList([...todoList]);
    }
    setSearchTerm("");
  }

  function handleDeleteClick(task) {
    // console.log(task)
    const deletedTodo = todoList.findIndex((item) => task.id === item.id);
    const updatedList = [...todoList];
    updatedList.splice(deletedTodo, 1);
    setTodoList(updatedList);
  }

  function handleDeleteTodo(task) {
    setItem({ ...task });
  }

  function handleEditTodo(task, name) {
    console.log(name);
  }

  function handlMarkInCompleteTodo(task) {
    const updatedList = todoList.map((item) => {
      if (task.id === item.id) {
        let todo = {};
        if (task.status === true) {
          todo = { ...item, status: false };
        } else {
          todo = { ...item, status: true };
        }
        return todo;
      }
      return item;
    });
    setTodoList(updatedList);
  }

  return (
    <div className="main border border-slate-300 border-solid main md:m-0 md:w-1/2 mx-4 p-2 relative rounded-lg w-full">
      <div className="flex relative">
        <input
          className="border border-slate-300 rounded-sm p-2 mb-8 w-full"
          type="text"
          value={searchTerm}
          placeholder="search todo here"
          onChange={handleSearchChange}
        ></input>
        <button
          className="absolute bg-sky-300 border border-sky-300 font-bold px-5 py-2 right-0 rounded-sm text-l"
          onClick={handleAddClick}
        >
          + Add Todos
        </button>
      </div>

      <div id="createTodoModal" className="hidden">
        <TodoCreateModal addTodoItem={addTodo} />
      </div>

      <div id="deleteTodoModal" className="hidden">
        <DeleteModal handleDeleteClick={handleDeleteClick} task={item} />
      </div>

      <div className="max-h-[460px] min-h-[450px] overflow-auto">
        {updatedList.length ? (
          <div className="todoIList">
            {updatedList.map((item) => (
              <TodoItem
                key={item.id}
                task={item}
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo}
                handlMarkInCompleteTodo={handlMarkInCompleteTodo}
              ></TodoItem>
            ))}
          </div>
        ) : (
          <div className="m-auto mt-24 text-center text-lg w-48">
            {" "}
            Nothing to create yet. Click on Create Todos to get started on your
            list.
          </div>
        )}
      </div>
      <div className="absolute border-sky-300 border-t border-slate-300 bottom-0 flex left-0 right-0">
        <TodoBar
          tab={tab}
          text="All"
          design="border-r py-2 text-center w-1/3 rounded-bl-lg border-slate-300"
          selectedTab={selectedTab}
        />
        <TodoBar
          tab={tab}
          text="Pending"
          design="border-r py-2 text-center w-1/3 py-2 border-slate-300"
          selectedTab={selectedTab}
        />
        <TodoBar
          tab={tab}
          text="Completed"
          design="py-2 text-center w-1/3 rounded-br-lg"
          selectedTab={selectedTab}
        />
      </div>
    </div>
  );
}

export default App;
