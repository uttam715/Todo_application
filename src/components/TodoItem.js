import { useEffect, useState } from "react";
import EditModel from "./EditModel.js";
import { searchClassName } from "../utils/commonMethod.js";

export default function TodoItem({
  handleDeleteTodo,
  task,
  handleEditTodo,
  handlMarkInCompleteTodo,
}) {
  const [isEdit, setEdit] = useState(false);

  useEffect(() => {
    document.addEventListener("click", function (event) {
      const targetClassExists = searchClassName(event.target, "edit-popup", 2);
      if (targetClassExists) return;

      setEdit(false);
    });
  }, []);

  function handleDelete() {
    document.getElementById("deleteTodoModal").style.display = "block";
    handleDeleteTodo(task);
  }

  function handleEdit() {
    console.log("testing....2");
    setEdit((val) => !val);
  }

  function handlMarkInComplete() {
    handlMarkInCompleteTodo(task);
  }

  function handleEdittask(e) {
    handleEditTodo(task, e.target.outerText);
    document.getElementById("createTodoModal").style.display = "block";
  }

  return (
    <div className="flex justify-between mb-4 rounded-sm p-px relative bg-sky-200">
      <div
        className={`${
          task.status
            ? "w-2/3 p-3 text-lg truncate line-through"
            : "w-2/3 p-3 text-lg truncate"
        }`}
      >
        {task.name}
      </div>
      <div className="p-3 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="block w-4 h-4 mx-4 cursor-pointer"
          onClick={handleDelete}
        >
          <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
        <div className="cursor-pointer edit-popup" onClick={handleEdit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
            className="block w-4 h-4 mr-2"
          >
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
        </div>
      </div>
      {isEdit ? (
        <div
          id="editTodoModal"
          className="flex absolute bg-white flex-col py-2 right-5 shadow-black-500/40 shadow-lg top-2.5 z-10 cursor-pointer"
        >
          <span
            className="flex items-center py-1 px-4 ]hover:bg-slate-100"
            onClick={handleEdittask}
            name="edit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="block w-4 h-4 mr-4"
            >
              <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
            </svg>
            Edit
          </span>
          {task.status ? (
            <>
              <span
                className="flex items-center py-1 px-4 ]hover:bg-slate-100"
                onClick={handlMarkInComplete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="block w-4 h-4 mr-4"
                >
                  <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                Mark Incompleted
              </span>
            </>
          ) : (
            <>
              <span
                className="flex items-center py-1 px-4 ]hover:bg-slate-100"
                onClick={handlMarkInComplete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="block w-4 h-4 mr-4"
                >
                  <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                Mark Completed
              </span>
            </>
          )}

          <span
            className="flex items-center py-1 px-4 ]hover:bg-slate-100"
            onClick={handleEdittask}
            name="duplicate"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="block w-4 h-4 mr-4"
            >
              <path d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
            </svg>
            Duplicate
          </span>
        </div>
      ) : null}
    </div>
  );
}
