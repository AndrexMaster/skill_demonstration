import { Task } from './Task'
import {
    Badge,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Spacer,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const TaskList = ({tasksByStatus, currListStatus}) => {
    const statusesData = useSelector(state => state.statusesData)

    return (
        <Card maxW="sm" borderWidth="1px" borderRadius="lg" borderColor="gray.200" overflow="hidden" p="3" background={statusesData[currListStatus].bg}>
            <CardHeader>
                <Flex>
                    <Heading as="h3" size="md" noOfLines={1}>
                        {statusesData[currListStatus].heading}
                    </Heading>
                    <Spacer />
                    <div>
                        <Badge colorScheme='purple'>Count: {tasksByStatus.length}</Badge>
                    </div>
                </Flex>
            </CardHeader>

            <CardBody className='card-body'>
                <ul>
                    {
                        tasksByStatus.map(task => (
                            <li key={task.id}>
                                <Task task={task} taskId={task.id}/>
                            </li>

                        ))
                    }
                </ul>
            </CardBody>
        </Card>
    );
}
