// import { Droppable } from 'react-beautiful-dnd';
// import { Task } from './Task';
// import { useTasks } from '../context/TaskContext';

// export function TaskList() {
//   const { filteredTasks, clearCompleted } = useTasks();

//   return (
//     <div className="mt-6">
//       <Droppable droppableId="tasks">
//         {(provided) => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             className="mb-4"
//           >
//             {filteredTasks.length === 0 ? (
//               <p className="text-center text-gray-500 dark:text-gray-400 py-4">
//                 No tasks found. Add a new task above!
//               </p>
//             ) : (
//               filteredTasks.map((task, index) => (
//                 <Task key={task.id} task={task} index={index} />
//               ))
//             )}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>

//       {filteredTasks.length > 0 && (
//         <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
//           <span>{filteredTasks.filter(t => !t.completed).length} items left</span>
//           <button
//             onClick={clearCompleted}
//             className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
//           >
//             Clear completed
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import { Droppable } from '@hello-pangea/dnd';
import { Task } from './Task';
import { useTasks } from '../context/TaskContext';

export function TaskList() {
  const { filteredTasks, clearCompleted } = useTasks();

  return (
    <div className="mt-6">
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="mb-4"
          >
            {filteredTasks.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 py-4">
                No tasks found. Add a new task above!
              </p>
            ) : (
              filteredTasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {filteredTasks.length > 0 && (
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{filteredTasks.filter(t => !t.completed).length} items left</span>
          <button
            onClick={clearCompleted}
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Clear completed
          </button>
        </div>
      )}
    </div>
  );
}

