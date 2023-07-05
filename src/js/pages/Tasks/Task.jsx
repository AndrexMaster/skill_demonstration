import { useDispatch } from "react-redux";

// Components
import {
    Button,
    InputGroup,
    Flex,
    Editable,
    EditablePreview,
    EditableInput
} from '@chakra-ui/react'

export const Task = ({task }) => {
    const dispatch = useDispatch();

    const changeName = (data) => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                id: task.id,
                name: data,
            }
        });
    };

    const changeStatus = (data) => {

    }

    const deleteTask = () => {

        dispatch({
            type: 'DELETE_TASK',
            payload: {
                id: task.id,
            }
        })
    }

    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <InputGroup size='md'>
                <Editable defaultValue={task.name}>
                    <EditablePreview />
                    <EditableInput onChange={e => changeName(e.target.value)}/>
                </Editable>
            </InputGroup>
            <Button
                h='1.75rem'
                size='sm'
                onClick={() => deleteTask()}
            >
                Delete
            </Button>
        </Flex>
    );
}