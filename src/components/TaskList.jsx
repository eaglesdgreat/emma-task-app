import { getTasks, reset } from '../features/tasks/tasks.slice';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from './Spinner';
import TaskItem from './TaskItem'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { tasks, isLoading, isError, message } = useSelector(state => state.tasks)
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    if (!user) navigate('/login')
    if (isError) toast.error(message);
    if (user) dispatch(getTasks());
    return () => dispatch(reset())
  }, [isError, message, navigate, dispatch, user])

  return (
    isLoading ? <Spinner /> : (
      <section className='content'>
        {
          tasks.length > 0 && (
            <div className='tasks'>
              {
                tasks.map((task) => <TaskItem key={task._id} task={task} />)
              }
            </div>
          ) 
        }
      </section>
    )
  )
}

export default TaskList;
