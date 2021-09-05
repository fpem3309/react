import React from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOpthions = {
    Haze : {
        iconName : "weather-hail",
        gradient : ["#4DA0B0" , "#D39D38"],
        title : "Haze",
        subtitle : "헤이헤이 헤이즈"
    },
    Thunderstorm : {
        iconName :"weather-lightning",
        gradient : ["#373B44", "#4286F4"],
        title : "Thunderstorm",
        subtitle : "썬더 필 더 썬더"
    },
    Drizzle : {
        iconName :"weather-hail",
        gradient : ["#89F7FE", "#66A6FF"],
        title : "Drizzle",
        subtitle : "이건 무슨 날씨여"
    },
    Rain : {
        iconName :"weather-rainy",
        gradient : ["#00C6FB", "#005BEA"],
        title : "Rain",
        subtitle : "밖에 비온다 주륵주륵"
    },
    Snow : {
        iconName :"weather-snowy",
        gradient : ["#7DE2FC", "#B9B6E5"],
        title : "Snow",
        subtitle : "손이 꽁꽁꽁 발이 꽁꽁꽁"
    },
    Atmosphere : {
        iconName :"weather-hail",
        gradient : ["#89F7Fe", "#66A6FF"],
        title : "Atmosphere",
        subtitle : "이것도 무슨 날씨여"
    },
    Clear : {
        iconName :"weather-sunny",
        gradient : ["#FF7300", "#FEF253"],
        title : "Clear",
        subtitle : "날씨 한번 지리네"
    },
    Clouds : {
        iconName :"weather-cloudy",
        gradient : ["#D7D2CC", "#304352"],
        title : "Cloud",
        subtitle : "날씨 한번 별로네"
    },
    Mist : {
        iconName :"weather-hail",
        gradient : ["#4DA0B0", "#D39D38"],
        title : "Mist",
        subtitle : "미스트가 무슨 날씨여"
    },
    Dust : {
        iconName : "weather-hail",
        gradient : ["#4DA0B0", "#D39D38"],
        title : "Dust",
        subtitle : "더스트는 무슨 날씨여"
    }
};

export default function Weather({temp, condition}){
    return(
        <LinearGradient
        // Background Linear Gradient
        colors={weatherOpthions[condition].gradient}
        style={styles.container}
      >
          <StatusBar barStyle="light-content"/>
        <View style={styles.halfcontainer}>
            <MaterialCommunityIcons size={95} name={weatherOpthions[condition].iconName} color="white"/>
            <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={{...styles.halfcontainer, ...styles.textContainer} }>
            <Text style={styles.title}>{weatherOpthions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOpthions[condition].subtitle}</Text>
        </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    temp :{
        fontSize : 35,
        color : 'white'
    },
    halfcontainer:{
        flex:1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        color : 'white',
        fontSize : 44,
        fontWeight : '300',
        marginBottom : 10
    },
    subtitle : {
        color : 'white',
        fontSize : 24,
        fontWeight : '600'
    },
    textContainer : {
        paddingHorizontal : 20,
        alignItems : "flex-start"
    }
})