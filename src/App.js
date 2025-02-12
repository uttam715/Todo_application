import { useEffect, useState } from "react";
import TodoBar from "./components/TodoBar.js";
import TodoCreateModal from "./components/TodoCreateModal";
import { generateUUID } from "./utils/commonMethod.js";
import TodoItem from "./components/TodoItem.js";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [tab, setTab] = useState("All");

  function handleAddClick() {
    document.getElementById("createTodoModal").style.display = "block";
  }

  function addTodo(todo) {
    if (!todo.name) return;
    const id = generateUUID();
    setTodoList([...todoList, { ...todo, id, status: false }]);
    console.log(todoList, "added todos.....");
  }

  function selectedTab(text){
    setTab(text);
    console.log(tab);
  }

  return (
    <div className="main border border-slate-300 border-solid main md:m-0 md:w-1/2 mx-4 p-2 relative rounded-lg w-full">
        <div className="flex relative">
          <input className="border border-slate-300 rounded-sm p-2 mb-8 w-full" type="text" value="" placeholder="search todo here"></input>
          <button className="absolute bg-sky-300 border border-sky-300 font-bold px-5 py-2 right-0 rounded-sm text-l" onClick={handleAddClick}>
            + Add Todos
          </button>
        </div>
      
        <div id="createTodoModal" className="hidden">
          <TodoCreateModal addTodoItem={addTodo} />
        </div>
        <div className="max-h-[460px] min-h-[450px] overflow-auto">
        {
          todoList.length ?
        <div className="todoIList">
          {todoList.map((item) => (
            <TodoItem task={item} key={item.id}></TodoItem>
          ))}
        </div> : <div className="m-auto mt-24 text-center text-lg w-48"> Nothing to create yet. Click on Create Todos to get started on your list.</div>
        }
        </div>
        <div className="absolute border-sky-300 border-t border-slate-300 bottom-0 flex left-0 right-0">
          <TodoBar tab={tab} text="All" design="border-r py-2 text-center w-1/3 rounded-bl-lg" selectedTab={selectedTab}/>
          <TodoBar tab={tab} text="Pending" design="border-r py-2 text-center w-1/3 py-2" selectedTab={selectedTab}/>
          <TodoBar tab={tab} text="Completed" design="py-2 text-center w-1/3 rounded-br-lg" selectedTab={selectedTab}/>
        </div>
    </div>
  );
}

export default App;
