import {TasksList, TasksStatusOrder, StatusesData} from './TasksData';

const ADD_TASK = 'ADD_TASK'
const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_STATUS = 'CHANGE_STATUS'
const DELETE_TASK = 'DELETE_TASK'

const defaultState = {
    tasksList: TasksList,
    tasksStatusOrder: TasksStatusOrder,
    statusesData: StatusesData,
}

export const TaskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasksList: [...state.tasksList, action.payload]}

        case CHANGE_NAME:
            return {...state, tasksList: [...state.tasksList, state.tasksList.filter(item => [action.payload.id].includes(item.id))[0].name = action.payload.name]}

        case CHANGE_STATUS:
            return {...state, tasksList: [...state.tasksList, state.tasksList.filter(item => [action.payload.id].includes(item.id))[0].status = action.payload.status]}

        case DELETE_TASK:
            return {...state, tasksList: state.tasksList.filter(item => action.payload.id !== item.id)}

        default:
            return state
    }
}