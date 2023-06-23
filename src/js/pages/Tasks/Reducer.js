export const tasksReducer = (tasks, action) => {
    const currListStatus = ['todo', 'inProcess', 'done']
    switch (action.type) {
        case 'added': {
            return [...tasks[0].list, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
                return tasks[currListStatus].list.map(task => {
                    if (task.id === action.task.id) {
                        return action.task;
                    } else {
                        return task;
                    }
                })
        }
        case 'deleted': {
            return tasks.filter(task => task.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}