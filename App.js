import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '99b9591353235046b3a3a5b669cedfa1';

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async(latitude,longitude)=>{
    const {
      data : {
        main : {temp},
        weather
      }
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`//metric = 섭씨 (temp = 섭씨온도로 바뀜)
      );

    //console.log(data);

    this.setState({
      isLoading:false,
      condition:weather[0].main,
      temp
    })

  };
  getLocation = async() => {
    try {
      await Location.getForegroundPermissionsAsync(); 
      const {
        coords : {latitude , longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      //this.setState({latitude : false});

    } catch (error) {
      Alert.alert("Can't find you", "so sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition} = this.state;
  return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/> ;
  }
}
