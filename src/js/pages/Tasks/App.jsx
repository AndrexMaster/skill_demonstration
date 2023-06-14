
// Components
import { useReducer } from 'react';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';
import { tasksReducer } from "./Reducer";
// Styles
import '../../../css/pages/tasks.css'

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    const handleAddTask = (text) => {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    const handleChangeTask = (task) => {
        dispatch({
            type: 'changed',
            task: task
        });
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    return (
        <div className="tasks-wrapper">
            <h1>Day off in Kyoto</h1>
            <AddTask
                onAddTask={handleAddTask}
            />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    );
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];
