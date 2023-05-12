import React from 'react';
import { Outlet } from "react-router-dom";
// import {Button} from '@chakra-ui/react'

export const Home = () => {

// const { colorMode, toggleColorMode } = useColorMode()

  return (
      <div className="main_content">
                    
          {/*<header>*/}
          {/*    <Button onClick={toggleColorMode}>*/}
          {/*        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}*/}
          {/*    </Button>*/}
          {/*</header>*/}
        <Outlet />
      </div>
  )
}