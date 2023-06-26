import { useReducer } from 'react';
import { AddTask } from './AddTask';
import { TasksTable } from './TasksTable';
import { TasksContext, TasksDispatchContext } from './TasksContext';

// Styles
import '../../../css/pages/tasks.css';
import { Grid } from "@chakra-ui/react";

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    return (
        <div className="tasks-wrapper">
            <TasksContext.Provider value={tasks}>
                <TasksDispatchContext.Provider value={dispatch}>
                    <Grid gap={6}>
                        <h1>Day off in Kyoto</h1>
                        <AddTask />
                        <TasksTable />
                    </Grid>
                </TasksDispatchContext.Provider>
            </TasksContext.Provider>
        </div>
    );
};

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(task => task.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialTasks = {
        'todo': {
            'heading': 'To Do',
            'bg': 'blue.100',
            'list' : [
                { id: 0, text: 'Philosopher’s Path', done: true,},
                { id: 1, text: 'Philosopher’s Path', done: true,},
                { id: 2, text: 'Philosopher’s Path', done: true,},
            ],
        },
        'inProcess': {
            'heading': 'In Process',
            'bg': 'orange.100',
            'list': [
                { id: 0, text: 'Visit the temple', done: false, },
                { id: 1, text: 'Visit the temple', done: false, },
                { id: 2, text: 'Visit the temple', done: false, },
            ],
        },
        'done': {
            'heading': 'Done',
            'bg': 'green.100',
            'list': [
              { id: 0, text: 'Drink matcha', done: false, },
              { id: 1, text: 'Drink matcha', done: false, },
              { id: 2, text: 'Drink matcha', done: false, },
            ]
        },
    };
