import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useTasks } from '../context/TaskContext';

export const Task = memo(({ task, index }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-4 mb-2 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-between ${
            snapshot.isDragging ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'
          } transition-all duration-200 shadow-sm hover:shadow-md`}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
            />
            <span
              className={`ml-3 ${
                task.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-800 dark:text-gray-200'
              }`}
            >
              {task.text}
            </span>
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700 transition-colors"
            aria-label="Delete task"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      )}
    </Draggable>
  );
});