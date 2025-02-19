import { useEffect, useState } from "react";

export default function TodoCreateModal({ addTodoItem }) {
  const [todo, setTodo] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [reminder, setReminder] = useState("");

  useEffect(() => {
    addTodoItem(todo);
    setName("");
    setDescription("");
    setDueDate("");
    setReminder("");
  }, [todo]);

  function handleCancelClick() {
    document.getElementById("createTodoModal").style.display = "none";
    setTodo("");
  }

  function handleAddTodoClick() {
    setTodo({ name, description, dueDate, reminder });
    if (name) document.getElementById("createTodoModal").style.display = "none";
  }
  return (
    <div className="backdrop-blur-[1px] bg-black/30 cmp-t-modal__overlay fixed flex inset-0 overflow-auto p-4 z-20">
      <div className="bg-white m-auto max-w-lg px-12 py-8 rounded-md shadow-lg w-1/2">
        <div className="flex flex-col">
          <label htmlFor="todo-title" className="font-bold mb-0.5 text-sm">
            Title<sup className="text-red-600">*</sup>
          </label>
          <input
            type="text"
            name="todo-title"
            className="border border-slate-300 mb-6 p-2 rounded-sm w-full"
            placeholder="What's on your mind..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label className="font-bold mb-0.5 text-sm" htmlFor="todo-decription">
            Description
          </label>
          <textarea
            name="todo-decription"
            className="border border-slate-300 mb-6 p-2 rounded-sm w-full h-40 max-h-40"
            placeholder="Add Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label className="font-bold mb-0.5 text-sm" htmlFor="todo-due-date">
            Due Date
          </label>
          <input
            type="datetime-local"
            name="todo-due-date"
            className="border border-slate-300 mb-6 p-2 rounded-sm w-full"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          ></input>
          <label className="font-bold mb-0.5 text-sm" htmlFor="todo-reminder">
            Reminder
          </label>
          <select
            name="todo-reminder"
            className="border border-slate-300 mb-6 p-2 rounded-sm w-full"
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
          >
            <option disabled="disabled" value="" defaultValue>
              Please select one
            </option>
            <option value="300000">5 minutes</option>
            <option value="600000">10 minutes</option>
            <option value="900000">15 minutes</option>
            <option value="1800000">30 minutes</option>
            <option value="2700000">45 minutes</option>
            <option value="3600000">1 hour</option>
          </select>
          <button
            className="bg-sky-300 font-bold px-5 rounded-sm py-3 text-t mb-2"
            onClick={handleAddTodoClick}
          >
            Add Todo
          </button>
          <button
            className="bg-sky-300 font-bold px-5 rounded-sm py-3 text-t"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
