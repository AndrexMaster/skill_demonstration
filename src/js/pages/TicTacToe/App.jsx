import React from 'react'

// Components
import { Game } from "./Game";
import { SideBar } from './SideBar'
import {
    Flex
} from "@chakra-ui/react";

export const TicTacToeApp = () => {
    return(
        <>
            <Flex className="tic-tac-toe-wrapper">
                <Game/>
                <SideBar />
            </Flex>
        </>
    )
}