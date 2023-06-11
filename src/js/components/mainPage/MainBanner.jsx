import React from 'react'
import { Container } from '@chakra-ui/react';

export const MainBanner = () => {
    const alertText = {
        color: 'red',
        'border-bottom': '3px solid red',
        padding: '0 25px'
    }

    return(
        <div className="main-banner">
            <Container maxW='1366px' className="content-wrapper">
                <div className="main-banner__content">
                    <h1>Preview<br/>Content</h1>
                    <span style={alertText}>Paralax</span>
                </div>
            </Container>
        </div>
    )
}