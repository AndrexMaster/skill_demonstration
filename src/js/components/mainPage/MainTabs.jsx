import React from 'react'
import {
    Container,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Image,
    Card,
    CardHeader,
    Heading,
    CardBody,
    CardFooter,
    Button,
    Text,
    Grid,
    GridItem,
    Stack,
    Badge,
} from '@chakra-ui/react';

import { Link } from "react-router-dom";

// CSS
import '../../../css/components/mainTabs.css'

export const MainTabs = () => {

    return(
        <div>
            <Container maxW='1366px' className="content-wrapper">
                <Tabs>
                    <TabList>
                        <Tab>One</Tab>
                        <Tab isDisabled>Two</Tab>
                        <Tab>Three</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                                <GridItem w='100%'>
                                    <Card>
                                        <CardHeader>
                                            <Grid gap={3}>
                                                <GridItem w='100%'>
                                                    <Stack direction='row'>
                                                        <Badge colorScheme='blue'>React</Badge>
                                                    </Stack>
                                                </GridItem>
                                                <GridItem w='100%'>
                                                    <Heading size='md'> Customer dashboard</Heading>
                                                </GridItem>
                                            </Grid>
                                        </CardHeader>
                                        <CardBody>
                                            <Grid gap={6}>
                                                <GridItem w='100%'>
                                                    <Image
                                                        boxSize='250px'
                                                        objectFit='cover'
                                                        src='https://media.istockphoto.com/id/168678735/uk/%D1%84%D0%BE%D1%82%D0%BE/metal-tic-tac-toe-game-pieces.jpg?s=612x612&w=0&k=20&c=ByOFZX5qEZJgCKvu7p-mZaXJtl4_eE4hjsLIF_1nos0='
                                                        alt='Tic-Tac-Toe'
                                                    />
                                                </GridItem>
                                                <GridItem w='100%'>
                                                    <Text>View a summary of all your customers over the last month.</Text>
                                                </GridItem>
                                            </Grid>
                                        </CardBody>
                                        <CardFooter>
                                            <Link to='/tic-tac-toe'>
                                                <Button>View here</Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                </GridItem>
                            </Grid>
                        </TabPanel>
                        <TabPanel>2</TabPanel>
                        <TabPanel>3</TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </div>
    )
}