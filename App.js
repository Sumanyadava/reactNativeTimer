import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts } from 'expo-font';
import { useState,useEffect } from 'react';
import dayjs from 'dayjs'

export default function App() {

  const [dateSt,setDateSt] = useState(dayjs());

  useEffect(()=>{
    const intervalvar = setInterval(()=>{
      setDateSt(dayjs())
    },1000)

    return () => clearInterval(intervalvar)
  },[])

  const target1var = dayjs('2024-04-29')
  const difjobs = target1var.diff(dateSt,"day")

  const target2var = dayjs('2025-03-22')
  const difcontract = target2var.diff(dateSt,"day")

  

  let [fontLoader] = useFonts({
    'Days':require('./assets/fonts/DaysOne.ttf')
  })
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textHour}>{dateSt.format("ddd/MMM  :hh:mm:ss A")}</Text>
      </View>
      <View style={styles.box2}>
      <Text style={styles.textHour2}>{difjobs}</Text>
      </View>
      <View style={styles.box3}>
      <Text style={styles.textHour2}>{difcontract}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363434',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box: {
    height: 100,
    width: '80%',
    borderRadius: 15,
    backgroundColor: '#FFF623',
    alignItems:"center",
    justifyContent:"center",
  },
  box2: {
    height: '30%',
    width: '80%',
    borderRadius: 15,
    backgroundColor: '#BB2EFD',
    alignItems:"center",
    justifyContent:"center",
  },
  box3: {
    height: '30%',
    width: '80%',
    borderRadius: 15,
    backgroundColor: '#FF1D53',
    alignItems:"center",
    justifyContent:"center",
  },
  textHour: {

    fontFamily:"Days",
    fontSize:15,
  },
  
  textHour2: {

    fontFamily:"Days",
    fontSize:100,
  },
  
});
