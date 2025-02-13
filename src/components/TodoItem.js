export default function TodoItem({ task, handleDeleteClick }) {
  // console.log(task)
  function handleEditClick() {
    document.getElementById("createTodoModal").style.display = "block";
  }

  return (
    <div className="flex relative">
      <div className="border border-slate-300 rounded-sm p-2 mb-8 w-full">
        {task.name}
      </div>
      <button
        className="absolute bg-sky-300 border border-sky-300 font-bold px-5 py-2 right-10 rounded-sm text-l"
        onClick={() => handleDeleteClick(task)}
      >
        dele
      </button>
      <button
        className="absolute bg-sky-300 border border-sky-300 font-bold px-5 py-2 right-0 rounded-sm text-l"
        onClick={handleEditClick}
      >
        edit
      </button>
    </div>
  );
}
