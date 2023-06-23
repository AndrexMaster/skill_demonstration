import { useState, useContext } from 'react';
import { TasksDispatchContext } from './TasksContext';
import {
    Button,
    Input,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react";

export const AddTask = () => {
    const [text, setText] = useState('');
    const dispatch = useContext(TasksDispatchContext);
    return (
        <InputGroup size='md'>
            <Input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)} />
            <InputRightElement width='4.5rem'>
                <Button
                    h='1.75rem'
                    size='sm'
                    onClick={() => {
                        setText('');
                        dispatch({
                            type: 'added',
                            id: nextId++,
                            text: text,
                        });
                    }}
                >
                    Save
                </Button>
            </InputRightElement>
        </InputGroup>
    );
}

let nextId = 3;
