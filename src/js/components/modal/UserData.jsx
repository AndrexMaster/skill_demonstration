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
                        <Grid templateColumns='auto 1fr' alignItems="center" gap={4}>
                            <Avatar className="card-img-top" src={userData.avatar_url} name='Segun Adebayo'/>
                            <Heading size='sm'>{userData.name ? userData.name : userData.login}</Heading>
                        </Grid>
                        <Grid gap={2}>
                            <Text>
                                userData.bio
                            </Text>
                            <Text className="user_followers">
                                User followers: {userData.followers}
                            </Text>
                            <Text>
                                User following: {userData.following}
                            </Text>
                        </Grid>
                    </Grid>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={props.onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}