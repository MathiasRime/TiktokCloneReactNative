import React, {useState} from "react";
import styled from "styled-components";
import ViewPager from '@react-native-community/viewpager';
import { Dimensions,View } from "react-native";
import VideoPlayer from '../VideoPlayer';
import {LinearGradient} from 'expo-linear-gradient';
import Info from "../Info";
import Sidebar from "../Sidebar";

const {height} = Dimensions.get('window');

const Container = styled(ViewPager)`
    height: ${height}px;
`
const Gradient = styled(LinearGradient)`
    height: 100%;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
`
const Center = styled.View`
	flex: 1;
	flex-direction: row;
`

const Hero = ({videos}) => {

    const [selected, setSelected] = useState(0);

    return (
    <Container 
        orientation='vertical'
        onPageSelected={e => setSelected(e.nativeEvent.position)}
        initialPage={0}
    >
     {videos.map((item,index) => {
        return(
            <View key={index}>
            <VideoPlayer 
                video={item.video}
                poster={item.poster}
                isPlay={selected === index}
            />
                    <Gradient
                        locations={[0,0.26,0.6,1]}
                        colors={[
                            'rgba(26,26,26,0.7)',
                            'rgba(26,26,26,0)',
                            'rgba(26,26,26,0)',
                            'rgba(26,26,26,0.7)'
                        ]}
                    >
                    <Center>
                        <Info user={item.user}/>
                        <Sidebar avatar={item.user.avatar} count={item.count}/>
                    </Center>
                </Gradient>
        </View>
        )
     })}
    </Container>
    )
}

export default Hero;