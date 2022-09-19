import { StatusBar } from 'expo-status-bar'
import { Text, View, Button, TextInput, Switch, SafeAreaView } from 'react-native'
import { lightTheme, darkTheme } from './Styles'
import { useState } from 'react'
import RadioForm from 'react-native-simple-radio-button'
import NumericInput from 'react-native-numeric-input'

export default function App () {
  const [isDark, setLight] = useState(false)
  const theme = isDark ? darkTheme : lightTheme
  const toggle = () => setLight(prev => !prev)

  const genders = [
    { label: 'Male', bottles: 'male' },
    { label: 'Female', bottles: 'female' }
  ]

  const [result, setResult] = useState(0)
  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState(genders[0].bottles)
  const [bottles, setbottles] = useState(0)
  const [hours, sethours] = useState(0)

  function calculate () {
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - burning * hours
    const res =
      gender === 'male'
        ? gramsLeft / (weight * 0.7)
        : gramsLeft / (weight * 0.6)
    setResult(res.toFixed(2))
  }

  return (
    <SafeAreaView style={theme.main}>
      {/* slider teemanvaihdolle */}
      <View style={theme.field}>
        <Text style={theme.switch}>Theme</Text>
        <Switch
          trackColor={{ true: 'red', false: 'pink' }}
          thumbColor={isDark ? "#D2DAFF" : "#AAC4FF"}
          onValueChange={toggle}
          value={isDark}
        ></Switch>
      </View>
      <View style={theme.container}>
        {/* iso otsikko */}
        <Text style={theme.textOtsikkoIso}>ALCOMETER</Text>
        {/* väliotsikko */}
        <Text style={theme.textOtsikko}>Weight</Text>
        {/* painonsyöttökenttä, numeerinen, ei desimaaleja */}
        <TextInput
          style={theme.textInput}
          keyboardType='number-pad'
          onChangeText={text => setWeight(text)}
        />
      </View>

      <View style={theme.container}>
        {/* väliotsikko */}
        <Text style={theme.textOtsikko}>Bottles</Text>
        {/* numeroInputit pulloille ja tunneille */}
        <NumericInput
          onChange={v => setbottles(v)}
          bottles={bottles}
          totalWidth={100}
          rounded
          textColor={'balck'}
          containerStyle={{backgroundColor:'white'}}
        />
        {/* väliotsikko */}
        <Text style={theme.textOtsikko}>Hours</Text>
        {/* numeroInputit pulloille ja tunneille */}
        <NumericInput
          onChange={v => sethours(v)}
          hours={hours}
          totalWidth={100}
          rounded
          textColor={'balck'}
          containerStyle={{backgroundColor:'white'}}
        />
      </View>

      <View style={theme.container}>
        {/* väliotsikko */}
        <Text style={theme.textOtsikko}>Gender</Text>
        {/* radiot sukupuolen valintaan */}
        <RadioForm
          style={theme.radio}
          labelStyle={{color: 'purple'}}
          buttonSize={10}
          radio_props={genders}
          initial={0}
          onPress={bottles => {
            setbottles(bottles)
          }}
        />
      </View>

      <View style={theme.container}>
        <Button style={theme.button} onPress={calculate} title='Count!'></Button>
        {/* tuloslaatikko */}
        <Text style={theme.result}>{result}</Text>
      </View>
       <StatusBar style='auto'
        backgroundColor='red'
      /> 
    </SafeAreaView>
  )
}

