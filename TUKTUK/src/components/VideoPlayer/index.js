import React from "react";
import styled from "styled-components/native";
import { Video } from 'expo-av';

const Play = styled(Video)`
	height: 100%;
`
const Poster = styled.ImageBackground`
	height: 100%;
`

const VideoPlayer = ({ video, poster, isPlay }) => {
	return isPlay ? (
		<Play
			rate={1.0}
			volume={1.0}
			isMuted={false}
			shouldPlay
			useNativeControls={false}
			posterSource={poster}
			source={video}
			resizeMode='cover'
		/>
	) : (
		<Poster source={poster} />
	)
}

export default VideoPlayer;