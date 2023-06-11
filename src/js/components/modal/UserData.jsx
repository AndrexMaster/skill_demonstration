import React from "react";
import {
    Avatar,
    Button, Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Text,
    Grid,
    GridItem,
} from "@chakra-ui/react";

export const UserDataModal = (props) => {
    let userData = props.userData

    return (
        <Modal isCentered isOpen={props.isOpen} onClose={props.onClose}>
            {props.overlay}
            <ModalContent>
                <ModalHeader>User Info</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                    <Grid gap={6}>
                        <GridItem w='100%'>
                            <Grid templateColumns='auto 1fr' alignItems="center" gap={4}>
                                <GridItem w='100%'>
                                    <Avatar className="card-img-top" src={userData.avatar_url} name='Segun Adebayo'/>
                                </GridItem>
                                <GridItem w='100%'>
                                    <Heading size='sm'>{userData.name ? userData.name : userData.login}</Heading>
                                </GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem w='100%'>
                            <Grid gap={2}>
                                {

                                    userData.bio ? (
                                        <GridItem w='100%'>
                                            <Text>
                                                userData.bio
                                            </Text>
                                        </GridItem>
                                    ) : null

                                }
                                {
                                    userData.followers ? (
                                        <GridItem w='100%'>
                                            <Text className="user_followers">
                                                User followers: {userData.followers}
                                            </Text>
                                        </GridItem>
                                    ) : null
                                }
                                {
                                    userData.following ? (
                                        <GridItem w='100%'>
                                            <Text>
                                                User following: {userData.following}
                                            </Text>
                                        </GridItem>
                                    ) : null
                                }
                            </Grid>
                        </GridItem>
                    </Grid>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={props.onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}