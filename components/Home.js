import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { Link } from 'react-router-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Homes extends Component{

	render(){
		return(
				<View>
				<Ionicons name="ios-person" />
					  	<Link to="/profile">
	            			<Text>Press it to Profile</Text>

	          			</Link>
				</View>
			);
	}
}
