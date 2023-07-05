import { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Select,
    Input,
    Grid,
    FormErrorMessage,
    FormHelperText,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

export const AddTask = () => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('todo')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const tasksStatusOrder = useSelector(state => state.tasksStatusOrder)
    const statusesData = useSelector(state => state.statusesData)
    const dispatch = useDispatch();

    const validateName = () => {
        return name.length > 0
    }

    const clearFormData = () => {
        setName('')
        setStatus('todo')
    }

    const newTask = () => {
        if (validateName()) {
            dispatch({
                type: 'ADD_TASK',
                payload: {
                    id: new Date().valueOf(),
                    name: name,
                    status: status
                }
            });
            clearFormData()
        }
    };

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create new task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Grid gap={6}>
                            <FormControl isInvalid={name.length <= 0}>
                                <Input
                                    placeholder="Task name"
                                    isRequired
                                    value={name}
                                    variant='flushed'
                                    onChange={e => setName(e.target.value)}
                                />
                                {validateName() ? (
                                    <FormHelperText>
                                        Enter the name.
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage>Name is required.</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl>
                                <FormLabel>Task Status</FormLabel>
                                <Select
                                    variant='flushed'
                                    onChange={e => setStatus(e.target.value)}
                                >
                                    {tasksStatusOrder.map((status, idx) => (
                                        <option key={idx} value={status}>
                                            {statusesData[status].heading}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            mr={3}
                            onClick={() => newTask()}
                        >
                            Add
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
