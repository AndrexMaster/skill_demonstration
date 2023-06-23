import { useContext, useState } from "react";

// Components
import {
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Checkbox,
    FormLabel,
    Flex
} from '@chakra-ui/react'

import { TasksDispatchContext } from "./TasksContext";
export const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TasksDispatchContext);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <InputGroup size='md'>
                <Input
                    value={task.text}
                    onChange={e => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                text: e.target.value
                            }
                        });
                    }} />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={() => setIsEditing(false)}>
                        Save
                    </Button>
                </InputRightElement>
            </InputGroup>
        );
    } else {
        taskContent = (
            <InputGroup size='md'>
                <FormLabel w='100%' className="text">{task.text}</FormLabel>
                <Button h='1.75rem' size='sm' onClick={() => setIsEditing(true)}>
                    Edit
                </Button>
            </InputGroup>
        );
    }

    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Checkbox
                checked={task.done}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            done: e.target.checked
                        }
                    });
                }} />

            {taskContent}

            <Button
                h='1.75rem'
                size='sm'
                onClick={() => {
                    dispatch({
                        type: 'deleted',
                        id: task.id
                    });
                }}
            >
                Delete
            </Button>
        </Flex>
    );
}