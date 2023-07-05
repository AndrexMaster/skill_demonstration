import { createStore } from "redux";
import { TaskReducer } from './TasksReducer'
export const store = createStore(TaskReducer)
