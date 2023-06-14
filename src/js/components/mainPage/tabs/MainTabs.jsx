import React from 'react'
import {
    Container,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Grid,
    GridItem,
} from '@chakra-ui/react';

// Components
import { TabPanelItem } from './TabPanelItem'
import { ItemsList } from './ItemsList'

// CSS
import '../../../../css/components/mainTabs.css'

export const MainTabs = () => {
    let tabsItemsList = [
        {
            'badges': [
                {
                    'name': 'React',
                    'color': 'blue',
                },
                {
                    'name': 'Game',
                    'color': 'orange',
                }
            ],
            'heading': 'Tic Tac Toe',
            'img_src': 'https://media.istockphoto.com/id/168678735/uk/%D1%84%D0%BE%D1%82%D0%BE/metal-tic-tac-toe-game-pieces.jpg?s=612x612&w=0&k=20&c=ByOFZX5qEZJgCKvu7p-mZaXJtl4_eE4hjsLIF_1nos0=',
            'description': 'View a summary of all your customers over the last month.',
            'btn_link': '/tic-tac-toe'
        },
        {
            'badges': [
                {
                    'name': 'React',
                    'color': 'blue',
                },
                {
                    'name': 'App',
                    'color': 'red',
                }
            ],
            'heading': 'Tasks List',
            'img_src': 'https://t3.ftcdn.net/jpg/02/59/31/70/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg',
            'description': 'View a summary of all your customers over the last month.',
            'btn_link': '/task-list'
        },

    ]

    console.log(ItemsList)

    return(
        <div>
            <Container maxW='1366px' className="content-wrapper">
                <Tabs>
                    <TabList>
                        {
                            ItemsList.map((data, idx) => {
                                return (
                                    <Tab key={idx}>{data.tab_heading}</Tab>
                                )
                            })
                        }
                    </TabList>
                    <TabPanels>
                        {
                            ItemsList.map((data, idx) => {
                                return (
                                    <TabPanel p={6}>
                                        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                                            {
                                                tabsItemsList.map((data, idx) => {
                                                    return (
                                                        <GridItem key={idx} w='100%'>
                                                            <TabPanelItem itemData={data} />
                                                        </GridItem>
                                                    )
                                                })
                                            }
                                        </Grid>
                                    </TabPanel>
                                )
                            })
                        }
                    </TabPanels>
                </Tabs>
            </Container>
        </div>
    )
}