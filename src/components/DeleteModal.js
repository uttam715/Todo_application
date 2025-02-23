export default function DeleteModal({ handleDeleteClick, task }) {
  function handleCancelDeleteClick() {
    console.log(task.name);
    document.getElementById("deleteTodoModal").style.display = "none";
  }
  function handleConfirmlDeleteClick() {
    document.getElementById("deleteTodoModal").style.display = "none";
    console.log(task.name);
    handleDeleteClick(task);
  }
  return (
    <div className="flex z-10 fixed inset-0 p-4 overflow-auto bg-black/30 backdrop-blur-[1px]">
      <div className="bg-white rounded-md m-auto px-12 py-8 shadow-lg w-1/2 max-w-md">
        <p className="text-center mb-6">
          Are you sure you don't want to {task.name} ?
        </p>
        <div className="flex items-center justify-center">
          <button
            className="font-bold text-l px-5 py-2 bg-sky-300 rounded-sm right-0 border border-sky-300 mr-3"
            onClick={handleCancelDeleteClick}
          >
            {" "}
            No, cancel
          </button>
          <button
            className="font-bold text-l px-5 py-2 bg-red-300 rounded-sm right-0 border border-red-300"
            onClick={handleConfirmlDeleteClick}
          >
            Yes, confirm
          </button>
        </div>
      </div>
    </div>
  );
}
