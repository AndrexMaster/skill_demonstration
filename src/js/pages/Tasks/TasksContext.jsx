import {createContext} from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
export const ListOrderContext = createContext(['todo', 'inProcess', 'done'])
