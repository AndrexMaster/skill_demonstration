import { TaskList } from "./TaskList";
import {Flex, Spacer} from "@chakra-ui/react";
import {useSelector} from "react-redux";

export const TasksTable = () => {

    const tasksStatusOrder = useSelector(state => state.tasksStatusOrder)
    const tasksList = useSelector(state => state.tasksList)

    return(
        <Flex className="tasks-table">
            {
                tasksStatusOrder.map((currListStatus, idx) => {
                    let tasksByStatus = tasksList.filter(item => [currListStatus].includes(item.status))

                    return (
                        tasksByStatus.length > 0 ?
                            <div key={idx}>
                                {
                                    idx > 0 ?
                                        <Spacer />
                                        :
                                        null
                                }
                                <TaskList tasksByStatus={tasksByStatus} currListStatus={currListStatus}/>
                            </div>
                        : null
                    )
                })
            }
        </Flex>
    )
}