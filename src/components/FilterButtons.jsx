import { useTasks } from '../context/TaskContext';

export function FilterButtons() {
  const { filter, setFilter } = useTasks();
  const filters = ['all', 'pending', 'completed'];

  return (
    <div className="flex justify-center gap-2 my-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-md text-sm capitalize ${
            filter === f
              ? 'bg-blue-400 text-white'
              : 'text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
          } transition-colors`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}