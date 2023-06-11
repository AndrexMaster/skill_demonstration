import React from "react";
import {
    Box,
    Input,
    FormControl,
    FormLabel,
    RadioGroup,
    HStack,
    Radio,
    Grid,
    GridItem
} from '@chakra-ui/react'

export const SidebarFilters = (props) => {
    const isChecked = true;

    // Data set
    const setUserLogin = (data) => {
        props.setUserLogin('q=' + data)
    }

    const setSortBy = (data) => {
        props.setSortBy('s=' + data)
    }

    const setSortDirection = (data) => {
        props.setSortDirection('o=' + data)
    }

    return (
        <Box className="filters_list" borderWidth='1px' borderColor="dark" borderRadius='lg'>
            <FormControl className="item" as='fieldset'>
                <FormLabel as='legend'>User Login</FormLabel>
                <Input
                    type='email'
                    placeholder='Type to search an account'
                    onKeyUp={(e) => {
                        if (e.key.length === 1){
                            setUserLogin(e.target.value)
                        }
                    }}
                />
            </FormControl>
            <FormControl className="item" as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Sorting order
                </FormLabel>
                <RadioGroup
                    defaultValue='desc'
                    defaultChecked={ isChecked }
                    onChange={(e) => {
                        setSortDirection(e)
                    }}
                >
                    <HStack spacing='24px'>
                        <Grid gap={3}>
                            <GridItem>
                                <Radio value='desc'>
                                    Largest to smallest
                                </Radio>
                            </GridItem>
                            <GridItem>
                                <Radio value='asc'>
                                    Smallest to largest
                                </Radio>
                            </GridItem>
                        </Grid>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <FormControl className="item" as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Sorting order
                </FormLabel>
                <RadioGroup
                    defaultValue='login'
                    defaultChecked={ isChecked }
                    onChange={(e) => {
                        setSortBy(e)
                    }}
                >
                    <HStack spacing='24px'>
                        <Grid gap={3}>
                            <GridItem>
                                <Radio value='login'>
                                    Sort by login
                                </Radio>
                            </GridItem>
                            <GridItem>
                                <Radio value='id'>
                                    Sort by id
                                </Radio>
                            </GridItem>
                        </Grid>
                    </HStack>
                </RadioGroup>
            </FormControl>
        </Box>
    );
}