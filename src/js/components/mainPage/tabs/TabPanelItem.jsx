import React from 'react'
import {
    Badge,
    Button, Card,
    CardBody,
    CardFooter,
    CardHeader,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text
} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export const TabPanelItem = ({itemData}) => {

    return (
        <Card>
            <CardHeader>
                <Grid gap={3}>
                    <GridItem w='100%'>
                        <Stack direction='row'>
                            {
                                itemData.badges.map((data, idx) => {
                                    return(
                                        <Badge key={idx} colorScheme={data.color}>{data.name}</Badge>
                                    )
                                })
                            }
                        </Stack>
                    </GridItem>
                    <GridItem w='100%'>
                        <Heading size='md'>{itemData.heading}</Heading>
                    </GridItem>
                </Grid>
            </CardHeader>
            <CardBody className='card-body'>
                <Grid gap={6}>
                    <GridItem w='100%'>
                        <Image
                            boxSize='250px'
                            objectFit='cover'
                            src={itemData.img_src}
                            alt='Tic-Tac-Toe'
                        />
                    </GridItem>
                    <GridItem w='100%'>
                        <Text>{itemData.description}</Text>
                    </GridItem>
                </Grid>
            </CardBody>
            <CardFooter>
                <Link to={itemData.btn_link}>
                    <Button>View here</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}