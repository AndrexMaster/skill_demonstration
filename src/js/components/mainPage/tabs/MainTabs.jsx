import React from 'react'
import {
    Container,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Grid,
} from '@chakra-ui/react';

// Components
import { TabPanelItem } from './TabPanelItem'
import { TabsData } from './TabsData'

// CSS
import '../../../../css/components/mainTabs.css'

export const MainTabs = () => {

    return(
        <div>
            <Container maxW='1366px' className="content-wrapper">
                <Tabs>
                    <TabList>
                        {
                            TabsData.map((data, idx) => {
                                return (
                                    <Tab key={idx} isDisabled={data.isDisabled}>{data.tab_heading}</Tab>
                                )
                            })
                        }
                    </TabList>
                    <TabPanels>
                        {
                            TabsData.length > 0 ?
                                TabsData.map((tabsItemsList, idx) => {
                                    return (
                                        <TabPanel p={6} key={idx}>
                                            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                                                {
                                                    tabsItemsList.tab_data && tabsItemsList.tab_data.length > 0 ?

                                                        tabsItemsList.tab_data.map((data, idx) => {
                                                            return (
                                                                <TabPanelItem key={idx} itemData={data} />
                                                            )
                                                        })
                                                    :
                                                        null
                                                }
                                            </Grid>
                                        </TabPanel>
                                    )
                                })
                            :
                                null
                        }
                    </TabPanels>
                </Tabs>
            </Container>
        </div>
    )
}