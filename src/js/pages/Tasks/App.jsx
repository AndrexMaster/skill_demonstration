import { AddTask } from './AddTask';
import { TasksTable } from './TasksTable';
import { store } from './store/TasksStore'
import {
    Flex,
    Heading
} from "@chakra-ui/react";
import { Provider } from "react-redux";

// Styles
import '../../../css/pages/tasks.css';

export default function TaskApp() {
    return (
        <div className="tasks-wrapper">
            <Provider store={store}>
                <Flex gap={6} flexDirection='column' alignItems='flex-start'>
                    <Heading>Day off in Kyoto</Heading>
                    <AddTask />
                    <TasksTable />
                </Flex>
            </Provider>
        </div>
    );
};

