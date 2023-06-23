import { useContext } from 'react';
import { TasksContext } from './TasksContext';
import { Task } from './Task'
import {
    Badge,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Spacer,
} from "@chakra-ui/react";

export const TaskList = ({currListStatus}) => {
    const tasks = useContext(TasksContext);

    return (
        <>
            {
                tasks[currListStatus].list && tasks[currListStatus].list.length > 0 ?
                        <Card maxW="sm" borderWidth="1px" borderRadius="lg" borderColor="gray.200" overflow="hidden" p="3" background={tasks[currListStatus].bg}>
                            <CardHeader>
                                <Flex>
                                    <Heading as="h3" size="md" noOfLines={1}>
                                        {tasks[currListStatus].heading}
                                    </Heading>
                                    <Spacer />
                                    <div>
                                        <Badge colorScheme='purple'>Count: {tasks[currListStatus].list.length}</Badge>
                                    </div>
                                </Flex>
                            </CardHeader>

                            <CardBody className='card-body'>
                                <ul>
                                    {tasks[currListStatus].list.map(task => (
                                        <li key={task.id}>
                                            <Task task={task} />
                                        </li>
                                    ))}
                                </ul>
                            </CardBody>

                            <CardFooter>

                            </CardFooter>
                        </Card>
                    :
                    null
            }
        </>
    );
}
