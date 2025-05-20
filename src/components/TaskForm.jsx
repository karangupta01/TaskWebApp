import { useState, useRef, useEffect } from 'react';
import { useTasks } from '../context/TaskContext';

export function TaskForm() {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const { addTask } = useTasks();
  const [error, setError] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError('Task cannot be empty');
      return;
    }
    addTask(input);
    setInput('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError('');
          }}
          placeholder="Add a new task..."
          className={`flex-1 p-3 rounded-lg border ${
            error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
        >
          Add
        </button>
      </div>
      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
    </form>
  );
}