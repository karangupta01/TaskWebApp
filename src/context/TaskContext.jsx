import { createContext, useContext, useCallback, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  const addTask = useCallback((text) => {
    if (!text.trim()) return;
    setTasks(prevTasks => [
      ...prevTasks,
      { id: Date.now(), text, completed: false }
    ]);
  }, [setTasks]);

  const toggleTask = useCallback((id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  const deleteTask = useCallback((id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, [setTasks]);

  const clearCompleted = useCallback(() => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  }, [setTasks]);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const value = useMemo(() => ({
    tasks,
    filteredTasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
    filter,
    setFilter,
  }), [tasks, filteredTasks, addTask, toggleTask, deleteTask, clearCompleted, filter]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}