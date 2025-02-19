export default function TodoItem({ handleDeleteTodo, task }) {
  // const todo= useContext(todoContext);
  function handleDelete() {
    document.getElementById("deleteTodoModal").style.display = "block";
    handleDeleteTodo(task);
  }

  return (
    <div className="flex justify-between mb-4 rounded-sm p-px relative bg-sky-200">
      <div className="w-2/3 p-3 text-lg truncate">{task.name}</div>
      <div className="p-3 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="block w-4 h-4 mx-4 cursor-pointer"
          onClick={handleDelete}
        >
          <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" className="block w-4 h-4 mr-2">
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
