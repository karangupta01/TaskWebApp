// import { TaskProvider } from './context/TaskContext';
// import { TaskForm } from './components/TaskForm';
// import { TaskList } from './components/TaskList';
// import { FilterButtons } from './components/FilterButtons';
// import { ThemeToggle } from './components/ThemeToggle';
// import { DragDropContext } from 'react-beautiful-dnd';
// import { useTasks } from './context/TaskContext';
// import { useState, useEffect } from 'react';

// function AppContent() {
//   const { tasks, setTasks } = useTasks();
//   const [darkMode, setDarkMode] = useState(() => {
   
//     const savedMode = localStorage.getItem('darkMode');
//     if (savedMode !== null) {
//       return savedMode === 'true';
//     }
//     return window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });

  
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('darkMode', darkMode);
//   }, [darkMode]);

//   const onDragEnd = (result) => {
//     if (!result.destination) return;
//     const newTasks = Array.from(tasks);
//     const [removed] = newTasks.splice(result.source.index, 1);
//     newTasks.splice(result.destination.index, 0, removed);
//     setTasks(newTasks);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
//       <div className="container mx-auto px-4 py-8 max-w-md">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Task Manager</h1>
//           <div className="flex items-center gap-4">
//             <span className="text-sm text-gray-600 dark:text-gray-400">
//               {darkMode ? 'Dark' : 'Light'} Mode
//             </span>
//             <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
//           </div>
//         </div>
        
//         <TaskForm />
//         <FilterButtons />
//         <DragDropContext onDragEnd={onDragEnd}>
//           <TaskList />
//         </DragDropContext>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <TaskProvider>
//       <AppContent />
//     </TaskProvider>
//   );
// }

import { TaskProvider } from './context/TaskContext';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { FilterButtons } from './components/FilterButtons';
import { ThemeToggle } from './components/ThemeToggle';
import { DragDropContext } from '@hello-pangea/dnd';
import { useTasks } from './context/TaskContext';
import { useState, useEffect } from 'react';

function AppContent() {
  const { tasks, setTasks } = useTasks();
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    
    const newTasks = Array.from(tasks);
    const [removed] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, removed);
    
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Task Manager</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {darkMode ? 'Dark' : 'Light'} Mode
            </span>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
        
        <TaskForm />
        <FilterButtons />
        <DragDropContext onDragEnd={onDragEnd}>
          <TaskList />
        </DragDropContext>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}
