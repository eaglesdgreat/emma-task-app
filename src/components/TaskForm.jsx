import { createTask } from '../features/tasks/tasks.slice'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const TaskForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ text }));
    setText('');
    navigate('/all-tasks')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor="text" style={{ fontWeight: 'bold' }}>Enter Task</label>
          <input
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <button type="submit" className='btn btn-block'>Add Task</button>
        </div>
      </form>
    </section>
  )
}

export default TaskForm;
