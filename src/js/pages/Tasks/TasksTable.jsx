import { TaskList } from "./TaskList";
import { useContext } from "react";
import { ListOrderContext } from "./TasksContext";
import {Flex, Spacer} from "@chakra-ui/react";

export const TasksTable = () => {
    const listOrder = useContext(ListOrderContext)

    return(
        <Flex className="tasks-table">
            {
                listOrder.map((data, idx) => {
                    return (
                        <div key={idx}>
                            {
                                idx > 0 ?
                                    <Spacer />
                                :
                                    null
                            }
                            <TaskList currListStatus={data}/>
                        </div>
                    )
                })
            }
        </Flex>
    )
}