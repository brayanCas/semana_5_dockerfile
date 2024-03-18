
import React, { useState } from 'react';

const Kanban = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Tarea 1', category: 'Todo' },
    { id: 2, text: 'Tarea 2', category: 'Todo' },
    { id: 3, text: 'Tarea 3', category: 'InProgress' },
    { id: 4, text: 'Tarea 4', category: 'Done' }
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, category) => {
    const id = e.dataTransfer.getData('id');
    const newTasks = tasks.map(task => {
      if (task.id === Number(id)) {
        return { ...task, category };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTaskText.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText,
        category: 'Todo'
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gradient-to-r p-8">
        <h1 className="text-4xl font-bold mb-4 mt-9">Kanban</h1>
        <hr className="border-b-2 mb-6" />
        <div className="flex">
          <div
            className="flex-grow border rounded-lg p-4 mr-4 bg-white"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, 'Todo')}
          >
            <h2 className="text-xl font-bold mb-4">Todo</h2>
            {tasks
              .filter(task => task.category === 'Todo')
              .map(task => (
                <div
                  key={task.id}
                  className="p-2 mb-2 rounded-md bg-blue-100"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                >
                  {task.text}
                </div>
              ))}
            <form onSubmit={handleFormSubmit} className="mt-4">
              <input
                type="text"
                placeholder="Agregar nueva tarea"
                value={newTaskText}
                onChange={handleInputChange}
                className="py-2 px-4 rounded-lg border"
              />
              <button type="submit" className="py-2 px-4 rounded-lg bg-blue-500 text-white ml-2">Agregar</button>
            </form>
          </div>
          <div
            className="flex-grow border rounded-lg p-4 mr-4 bg-white"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, 'InProgress')}
          >
            <h2 className="text-xl font-bold mb-4">In Progress</h2>
            {tasks
              .filter(task => task.category === 'InProgress')
              .map(task => (
                <div
                  key={task.id}
                  className="p-2 mb-2 rounded-md bg-yellow-100"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                >
                  {task.text}
                </div>
              ))}
          </div>
          <div
            className="flex-grow border rounded-lg p-4 bg-white"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, 'Done')}
          >
            <h2 className="text-xl font-bold mb-4">Done</h2>
            {tasks
              .filter(task => task.category === 'Done')
              .map(task => (
                <div
                  key={task.id}
                  className="p-2 mb-2 rounded-md bg-green-100"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                >
                  {task.text}
                </div>
              ))}
          </div>              
        </div>
      </div>
    </div>
  );
};

export default Kanban;
