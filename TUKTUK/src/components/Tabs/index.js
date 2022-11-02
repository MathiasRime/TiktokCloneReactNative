import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute  } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Alert, TouchableOpacity } from 'react-native';

const Container = styled.View`
	height: 59px;
	width: 100%;
	position: absolute;
	bottom: 0;
	z-index: 1;
	border-top-width: 1px;
	border-top-color: rgba(255, 255, 255, 0.2);
	flex-direction: row;
    background-color: black;
`
const Menu = styled.TouchableOpacity`
	width: 20%;
	height: 100%;
	justify-content: center;
	align-items: center;
`
const Icon = styled.Image.attrs({ resizeMode: 'contain' })`
	height: 32px;
`
const MenuText = styled.Text`
	font-size: 9px;
	margin-top: -3px;
	color: ${props => (props.active ? '#fff' : 'rgba(255,255,255,0.6)')};
`
const Border = styled(LinearGradient)`
	width: 44px;
	height: 28px;
	border-radius: 8px;
	align-items: center;
`
const Button = styled.View`
	width: 36px;
	height: 28px;
	background: #fff;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
`
const showAlert = () =>
  Alert.alert(
    "Déja sur la page",
    "vous êtes deja sur la page",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
const Tabs = ({}) => {
	const navigation = useNavigation();
	const routeName = useRoute().name;

	return (
		<Container>
			<Menu>
				<TouchableOpacity onPress={()=> routeName != 'Home' ? navigation.navigate('Home') : showAlert}>
					<Icon source={require('../../../assets/home.png')} />
				</TouchableOpacity>
				<MenuText active='true'>Menu</MenuText>
			</Menu>

			<Menu>
				<Icon source={require('../../../assets/discover.png')} />
				<MenuText>Découvrir</MenuText>
			</Menu>

			<Menu>
				<Border
					start={{ x: 1, y: 0 }}
					locations={[0, 0.5, 0.5, 1]}
					colors={['#F42365', '#f42365', '#37d7cf', '#37d7cf']}>
					<Button>
						<Feather name='plus' size={20} />
					</Button>
				</Border>
			</Menu>

			<Menu>
				<Icon source={require('../../../assets/message.png')} />
				<MenuText>Message</MenuText>
			</Menu>

			<Menu>
				
				<TouchableOpacity onPress={()=> routeName != 'Profil' ? navigation.navigate('Profil') : showAlert}>
					<Icon source={require('../../../assets/profile.png')}/>
				</TouchableOpacity>
					<MenuText>Profil</MenuText>
				
			</Menu>
		</Container>
	)
}

export default Tabs;