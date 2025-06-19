// TodoList.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo , clearAllTodo } from './TodoSlice';

const TodoList = () => {
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), text }));
      setText('');
    }
  };

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText }));
      setEditingId(null);
      setEditText('');
    }
  };
  const handleClearAll =() =>{
    dispatch(clearAllTodo())
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">My Todos List</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd} className="btn btn-primary">
          Add
        </button>
      </div>

      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editingId === todo.id ? (
              <div className="w-100 d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className="btn btn-success me-2"
                  onClick={() => handleSave(todo.id)}
                >
                  Save
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <span>{todo.text}</span>
                <div>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEdit(todo.id, todo.text)}
                  >
                    Edit
                  </button>
                </div>
               
              </>
            )}
          </li>
        ))}
      </ul>
       <div className='text-center mt-4 justify-content-center align-items-center'>
                  <button className='btn btn-danger ' onClick={handleClearAll}>clear all</button>
                </div>
    </div>
  );
};

export default TodoList;
