import Tasks from "./Tasks.jsx";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16 p-6 bg-white rounded-xl shadow-lg transition-all hover:shadow-2xl">
      <header className="pb-4 mb-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-gray-700 mb-2 tracking-wide">
            {project.title}
          </h1>
          <button
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md shadow-lg hover:bg-red-600 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-sm text-gray-400">{formattedDate}</p>
        <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
