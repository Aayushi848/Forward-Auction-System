// src/components/TodoList.jsx
import React from 'react';

const TodoList = () => {
  return (
    <div className="todo">
      <div className="head">
        <h3>Todos</h3>
        <i className="bx bx-plus"></i>
        <i className="bx bx-filter"></i>
      </div>
      <ul className="todo-list">
        {[
          { completed: true },
          { completed: true },
          { completed: false },
          { completed: true },
          { completed: false }
        ].map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : 'not-completed'}>
            <p>Todo List</p>
            <i className="bx bx-dots-vertical-rounded"></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
