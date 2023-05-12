import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserDataModal } from "../components/modal/UserData"
import {
    Card,
    CardHeader,
    CardFooter,
    Flex,
    Box,
    Grid,
    GridItem,
    Avatar,
    Heading,
    Button,
    useDisclosure,
    ModalOverlay,
} from '@chakra-ui/react'
export const UserListTable = (props) => {

    const getUserData = (userLogin) => {
        if (userLogin)
            axios
                .get('https://api.github.com/users/'+ userLogin)
                .then((e) => {
                    setUserData(e.data)
                });
    };

    const UserDataOverlay = () => {
        return (
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px)'
            />
        );
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<UserDataOverlay />);
    const [userData, setUserData] = useState([]);
    const usersListItems = props.usersListItems;


    const displayInfoArrContent = () => {
        return (
            Object.keys(usersListItems).map((elem, index)=>
                {
                    return(
                        <Card key={index} borderWidth='1px' borderColor="dark" borderRadius='lg' maxW='md' className="card">
                            <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar className="card-img-top" src={usersListItems[elem]['avatar_url']} name='Segun Adebayo'/>

                                        <Box>
                                            <Heading size='sm'>{usersListItems[elem]['login']}</Heading>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </CardHeader>
                            <CardFooter
                                className="card-bottom"
                                justify='space-between'
                                flexWrap='wrap'
                                sx={{
                                    '& > button': {
                                        minW: '136px',
                                    },
                                }}
                            >
                                <Grid templateColumns='repeat(2, 1fr)' gap={3}>
                                    <GridItem w='100%'>
                                        <Button
                                            colorScheme="blue"
                                            onClick={() => {
                                                setOverlay(<UserDataOverlay />)
                                                getUserData(usersListItems[elem]['login'])
                                                onOpen()
                                            }}
                                        >
                                            User profile
                                        </Button>
                                    </GridItem>
                                    <GridItem w='100%'>
                                        <Button colorScheme="blue">
                                            <Link to={usersListItems[elem]['html_url']} target="_blank" rel="noopener noreferrer" className="username btn btn-secondary">Profile on Git</Link>
                                        </Button>
                                    </GridItem>
                                </Grid>
                            </CardFooter>
                        </Card>
                    )
                }
            )
        );
    }

    return (
        <>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {displayInfoArrContent()}
            </Grid>
            <UserDataModal
                isOpen={isOpen}
                overlay={overlay}
                onClose={onClose}
                userData={userData}
            />
        </>
    );
}