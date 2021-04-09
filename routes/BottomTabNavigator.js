import * as React from 'react';
import {Text, View, Button, PlatformColor, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();


function Chat() {
    return(
        <View style={styles.bgg}>
            <Image 
            style={styles.Chat}
            source={require('../assets/Chat.png')}/>
        </View>
    )
}

function Profile({ navigation }) {
    return(
        <View style={styles.bgg}>
            <Image 
            style={styles.Profile}
            source={require('../assets/Profile.png')}/>
        </View>
    )
}

function Meet({ navigation }) {
    return(
        <View style={styles.bgg}>
            <TouchableOpacity 
            >
                <Image style={styles.preference} source={require('../assets/Left.png')}/>
            </TouchableOpacity>
            <Image 
            style={styles.map}
            source={require('../assets/NewMap.png')}/>
            <Image 
            style={styles.UH}
            source={require('../assets/UH.png')}/>
        </View>
    )
}


function Events({ navigation }) {
    return(
        <View style={styles.bgg}>
            <Image 
            style={styles.Orgs}
            source={require('../assets/Orgs.png')}/>
        </View>
    )
}

function Feed({ navigation }) {
    return(
        <View style={styles.bgg}>
            <Image 
            style={styles.Explore}
            source={require('../assets/Explore.png')}/>
        </View>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
        initialRouteName="Meet"
        tabBarOptions={{
            activeTintColor:'#e91e63',
        }}
        >
            <Tab.Screen 
            name="Feed" 
            component={Feed}
            options={{
                tabBarLabel:'Feed',
                tabBarIcon: ({color}) => (
                    <Icon name="megaphone-outline" color={color} size={26}/>
                )
            }}
            />
            <Tab.Screen 
            name="Chat" 
            component={Chat}
            options={{
                tabBarLabel:'Chat',
                tabBarIcon: ({color}) => (
                    <Icon name="file-tray-outline" color={color} size={26}/>
                )
            }}
            />
            <Tab.Screen 
            name="Meet" 
            component={Meet}
            options={{
                tabBarLabel:'Meet',
                tabBarIcon: ({color}) => (
                    <Icon name="people-outline" color={color} size={26}/>
                )
            }}
            />
            <Tab.Screen 
            name="Events" 
            component={Events}
            options={{
                tabBarLabel:'Events',
                tabBarIcon: ({color}) => (
                    <Icon name="paw-outline" color={color} size={26}/>
                )
            }}
            />
            <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
                tabBarLabel:'Profile',
                tabBarIcon: ({color}) => (
                    <Icon name="person-outline" color={color} size={26}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}

export default function BottomTabNavigation() {
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    bgg: {
        backgroundColor: '#F9AC85',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    preference: {
        top: -5,
    },
    map: {
        top: 30,
        width: 340,
        height: 340,
    },
    UH: {
        width: 228.67,
        height: 110.67,
        top: 50,
    },
    Explore: {
        width: '90%',
        height: '100%',
        top: 20,
    },
    Chat: {
        top: 20,
    },
    Orgs: {
        top: 30,
    },
    Profile: {
        right: 25,
        top: 50,
    },
    
})