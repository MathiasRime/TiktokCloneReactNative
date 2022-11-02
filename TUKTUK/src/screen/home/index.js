import React from 'react';

import styled from 'styled-components/native';

import Header from '../../components/header';

import { StatusBar } from 'react-native';

import Hero from '../../components/Hero';

import Tabs from '../../components/Tabs';

import api from '../../service/api';

const Container = styled.View`
    flex: 1;
    background: transparent;
`

const Home = () =>{
    return( 
    <>
        <StatusBar
            translucent
            backgroundColor='transparent'
            barStyle='light-content'
        />
        <Container>
            <Header />
            <Hero videos={api}/>
            <Tabs />
        </Container>
    </>
    )
}

export default Home;